import React from "react";
import { QueryProvider } from "./query-provider";
import SheetProvider from "./sheet-provider";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <SheetProvider />
      <Toaster />
      {children}
    </QueryProvider>
  );
}
