import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import React from "react";

export default function DashboardPage() {
  return (
    <>
      <DataGrid />
      <DataCharts />
    </>
  );
}
