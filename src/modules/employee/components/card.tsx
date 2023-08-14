"use client";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Employee } from "@/modules/common/types";
import Link from "next/link";
import { getEmployeeBadgeColor } from "../utils";
import { UserAvatar } from "./avatar";

interface CardProps extends Employee {
  className?: string;
}

export function EmployeeCard({
  name,
  phoneNumber,
  email,
  image,
  employmentType,
  position,
  department,
  id,
  className,
}: CardProps) {
  const handleClick = () => {};

  return (
    <Card className={cn("border border-solid border-gray-100 p-4", className)}>
      <Link aria-label={`View ${name} profile`} href={`/employees/${id}`}>
        <CardHeader className="flex flex-row justify-between border-b border-solid border-gray-100 pb-4">
          <div className="flex gap-2">
            <UserAvatar user={{ name, image }} />
            <div>
              <CardTitle className="pb-1  text-sm font-semibold">
                {name}{" "}
              </CardTitle>
              <p className="text-xs font-medium text-muted-foreground">
                {email}{" "}
              </p>
            </div>
          </div>
          <Badge
            className="capitalize"
            variant={getEmployeeBadgeColor(employmentType)}
          >
            {employmentType}{" "}
          </Badge>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-xs font-semibold uppercase text-muted">ID</h5>
            <p className="text-sm font-medium text-black-100">{id} </p>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-xs font-semibold uppercase text-muted">
              Position
            </h5>
            <p className="text-sm font-medium text-black-100">{position} </p>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-xs font-semibold uppercase text-muted">
              Department
            </h5>
            <p className="text-sm font-medium text-black-100 before:absolute  before:h-2 before:w-2 before:bg-red-100">
              {department}{" "}
            </p>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-xs font-semibold uppercase text-muted">
              Phone number
            </h5>
            <div className="flex items-center gap-2">
              <Icons.Phone className="h-4 w-4" />{" "}
              <p className="text-sm font-medium text-black-100">
                {phoneNumber}{" "}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="mt-5 w-full bg-black-100 text-white-100"
            icon={<Icons.Mail className="stroke-white-100" />}
            onClick={handleClick}
          >
            {" "}
            Send Message
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
