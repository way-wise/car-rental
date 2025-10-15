export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Booking {
  id: string;
  userId: string;
  pickupLocation: string;
  dropLocation: string;
  bookingDate: Date;
  bookingTime: string;
  distance?: number;
  duration?: number;
  amount: number;
  paymentStatus: "pending" | "succeeded" | "failed" | "canceled" | "refunded";
  bookingStatus: "upcoming" | "ongoing" | "completed" | "canceled";
  stripePaymentIntentId?: string;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
}

export interface DistanceInfo {
  distance: number;
  duration: number;
  pricing: {
    basePrice: number;
    pricePerMile: number;
    calculatedPrice: number;
  };
}

export interface PaginatedData<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages?: number;
  };
}

export interface ExerciseSetupVideo {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserReward {
  id: string;
  userId: string;
  type: string;
  points: number;
  description?: string;
  createdAt: Date;
}
