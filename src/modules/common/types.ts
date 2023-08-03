export interface Employee {
  name: string;
  id: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
  employmentType: "intern" | "contract" | "full time";
}
