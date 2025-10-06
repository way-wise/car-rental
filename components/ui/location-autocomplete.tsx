"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, MapPinIcon } from "lucide-react";
import * as React from "react";

interface LocationSuggestion {
  place_id: string;
  description: string;
  formatted_address?: string;
  types?: string[];
}

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function LocationAutocomplete({
  value,
  onChange,
  placeholder = "Enter location",
  className,
}: LocationAutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<LocationSuggestion[]>(
    [],
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const [selectedLocation, setSelectedLocation] =
    React.useState<LocationSuggestion | null>(null);

  // Function to fetch places from Google Places API
  const fetchPlaces = async (input: string): Promise<LocationSuggestion[]> => {
    if (!input || input.length < 2) return [];

    try {
      const response = await fetch(
        `/api/places/autocomplete?input=${encodeURIComponent(input)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch places");
      }
      const data = await response.json();
      return data.predictions || [];
    } catch (error) {
      console.error("Error fetching places:", error);
      return [];
    }
  };

  // Debounce timer ref
  const debounceTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Clear selected location if input doesn't match
    if (
      selectedLocation &&
      !newValue
        .toLowerCase()
        .includes(selectedLocation.description.toLowerCase())
    ) {
      setSelectedLocation(null);
      onChange("");
    }

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Show suggestions if input has 2+ characters
    if (newValue.length >= 2) {
      setIsLoading(true);
      setOpen(true);

      // Debounce the API call
      debounceTimerRef.current = setTimeout(async () => {
        try {
          const places = await fetchPlaces(newValue);
          setSuggestions(places);
        } catch (error) {
          console.error("Error fetching places:", error);
          setSuggestions([]);
        } finally {
          setIsLoading(false);
        }
      }, 300);
    } else {
      setOpen(false);
      setSuggestions([]);
      setIsLoading(false);
    }

    // If input is empty, clear everything
    if (newValue === "") {
      setSelectedLocation(null);
      onChange("");
    }
  };

  // Cleanup timer on unmount
  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleLocationSelect = (location: LocationSuggestion) => {
    setSelectedLocation(location);
    setInputValue(location.description);
    onChange(location.description);
    setOpen(false);
  };

  const handleInputFocus = () => {
    if (inputValue.length >= 2) {
      setOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay closing to allow click on suggestions
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <div className="relative">
      <div className="relative">
        <MapPinIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={cn(
            "h-[41px] rounded-md border-0 bg-white pr-4 pl-10 text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]",
            className,
          )}
        />
        {isLoading && (
          <Loader2 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin text-gray-400" />
        )}
      </div>

      {/* Suggestions dropdown */}
      {open && (
        <div className="absolute top-full right-0 left-0 z-50 mt-1 rounded-md border bg-white shadow-lg">
          {isLoading ? (
            <div className="p-3 text-sm text-gray-500">
              Searching locations...
            </div>
          ) : suggestions.length > 0 ? (
            <div className="max-h-60 overflow-y-auto">
              {suggestions.map((location) => (
                <div
                  key={location.place_id}
                  className="flex cursor-pointer items-start gap-3 border-b p-3 last:border-b-0 hover:bg-gray-50"
                  onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                  onClick={() => handleLocationSelect(location)}
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-left text-sm font-medium text-gray-900">
                      {location.description}
                    </div>
                    {location.formatted_address && (
                      <div className="mt-0.5 truncate text-left text-xs text-gray-500">
                        {location.formatted_address}
                      </div>
                    )}
                    {location.types && location.types.length > 0 && (
                      <div className="mt-1 flex gap-1">
                        {location.types.slice(0, 2).map((type) => (
                          <span
                            key={type}
                            className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                          >
                            {type.replace("_", " ")}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : inputValue.length >= 2 && !isLoading ? (
            <div className="p-3 text-sm text-gray-500">No locations found</div>
          ) : null}
        </div>
      )}
    </div>
  );
}
