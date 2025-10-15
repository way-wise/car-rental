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
import { CalendarIcon, X } from "lucide-react";
import * as React from "react";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
  className,
  disabled = false,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [tempRange, setTempRange] = React.useState<DateRange>({
    from: value?.from,
    to: value?.to,
  });

  // Update input value when value prop changes
  React.useEffect(() => {
    if (value?.from && value?.to) {
      setInputValue(
        `${format(value.from, "MMM dd, yyyy")} - ${format(value.to, "MMM dd, yyyy")}`,
      );
    } else if (value?.from) {
      setInputValue(format(value.from, "MMM dd, yyyy"));
    } else {
      setInputValue("");
    }
  }, [value]);

  // Reset temp range when popover opens
  React.useEffect(() => {
    if (open) {
      setTempRange({
        from: value?.from,
        to: value?.to,
      });
    }
  }, [open, value]);

  const handleDateSelect = (date: Date) => {
    // Normalize the date to remove time component
    const normalizedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    if (!tempRange.from || (tempRange.from && tempRange.to)) {
      // Start new range
      setTempRange({ from: normalizedDate, to: undefined });
    } else if (tempRange.from && !tempRange.to) {
      // Complete the range
      const fromDate = new Date(
        tempRange.from.getFullYear(),
        tempRange.from.getMonth(),
        tempRange.from.getDate(),
      );
      if (normalizedDate < fromDate) {
        setTempRange({ from: normalizedDate, to: fromDate });
      } else {
        setTempRange({ from: fromDate, to: normalizedDate });
      }
    }
  };

  const handleApply = () => {
    onChange(tempRange);
    setOpen(false);
  };

  const handleClear = () => {
    const clearedRange = { from: undefined, to: undefined };
    setTempRange(clearedRange);
    onChange(clearedRange);
    setInputValue("");
  };

  const handleCancel = () => {
    setTempRange({
      from: value?.from,
      to: value?.to,
    });
    setOpen(false);
  };

  // Calendar state
  const [displayMonth, setDisplayMonth] = React.useState(() => {
    const today = new Date();
    return {
      month: today.getMonth(),
      year: today.getFullYear(),
    };
  });

  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

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

  // Get days in month for display month
  const daysInMonth = new Date(
    displayMonth.year,
    displayMonth.month + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    displayMonth.year,
    displayMonth.month,
    1,
  ).getDay();

  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const isDateInRange = (day: number) => {
    if (!tempRange.from) return false;
    const date = new Date(displayMonth.year, displayMonth.month, day);

    if (tempRange.to) {
      // Normalize dates to compare only date parts (ignore time)
      const fromDate = new Date(
        tempRange.from.getFullYear(),
        tempRange.from.getMonth(),
        tempRange.from.getDate(),
      );
      const toDate = new Date(
        tempRange.to.getFullYear(),
        tempRange.to.getMonth(),
        tempRange.to.getDate(),
      );
      const currentDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );

      return currentDate >= fromDate && currentDate <= toDate;
    } else {
      const fromDate = new Date(
        tempRange.from.getFullYear(),
        tempRange.from.getMonth(),
        tempRange.from.getDate(),
      );
      const currentDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
      return currentDate.getTime() === fromDate.getTime();
    }
  };

  const isDateStart = (day: number) => {
    if (!tempRange.from) return false;
    const date = new Date(displayMonth.year, displayMonth.month, day);
    const fromDate = new Date(
      tempRange.from.getFullYear(),
      tempRange.from.getMonth(),
      tempRange.from.getDate(),
    );
    const currentDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    return currentDate.getTime() === fromDate.getTime();
  };

  const isDateEnd = (day: number) => {
    if (!tempRange.to) return false;
    const date = new Date(displayMonth.year, displayMonth.month, day);
    const toDate = new Date(
      tempRange.to.getFullYear(),
      tempRange.to.getMonth(),
      tempRange.to.getDate(),
    );
    const currentDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    return currentDate.getTime() === toDate.getTime();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <CalendarIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            value={inputValue}
            placeholder={placeholder}
            onClick={() => !disabled && setOpen(true)}
            readOnly
            disabled={disabled}
            className={cn(
              "h-[41px] cursor-pointer rounded-md border-0 bg-white pr-8 pl-10 text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]",
              disabled && "cursor-not-allowed opacity-50",
              className,
            )}
          />
          {(value?.from || value?.to) && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 p-0 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setDisplayMonth((prev) => {
                  const newMonth = prev.month === 0 ? 11 : prev.month - 1;
                  const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
                  return { month: newMonth, year: newYear };
                });
              }}
              className="h-8 w-8 p-0"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <h3 className="text-lg font-semibold">
              {monthNames[displayMonth.month]} {displayMonth.year}
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setDisplayMonth((prev) => {
                  const newMonth = prev.month === 11 ? 0 : prev.month + 1;
                  const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
                  return { month: newMonth, year: newYear };
                });
              }}
              className="h-8 w-8 p-0"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
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
                      isDateInRange(day) && "bg-primary/20 text-primary",
                      isDateStart(day) &&
                        "bg-primary text-white hover:bg-primary/90",
                      isDateEnd(day) &&
                        "bg-primary text-white hover:bg-primary/90",
                      (() => {
                        const selectedDate = new Date(
                          displayMonth.year,
                          displayMonth.month,
                          day,
                        );
                        const isPastDate =
                          selectedDate <
                          new Date(currentYear, currentMonth, currentDate);
                        return isPastDate && "cursor-not-allowed text-gray-400";
                      })(),
                    )}
                    onClick={() => {
                      const selectedDate = new Date(
                        displayMonth.year,
                        displayMonth.month,
                        day,
                      );
                      const isToday =
                        selectedDate.getDate() === currentDate &&
                        selectedDate.getMonth() === currentMonth &&
                        selectedDate.getFullYear() === currentYear;
                      const isPastDate =
                        selectedDate <
                        new Date(currentYear, currentMonth, currentDate);

                      if (!isPastDate || isToday) {
                        handleDateSelect(selectedDate);
                      }
                    }}
                    disabled={
                      day < currentDate &&
                      displayMonth.month === currentMonth &&
                      displayMonth.year === currentYear
                    }
                  >
                    {day}
                  </Button>
                ) : (
                  <div className="h-8 w-full" />
                )}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleApply}
              disabled={!tempRange.from}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
