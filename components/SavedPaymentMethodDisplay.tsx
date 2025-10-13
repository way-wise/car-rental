"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SavedPaymentMethodDisplayProps {
  paymentMethodId: string;
  last4?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  onRemove?: () => void;
}

/**
 * Display saved payment method with card details
 * Shows last 4 digits, brand, and expiry
 */
export function SavedPaymentMethodDisplay({
  paymentMethodId,
  last4,
  brand,
  expMonth,
  expYear,
  onRemove,
}: SavedPaymentMethodDisplayProps) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    if (!onRemove) return;

    const confirmed = confirm(
      "Are you sure you want to remove this payment method?",
    );
    if (!confirmed) return;

    setIsRemoving(true);
    try {
      // Call your API to remove payment method
      const response = await fetch("/api/users/payment-methods", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Payment method removed");
        onRemove();
      } else {
        toast.error(data.error || "Failed to remove payment method");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {brand
                  ? brand.charAt(0).toUpperCase() + brand.slice(1)
                  : "Card"}{" "}
                •••• {last4 || "****"}
              </span>
              <Badge variant="secondary" className="text-xs">
                Default
              </Badge>
            </div>
            {expMonth && expYear && (
              <p className="text-sm text-muted-foreground">
                Expires {String(expMonth).padStart(2, "0")}/{expYear}
              </p>
            )}
          </div>
        </div>

        {onRemove && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            disabled={isRemoving}
            className="text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Hook to fetch and display user's saved payment method
 */
export function useSavedPaymentMethod(userId: string) {
  const [paymentMethod, setPaymentMethod] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPaymentMethod = async () => {
    try {
      const response = await fetch(
        `/api/users/payment-methods?userId=${userId}`,
      );
      const data = await response.json();

      if (data.success && data.paymentMethod) {
        setPaymentMethod(data.paymentMethod);
      }
    } catch (error) {
      console.error("Error fetching payment method:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    paymentMethod,
    isLoading,
    refresh: fetchPaymentMethod,
  };
}
