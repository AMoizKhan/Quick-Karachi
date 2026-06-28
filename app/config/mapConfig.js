/**
 * Update these values to change the map location on the Contact page.
 * Replace embedUrl with a Google Maps embed link, or update address / coordinates.
 *
 * HOW TO GET A NEW EMBED URL:
 * 1. Go to Google Maps and search your location
 * 2. Click Share → Embed a map
 * 3. Copy the src="..." value from the <iframe> code
 * 4. Paste it below as embedUrl
 */
export const MAP_CONFIG = {
  address: "Plot# A-56 Beside Lawyers Colony, Scheme 33, Karachi.",
  latitude: 24.9582216,
  longitude: 67.1384041,
  placeId: "0x3eb347003028506d:0xc3a4de064cde85cd",

  // ✅ Proper embed URL — Google Maps place URLs do NOT work in iframes.
  // This uses the /maps/embed endpoint with the exact coordinates from your original link.
  embedUrl:
    "https://maps.google.com/maps?q=24.9582216,67.1384041&z=16&output=embed",
};

/**
 * Returns the correct iframe-compatible embed URL.
 * Falls back to coordinate-based embed if embedUrl is not set.
 */
export function getMapEmbedUrl() {
  if (MAP_CONFIG.embedUrl) {
    return MAP_CONFIG.embedUrl;
  }

  // Fallback: build from coordinates
  const { latitude, longitude } = MAP_CONFIG;
  return `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
}