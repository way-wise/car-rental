"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ClockIcon } from "lucide-react";
import * as React from "react";

interface TimePickerProps {
  value?: string;
  onChange: (time: string) => void;
  placeholder?: string;
  className?: string;
  selectedDate?: Date;
}

export function TimePicker({
  value,
  onChange,
  placeholder = "Select time",
  className,
  selectedDate,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value || "");

  React.useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  // Generate time options (every 15 minutes)
  const timeOptions = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const displayTime = formatTime(timeString);
      timeOptions.push({
        value: timeString,
        display: displayTime,
      });
    }
  }

  function formatTime(time24: string): string {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }

  const handleTimeSelect = (timeValue: string, displayTime: string) => {
    onChange(timeValue);
    setInputValue(displayTime);
    setOpen(false);
  };

  const handleInputClick = () => {
    setOpen(true);
  };

  // Filter time options based on selected date
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const selectedDateOnly = selectedDate
    ? new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      )
    : null;

  const isToday =
    selectedDateOnly && selectedDateOnly.getTime() === today.getTime();
  const isFutureDate =
    selectedDateOnly && selectedDateOnly.getTime() > today.getTime();

  const filteredTimeOptions = timeOptions.filter((option) => {
    // If no date selected or future date selected, show all times
    if (!selectedDate || isFutureDate) {
      return true;
    }

    // If today is selected, only show future times
    if (isToday) {
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;
      const [hours, minutes] = option.value.split(":").map(Number);
      const optionTime = hours * 60 + minutes;
      return optionTime >= currentTime;
    }

    // For past dates, show no times (or you could show all times if needed)
    return false;
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <ClockIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
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
        <div className="p-2">
          <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-h-60 w-48 overflow-y-auto">
            {filteredTimeOptions.length > 0 ? (
              filteredTimeOptions.map((option) => (
                <Button
                  key={option.value}
                  variant="ghost"
                  className={cn(
                    "h-8 w-full justify-start px-3 py-1 text-sm font-normal",
                    value === option.value &&
                      "bg-primary text-white hover:bg-primary/90",
                  )}
                  onClick={() => handleTimeSelect(option.value, option.display)}
                >
                  {option.display}
                </Button>
              ))
            ) : (
              <div className="p-3 text-center text-sm text-gray-500">
                {selectedDate
                  ? isToday
                    ? "No available times for today"
                    : "No available times for selected date"
                  : "No available times"}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
