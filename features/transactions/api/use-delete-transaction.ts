import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)[":id"]["$delete"]
>;

export const useDeleteTransaction = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.transactions[":id"]["$delete"]({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Transaction deleted Successfully!");
      queryClient.invalidateQueries({ queryKey: ["transaction", { id }] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });

      // TODO: Invalidate the account summary
    },
    onError: () => {
      toast.error("Failed to delete transaction!");
    },
  });

  return mutation;
};
