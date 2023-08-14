import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/modules/common";
import { allEmployees } from "@/modules/common/mocks";
import EmployeeTab from "@/modules/employee/components/tab";

export default function Home() {
  return (
    <main>
      <Button
        // isLoading
        variant="default"
        className="m-5 bg-black-100 text-white-100"
        icon={<Icons.AddCircle className="h-6 w-6" />}
      >
        Click me
      </Button>{" "}
      <PageHeader title="Employees">
        <div className="flex items-center gap-3">
          <div className="flex">
            <Button
              className=" border border-solid border-gray-100 hover:text-purple-100"
              variant="ghost"
              icon={<Icons.Grid className="h-6 w-6" />}
            />

            <Button
              className="border border-solid border-gray-100 hover:text-purple-100"
              variant="ghost"
              icon={<Icons.List className="h-6 w-6" />}
            />
          </div>
          <Button
            className=" text-white-100"
            icon={<Icons.Add className="h-6 w-6" />}
          >
            Add Employee
          </Button>{" "}
        </div>
      </PageHeader>
      <EmployeeTab allEmployees={allEmployees} />
    </main>
  );
}
