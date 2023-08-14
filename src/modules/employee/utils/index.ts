import { EmployeeColor, EmploymentType } from "../type";

export const getEmployeeBadgeColor = (
  name: EmploymentType,
): EmployeeColor | undefined => {
  const badgeColors: Record<EmploymentType, EmployeeColor> = {
    intern: "red",
    "full time": "purple",
    contract: "blue",
    "part time": "red",
  };

  return badgeColors[name];
};
