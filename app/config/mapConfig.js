/**
 * Update these values to change the map location on the Contact page.
 * Replace embedUrl with a Google Maps embed link, or update address / coordinates.
 */
export const MAP_CONFIG = {
  address:
    "Plot No A-54, Shahnawaz Shar Goth, Kiran Hospital Rd, Gulzar-e-Hijri, Shahnawaz Village, Sector 24 A, Gulzar-e-Hijri Scheme 33, Karachi, 75330, Pakistan",
  latitude: 24.9742,
  longitude: 67.1108,
  embedUrl: "",
};

export function getMapEmbedUrl() {
  if (MAP_CONFIG.embedUrl) {
    return MAP_CONFIG.embedUrl;
  }

  const query = encodeURIComponent(MAP_CONFIG.address);
  return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
