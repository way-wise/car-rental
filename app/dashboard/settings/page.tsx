"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Settings {
  id: string;
  pricingType: string;
  pricePerMile?: number;
  pricePerHour?: number;
  basePrice: number;
  minimumPrice: number;
}

const SettingsPage = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    pricingType: "mile",
    pricePerMile: 2.5,
    pricePerHour: 25.0,
    basePrice: 5.0,
    minimumPrice: 10.0,
  });

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
          pricingType: data.settings.pricingType,
          pricePerMile: data.settings.pricePerMile || 2.5,
          pricePerHour: data.settings.pricePerHour || 25.0,
          basePrice: data.settings.basePrice,
          minimumPrice: data.settings.minimumPrice,
        });
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
        body: JSON.stringify(formData),
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

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Pricing Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Configure Pricing Model</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pricing Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Pricing Type</Label>
            <RadioGroup
              value={formData.pricingType}
              onValueChange={(value) => handleInputChange("pricingType", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mile" id="mile" />
                <Label htmlFor="mile">By Mile</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hour" id="hour" />
                <Label htmlFor="hour">By Hour</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Price Per Mile */}
          {formData.pricingType === "mile" && (
            <div className="space-y-2">
              <Label htmlFor="pricePerMile">Price Per Mile ($)</Label>
              <Input
                id="pricePerMile"
                type="number"
                step="0.01"
                min="0"
                value={formData.pricePerMile}
                onChange={(e) =>
                  handleInputChange(
                    "pricePerMile",
                    parseFloat(e.target.value) || 0,
                  )
                }
                placeholder="2.50"
              />
            </div>
          )}

          {/* Price Per Hour */}
          {formData.pricingType === "hour" && (
            <div className="space-y-2">
              <Label htmlFor="pricePerHour">Price Per Hour ($)</Label>
              <Input
                id="pricePerHour"
                type="number"
                step="0.01"
                min="0"
                value={formData.pricePerHour}
                onChange={(e) =>
                  handleInputChange(
                    "pricePerHour",
                    parseFloat(e.target.value) || 0,
                  )
                }
                placeholder="25.00"
              />
            </div>
          )}

          {/* Base Price */}
          <div className="space-y-2">
            <Label htmlFor="basePrice">Base Price ($)</Label>
            <Input
              id="basePrice"
              type="number"
              step="0.01"
              min="0"
              value={formData.basePrice}
              onChange={(e) =>
                handleInputChange("basePrice", parseFloat(e.target.value) || 0)
              }
              placeholder="5.00"
            />
            <p className="text-sm text-muted-foreground">
              Fixed amount added to every booking
            </p>
          </div>

          {/* Minimum Price */}
          <div className="space-y-2">
            <Label htmlFor="minimumPrice">Minimum Price ($)</Label>
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
              placeholder="10.00"
            />
            <p className="text-sm text-muted-foreground">
              Minimum amount charged regardless of distance/duration
            </p>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button onClick={handleSave} disabled={isSaving} className="w-full">
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
          </div>

          {/* Current Settings Display */}
          {settings && (
            <div className="mt-8 rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-3 font-medium">Current Settings</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Pricing Type:</span>
                  <span className="ml-2 capitalize">
                    {settings.pricingType}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Base Price:</span>
                  <span className="ml-2">${settings.basePrice}</span>
                </div>
                {settings.pricePerMile && (
                  <div>
                    <span className="font-medium">Price/Mile:</span>
                    <span className="ml-2">${settings.pricePerMile}</span>
                  </div>
                )}
                {settings.pricePerHour && (
                  <div>
                    <span className="font-medium">Price/Hour:</span>
                    <span className="ml-2">${settings.pricePerHour}</span>
                  </div>
                )}
                <div>
                  <span className="font-medium">Minimum Price:</span>
                  <span className="ml-2">${settings.minimumPrice}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
