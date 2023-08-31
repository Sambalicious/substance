"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TabPanel, Tabs } from "@/components/molecules/Tabs";

import { allEmployees } from "@/modules/common/mocks";
import { EmployeePage } from "..";
import { EmployeeCard } from "./card";

interface TabListProps {
  id: number;
  name: string;
  component: React.ReactNode;
  value: string;
}
export const tabList: TabListProps[] = [
  {
    id: 1,
    name: "All Employees",
    value: "allEmployees",
    component: <EmployeePage />,
  },
  {
    id: 2,
    name: "Marketing",
    value: "marketing",
    component: <div>Marketing</div>,
  },
  {
    id: 3,
    name: "Accounting",
    value: "accounting",
    component: <div>Accounting</div>,
  },
  {
    id: 4,
    name: "Cs. Support",
    value: "support",
    component: <div>Cs. Support</div>,
  },
  { id: 5, name: "Finance", value: "finance", component: <div>Fiance</div> },
  {
    id: 6,
    name: "Human Resource",
    value: "humanResource",
    component: <div>Human Resource</div>,
  },
  {
    id: 7,
    name: "IT Support",
    value: "itSupport",
    component: <div>IT Support</div>,
  },
];

// interface EmployeeTabProps {
//   allEmployees: Employee[];
// }

function EmployeeTab() {
  return (
    <div>
      <Tabs
        // orientation="vertical"
        defaultValue="allEmployees"
        // className="w-[400px] md:w-full"
      >
        <TabsList className="grid w-full grid-cols-3 overflow-x-auto md:grid-cols-7 ">
          {tabList?.map(el => (
            <TabsTrigger key={el.id} value={el.value}>
              {el.name}{" "}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="allEmployees">
          <div>
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
            <EmployeePage />
          </div>
        </TabsContent>
        <TabsContent value="marketing"> Marketing</TabsContent>
        <TabsContent value="accounting"> Accounting</TabsContent>
        <TabsContent value="support"> Support </TabsContent>
        <TabsContent value="finance">Finance</TabsContent>
        <TabsContent value="humanResource">Human Resource</TabsContent>
        <TabsContent value="itSupport">IT support </TabsContent>
      </Tabs>
    </div>
  );
}

export default EmployeeTab;
