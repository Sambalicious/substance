import { Badge } from "@/components/ui/badge";

export function Card() {
  return (
    <div className="p-4">
      <div className="flex justify-between border-b border-solid border-gray-100 pb-4">
        <div className="text-right">
          <h5 className="pb-2  text-sm font-semibold">Abhoy Latif</h5>
          <p className="text-muted-foreground">ripu@meje.org</p>
        </div>
        <Badge>Contract</Badge>
      </div>
    </div>
  );
}
