import Header from "@/components/header/header";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto w-full px-3 pb-10 -mt-24">
        {children}
      </main>
    </div>
  );
}
