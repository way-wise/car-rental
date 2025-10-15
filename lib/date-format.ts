import { format } from "date-fns";

// Format only as date
export const formatDate = (date: string | Date | null | undefined) => {
  if (!date) return "N/A";
  try {
    return format(new Date(date), "dd MMM yyyy");
  } catch {
    return "N/A";
  }
};

// Format as date and time
export const formatDateTime = (date: string | Date | null | undefined) => {
  if (!date) return "N/A";
  try {
    return format(new Date(date), "dd MMM yyyy - hh:mm a");
  } catch {
    return "N/A";
  }
};

// Format currency
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100); // Convert cents to dollars
};
