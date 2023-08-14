import { PropsWithChildren } from "react";

interface PageHeaderProps {
  title: string;
}
export function PageHeader({
  title,
  children,
}: PropsWithChildren<PageHeaderProps>) {
  return (
    <section className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-black-100 md:text-3xl">
        {title}
      </h2>
      <div>{children} </div>
    </section>
  );
}
