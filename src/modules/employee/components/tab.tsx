import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Employee } from "@/modules/common/types";
import { EmployeeCard } from "./card";

interface TabListProps {
  id: number;
  name: string;
  component: React.ReactNode;
}
export const tabList: TabListProps[] = [
  { id: 1, name: "All Employees", component: <div>All Employees</div> },
  { id: 2, name: "Marketing", component: <div>Marketing</div> },
  { id: 3, name: "Accounting", component: <div>Accounting</div> },
  { id: 4, name: "Cs. Support", component: <div>Cs. Support</div> },
  { id: 5, name: "Fiance", component: <div>Fiance</div> },
  { id: 6, name: "Human Resource", component: <div>Human Resource</div> },
  { id: 7, name: "IT Support", component: <div>IT Support</div> },
];

interface EmployeeTabProps {
  allEmployees: Employee[];
}

export default function EmployeeTab({ allEmployees }: EmployeeTabProps) {
  return (
    <div>
      <Tabs
        // orientation="vertical"
        defaultValue="All Employees"
        className="w-[400px] md:w-full"
      >
        <TabsList className="grid w-full grid-cols-3 overflow-x-auto md:grid-cols-7 ">
          {tabList?.map(el => (
            <TabsTrigger key={el.id} value={el.name}>
              {el.name}{" "}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="All Employees">
          {allEmployees?.length > 0 &&
            allEmployees.map(el => (
              <EmployeeCard
                key={el.id}
                name={el.name}
                id={el.id}
                email={el.email}
                phoneNumber={el.phoneNumber}
                position={el.position}
                department={el.department}
                employmentType={el.employmentType}
                image={el.image}
              />
            ))}{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}
