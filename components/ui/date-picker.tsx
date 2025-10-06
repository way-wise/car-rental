"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (value) {
      setInputValue(format(value, "MMM dd, yyyy"));
    } else {
      setInputValue("");
    }
  }, [value]);

  const handleDateSelect = (date: Date) => {
    onChange(date);
    setInputValue(format(date, "MMM dd, yyyy"));
    setOpen(false);
  };

  const handleInputClick = () => {
    setOpen(true);
  };

  // Generate calendar days
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <CalendarIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            value={inputValue}
            placeholder={placeholder}
            onClick={handleInputClick}
            readOnly
            className={cn(
              "h-[41px] cursor-pointer rounded-md border-0 bg-white pr-4 pl-10 text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]",
              className,
            )}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </h3>
          </div>

          {/* Day names header */}
          <div className="mb-2 grid grid-cols-7 gap-1">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-2 text-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div key={index}>
                {day ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 w-full p-0 text-sm",
                      day === currentDate &&
                        "bg-primary text-white hover:bg-primary/90",
                      value &&
                        day === value.getDate() &&
                        currentMonth === value.getMonth() &&
                        currentYear === value.getFullYear() &&
                        "bg-primary text-white hover:bg-primary/90",
                      day < currentDate && "cursor-not-allowed text-gray-400",
                    )}
                    onClick={() => {
                      if (day >= currentDate) {
                        handleDateSelect(
                          new Date(currentYear, currentMonth, day),
                        );
                      }
                    }}
                    disabled={day < currentDate}
                  >
                    {day}
                  </Button>
                ) : (
                  <div className="h-8 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
