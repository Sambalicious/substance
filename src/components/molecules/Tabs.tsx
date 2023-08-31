"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactElement, useCallback, useState } from "react";

export type TabTitleProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
};

export function TabTitle(props: TabTitleProps): JSX.Element {
  const { title, setSelectedTab, index, isActive } = props;

  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li
      className={`flex items-center justify-center  text-center ${
        isActive
          ? " border-b-2 border-purple-100 pb-[.4rem] text-black-100 shadow-sm"
          : ""
      }`}
    >
      <button type="button" onClick={handleOnClick}>
        {title}
      </button>
    </li>
  );
}

type TabPanelProps = {
  title: string;
};

export function TabPanel({
  children,
  title,
}: PropsWithChildren<TabPanelProps>) {
  return <div id={title}>{children}</div>;
}

type TabsProps = {
  preSelectedTabIndex?: number;
  children: ReactElement<TabTitleProps>[];
  className?: string;
};

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const { children, preSelectedTabIndex, className } = props;

  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedTabIndex || 0,
  );

  return (
    <div>
      <ul
        className={cn(
          "inline-flex h-10 items-center justify-center border-b border-gray-100 bg-muted px-4 py-8 text-muted-foreground",
          className,
        )}
      >
        {children?.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index */}
      <div className="p-6">{children[selectedTabIndex]}</div>
    </div>
  );
}
