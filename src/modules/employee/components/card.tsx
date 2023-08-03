import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Employee } from "@/modules/common/types";
import { UserAvatar } from "./avatar";

interface CardProps extends Employee {
  handleClick: () => void;
}

export function Card({
  name,
  phoneNumber,
  email,
  image,
  employmentType,
  position,
  department,
  id,
  handleClick,
}: CardProps) {
  return (
    <div className="border border-solid border-gray-100 p-4">
      <div className="flex justify-between border-b border-solid border-gray-100 pb-4">
        <div className="flex gap-2">
          <UserAvatar user={{ name, image }} />
          <div>
            <h5 className="pb-1  text-sm font-semibold">{name} </h5>
            <p className="text-xs font-medium text-muted-foreground">
              {email}{" "}
            </p>
          </div>
        </div>
        <Badge>{employmentType} </Badge>
      </div>
      <div className="pt-4">
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
          <p className="text-sm font-medium text-black-100">{department} </p>
        </div>
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-xs font-semibold uppercase text-muted">
            Phone number
          </h5>
          <div className="flex items-center gap-2">
            <Icons.Phone className="h-4 w-4" />{" "}
            <p className="text-sm font-medium text-black-100">{phoneNumber} </p>
          </div>
        </div>
      </div>
      <Button
        className="mt-5 w-full bg-black-100 text-white-100"
        icon={<Icons.Mail className="stroke-white-100" />}
        onClick={handleClick}
      >
        {" "}
        Send Message
      </Button>
    </div>
  );
}
