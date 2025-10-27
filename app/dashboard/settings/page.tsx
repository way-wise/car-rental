"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Settings {
  id: string;
  baseRate: number;
  distanceChargePerMile: number;
  timeChargePerMinute: number;
  peakTimeMultiplier: number;
  peakRanges: { startHour: number; endHour: number }[] | null;
  holidayFeeEnabled: boolean;
  holidayFeeType: string;
  holidayFeeFlat: number;
  holidayFeePercentage: number;
  holidayList: string[] | null;
  minimumPrice: number;
}

const SettingsPage = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    baseRate: 2.0,
    distanceChargePerMile: 1.2,
    timeChargePerMinute: 0.25,
    peakTimeMultiplier: 1.3,
    minimumPrice: 10.0,
    holidayFeeEnabled: false,
    holidayFeeType: "flat",
    holidayFeeFlat: 3.0,
    holidayFeePercentage: 15.0,
  });
  const [peakRanges, setPeakRanges] = useState([
    { startHour: 5, endHour: 10 },
    { startHour: 22, endHour: 23 },
  ]);
  const [holidayDates, setHolidayDates] = useState<string[]>([]);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/settings");
      const data = await response.json();

      if (data.success) {
        setSettings(data.settings);
        setFormData({
          baseRate: data.settings.baseRate || 2.0,
          distanceChargePerMile: data.settings.distanceChargePerMile || 1.2,
          timeChargePerMinute: data.settings.timeChargePerMinute || 0.25,
          peakTimeMultiplier: data.settings.peakTimeMultiplier || 1.3,
          minimumPrice: data.settings.minimumPrice || 10.0,
          holidayFeeEnabled: data.settings.holidayFeeEnabled || false,
          holidayFeeType: data.settings.holidayFeeType || "flat",
          holidayFeeFlat: data.settings.holidayFeeFlat || 3.0,
          holidayFeePercentage: data.settings.holidayFeePercentage || 15.0,
        });
        if (
          data.settings.peakRanges &&
          Array.isArray(data.settings.peakRanges)
        ) {
          setPeakRanges(data.settings.peakRanges);
        }
        setHolidayDates(data.settings.holidayList || []);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast.error("Failed to load settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          peakRanges,
          holidayList: holidayDates,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSettings(data.settings);
        toast.success("Settings updated successfully");
      } else {
        toast.error(data.error || "Failed to update settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Failed to save settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (
    field: string,
    value: string | number | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePeakRangeChange = (
    index: number,
    field: "startHour" | "endHour",
    value: number,
  ) => {
    const newRanges = [...peakRanges];
    newRanges[index] = { ...newRanges[index], [field]: value };
    setPeakRanges(newRanges);
  };

  const handleAddHoliday = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    if (!holidayDates.includes(dateStr)) {
      setHolidayDates([...holidayDates, dateStr]);
    }
  };

  const handleRemoveHoliday = (dateStr: string) => {
    setHolidayDates(holidayDates.filter((d) => d !== dateStr));
  };

  const generateHourOptions = () => {
    return Array.from({ length: 24 }, (_, i) => ({
      label: `${i.toString().padStart(2, "0")}:00`,
      value: i,
    }));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-8">
        <Skeleton className="mb-8 h-10 w-64" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Pricing Settings</h1>

      <div className="space-y-6">
        {/* Base Pricing Section */}
        <Card>
          <CardHeader>
            <CardTitle>Base Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="baseRate">Base Rate (per trip)</Label>
                <Input
                  id="baseRate"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.baseRate}
                  onChange={(e) =>
                    handleInputChange(
                      "baseRate",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distanceChargePerMile">
                  Distance Charge (per mile)
                </Label>
                <Input
                  id="distanceChargePerMile"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.distanceChargePerMile}
                  onChange={(e) =>
                    handleInputChange(
                      "distanceChargePerMile",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeChargePerMinute">
                  Time Charge (per minute)
                </Label>
                <Input
                  id="timeChargePerMinute"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.timeChargePerMinute}
                  onChange={(e) =>
                    handleInputChange(
                      "timeChargePerMinute",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumPrice">Minimum Price</Label>
                <Input
                  id="minimumPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.minimumPrice}
                  onChange={(e) =>
                    handleInputChange(
                      "minimumPrice",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peak Hours Section */}
        <Card>
          <CardHeader>
            <CardTitle>Peak Hours (Rush Hour Multiplier)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="peakTimeMultiplier">Peak Multiplier</Label>
                <Input
                  id="peakTimeMultiplier"
                  type="number"
                  step="0.1"
                  min="1"
                  value={formData.peakTimeMultiplier}
                  onChange={(e) =>
                    handleInputChange(
                      "peakTimeMultiplier",
                      parseFloat(e.target.value) || 1,
                    )
                  }
                />
                <p className="text-xs text-muted-foreground">
                  e.g., 1.3 = 130%
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Peak Range 1 */}
              <div className="space-y-3 rounded-lg border p-4">
                <Label className="text-base">Peak Range 1</Label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="peak1Start">Start Hour</Label>
                    <Select
                      value={peakRanges[0]?.startHour?.toString()}
                      onValueChange={(value) =>
                        handlePeakRangeChange(0, "startHour", parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {generateHourOptions().map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="peak1End">End Hour</Label>
                    <Select
                      value={peakRanges[0]?.endHour?.toString()}
                      onValueChange={(value) =>
                        handlePeakRangeChange(0, "endHour", parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {generateHourOptions().map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Peak Range 2 */}
              <div className="space-y-3 rounded-lg border p-4">
                <Label className="text-base">Peak Range 2</Label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="peak2Start">Start Hour</Label>
                    <Select
                      value={peakRanges[1]?.startHour?.toString()}
                      onValueChange={(value) =>
                        handlePeakRangeChange(1, "startHour", parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {generateHourOptions().map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="peak2End">End Hour</Label>
                    <Select
                      value={peakRanges[1]?.endHour?.toString()}
                      onValueChange={(value) =>
                        handlePeakRangeChange(1, "endHour", parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {generateHourOptions().map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Holiday Pricing Section */}
        <Card>
          <CardHeader>
            <CardTitle>Holiday Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="holidayFeeEnabled">Enable Holiday Fee</Label>
                <p className="text-sm text-muted-foreground">
                  Add additional fees during holidays
                </p>
              </div>
              <Switch
                id="holidayFeeEnabled"
                checked={formData.holidayFeeEnabled}
                onCheckedChange={(checked) =>
                  handleInputChange("holidayFeeEnabled", checked)
                }
              />
            </div>

            {formData.holidayFeeEnabled && (
              <>
                <div className="space-y-3">
                  <Label>Holiday Fee Type</Label>
                  <RadioGroup
                    value={formData.holidayFeeType}
                    onValueChange={(value) =>
                      handleInputChange("holidayFeeType", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="flat" id="flat" />
                      <Label htmlFor="flat">Flat Fee</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="percentage" id="percentage" />
                      <Label htmlFor="percentage">Percentage of Fare</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.holidayFeeType === "flat" ? (
                  <div className="space-y-2">
                    <Label htmlFor="holidayFeeFlat">Flat Fee ($)</Label>
                    <Input
                      id="holidayFeeFlat"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.holidayFeeFlat}
                      onChange={(e) =>
                        handleInputChange(
                          "holidayFeeFlat",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="holidayFeePercentage">Percentage (%)</Label>
                    <Input
                      id="holidayFeePercentage"
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      value={formData.holidayFeePercentage}
                      onChange={(e) =>
                        handleInputChange(
                          "holidayFeePercentage",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold">
                      Holiday Dates
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Select dates when additional fees will be applied
                    </p>
                  </div>

                  {/* Add Holiday Button */}
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button type="button" variant="outline" size="default">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Add Holiday Date
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="!w-[250px] p-0"
                        align="start"
                        sideOffset={5}
                      >
                        <Calendar
                          mode="single"
                          selected={undefined}
                          onSelect={(date) => date && handleAddHoliday(date)}
                          initialFocus
                          className="!w-full rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Holiday Dates List */}
                  {holidayDates.length > 0 ? (
                    <div className="space-y-2">
                      <div className="rounded-lg border">
                        <div className="divide-y">
                          {holidayDates.map((date, index) => (
                            <div
                              key={date}
                              className="flex items-center justify-between px-4 py-3 hover:bg-muted/50"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                  <CalendarIcon className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {new Date(date).toLocaleDateString(
                                      "en-US",
                                      {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      },
                                    )}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {date}
                                  </p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveHoliday(date)}
                                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-4 text-sm font-medium text-muted-foreground">
                        No holiday dates added yet
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Click "Add Holiday Date" to get started
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Save Button */}
        <Card>
          <CardContent className="pt-6">
            <Button onClick={handleSave} disabled={isSaving} className="w-full">
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
