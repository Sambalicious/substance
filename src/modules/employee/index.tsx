"use client";

import { Badge } from "@/components/ui/badge";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../common";
import { allEmployees } from "../common/mocks";
import { Employee } from "../common/types";
import { EmploymentType } from "./type";
import { getEmployeeBadgeColor } from "./utils";

export const employeeColumn: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "employmentType",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("employmentType") as EmploymentType;
      return <Badge variant={getEmployeeBadgeColor(status)}>{status} </Badge>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icons.VerticalThreeDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

async function getEmployeeData(): Promise<Employee[]> {
  return allEmployees;
}

export async function EmployeePage() {
  const data = await getEmployeeData();
  return (
    <section>
      <DataTable columns={employeeColumn} data={data} />
    </section>
  );
}
