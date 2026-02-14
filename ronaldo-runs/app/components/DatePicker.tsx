"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  date: Date | null;
  onDateChange: (date: Date | null) => void;
}

export function DatePicker({ date, onDateChange: setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer !w-23/24 group">
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal bg-slate-500 text-white"
        >
          <CalendarIcon className="text-white group-hover:text-black" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-white group-hover:text-black">
              Pick a date
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}
