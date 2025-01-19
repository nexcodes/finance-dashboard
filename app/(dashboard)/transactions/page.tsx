"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { transactions as transactionsSchema } from "@/db/schema";
import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";
import { useBulkCreateTransactions } from "@/features/transactions/api/use-bulk-create";
import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { columns } from "./columns";
import ImportCard from "./import-card";
import { UploadButton } from "./upload-button";
import { toast } from "sonner";

enum VARIANTS {
  LIST = "LIST",
  IMPORT = "IMPORT",
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {},
};

export default function TransactionPage() {
  const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);

  const transaction = useNewTransaction();

  const deleteTransactions = useBulkDeleteTransactions();
  const createTransactions = useBulkCreateTransactions();

  const TransactionsQuery = useGetTransactions();
  const transactionsData = TransactionsQuery.data || [];

  const isDisabled =
    TransactionsQuery.isLoading || deleteTransactions.isPending;

  const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    setImportResults(results);
    setVariant(VARIANTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };

  const onSubmitImport = async (
    values: (typeof transactionsSchema.$inferInsert)[]
  ) => {
    const accountId = await confirm();

    if (!accountId) {
      return toast.error("Please Select an account to continue.");
    }

    const data = values.map((value) => ({
      ...value,
      accountId: accountId as string,
    }));

    createTransactions.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      },
    });
  };

  if (TransactionsQuery.isLoading) {
    return (
      <Card className="border-none drop-shadow-sm">
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent>
          <div className="h-[500px] w-full flex items-center justify-center">
            <Loader2 className="size-6 text-slate-300 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === VARIANTS.IMPORT) {
    return (
      <>
        <AccountDialog />
        <ImportCard
          data={importResults.data}
          onCancel={onCancelImport}
          onSubmit={onSubmitImport}
        />
      </>
    );
  }

  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="text-xl line-clamp-1">
          Transaction History
        </CardTitle>
        <div className="flex items-center gap-2">
          <Button
            onClick={transaction.onOpen}
            size="sm"
            className="w-full lg:w-auto"
          >
            <Plus className="size-4" />
            Add new
          </Button>
          <UploadButton onUpload={onUpload} className="w-full lg:w-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <DataTable
          filterKey="payee"
          columns={columns}
          data={transactionsData}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);
            deleteTransactions.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </CardContent>
    </Card>
  );
}
