import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const input = searchParams.get("input");

    if (!input) {
      return NextResponse.json(
        { error: "Input parameter is required" },
        { status: 400 },
      );
    }

    // Use the provided Google Maps API key
    const apiKey = "AIzaSyC8Rj8qqv9kn2FGTtALwhwpe_GPmhJfP8s";

    // Google Places Autocomplete API
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}&types=establishment|geocode&components=country:us&region=us`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      console.error("Google Places API error:", data);
      return NextResponse.json({ error: "Places API error" }, { status: 500 });
    }

    // Transform the response to match our interface
    const predictions =
      data.predictions?.map((prediction: {
        place_id: string;
        description: string;
        structured_formatting?: { main_text: string };
        types?: string[];
      }) => ({
        place_id: prediction.place_id,
        description: prediction.description,
        formatted_address:
          prediction.structured_formatting?.main_text || prediction.description,
        types: prediction.types || [],
      })) || [];

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error("Error in places autocomplete:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
