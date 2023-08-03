import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/modules/employee/components";

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
      <Card
        name="Sadio Mane"
        id="AMD-001"
        email="sadio@test.com"
        phoneNumber="+44397646474"
        position="Sr Frontend Engineer"
        department="Tech"
        employmentType="intern"
        image=""
      />
    </main>
  );
}
