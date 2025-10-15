import { useEffect, useState } from "react";
import useSWR from "swr";

export interface UserSuggestion {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface UseUserSuggestionsProps {
  searchQuery: string;
  enabled: boolean;
}

export function useUserSuggestions({
  searchQuery,
  enabled,
}: UseUserSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<UserSuggestion[]>([]);

  const { data, isLoading, error } = useSWR(
    enabled && searchQuery.length >= 2
      ? `/api/users/search?q=${encodeURIComponent(searchQuery)}`
      : null,
    async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user suggestions");
      }
      return response.json();
    },
  );

  useEffect(() => {
    if (data?.users) {
      setSuggestions(data.users);
    } else {
      setSuggestions([]);
    }
  }, [data]);

  return {
    suggestions,
    isLoading,
    error,
  };
}
