"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

export function ButtonForm() {
  const [name, setName] = useState("sam");

  const [date, setDate] = useState<Date>();

  return (
    <div>
      {date ? <p>Date:{format(date, "PP")} </p> : null}
      <p>
        My name is
        {name}
      </p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays
      />
      <Button
        onClick={() => setName("test")}
        className="text-red bg-red-800"
        size="lg"
        variant="default"
      >
        {" "}
        Click me
      </Button>
    </div>
  );
}
