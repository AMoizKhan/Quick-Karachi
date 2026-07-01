// data/vehicles.js
// Single source of truth for categories + vehicles.
// Swap image paths for real assets in /public/vehicles/.

export const categories = [
  {
    title: "Economy Cars",
    slug: "Economy Cars",
    image: "/cars/alto.png",
    tagline: "Light on fuel, easy in traffic",
    description:
      "Compact, fuel-efficient hatchbacks built for daily city runs and short errands.",
  },
  {
    title: "Standard Cars",
    slug: "Standard Cars",
    image: "/vehicles/categories/standard.jpg",
    tagline: "Balanced comfort for every trip",
    description:
      "Mid-size sedans with more legroom and a smoother ride for family or business use.",
  },
  {
    title: "SUVs",
    slug: "SUVs",
    image: "/vehicles/categories/suv.jpg",
    tagline: "Space and command on any road",
    description:
      "High-clearance, spacious SUVs suited to highways, out-of-city trips, and groups.",
  },
  {
    title: "Leisure & Events",
    slug: "Leisure & Events",
    image: "/vehicles/categories/leisure.jpg",
    tagline: "Arrive in style, on schedule",
    description:
      "Premium vehicles for weddings, corporate events, and special occasions.",
  },
];

export const vehicles = [
  // ---------- Economy Cars ----------
  {
    id: "eco-vitz",
    category: "Economy Cars",
    name: "Toyota Vitz",
    image: "/vehicles/economy/vitz.jpg",
    imageLarge: "/vehicles/economy/vitz-large.jpg",
    seatingCapacity: 4,
    airConditioning: true,
    pricePerDay: 5500,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A nimble, fuel-efficient hatchback that's easy to park and ideal for daily city commutes.",
    pickDrop: true,
    corporateBooking: false,
    inCityService: true,
    outCityService: false,
  },
  {
    id: "eco-cultus",
    category: "Economy Cars",
    name: "Suzuki Cultus",
    image: "/vehicles/economy/cultus.jpg",
    imageLarge: "/vehicles/economy/cultus-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 5000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A dependable, budget-friendly hatchback with room for the whole family and low running costs.",
    pickDrop: true,
    corporateBooking: false,
    inCityService: true,
    outCityService: false,
  },
  {
    id: "eco-alto",
    category: "Economy Cars",
    name: "Suzuki Alto",
    image: "/vehicles/economy/alto.jpg",
    imageLarge: "/cars/alto.png",
    seatingCapacity: 4,
    airConditioning: true,
    pricePerDay: 4500,
    maxRentalHours: 10,
    fuelPolicy: "Full to Full",
    description:
      "Our lightest, most economical option — perfect for solo trips and quick city hops.",
    pickDrop: false,
    corporateBooking: false,
    inCityService: true,
    outCityService: false,
  },

  // ---------- Standard Cars ----------
  {
    id: "std-corolla",
    category: "Standard Cars",
    name: "Toyota Corolla Altis",
    image: "/vehicles/standard/corolla.jpg",
    imageLarge: "/vehicles/standard/corolla-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 9500,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A comfortable, well-appointed sedan that balances style and reliability for business or leisure.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
  {
    id: "std-civic",
    category: "Standard Cars",
    name: "Honda Civic",
    image: "/vehicles/standard/civic.jpg",
    imageLarge: "/vehicles/standard/civic-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 10500,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A sharp, modern sedan with a refined cabin — a favourite for client meetings and airport runs.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
  {
    id: "std-city",
    category: "Standard Cars",
    name: "Honda City",
    image: "/vehicles/standard/city.jpg",
    imageLarge: "/vehicles/standard/city-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 8000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "Practical and efficient, with a spacious boot — a solid all-rounder for everyday hire.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: false,
  },

  // ---------- SUVs ----------
  {
    id: "suv-fortuner",
    category: "SUVs",
    name: "Toyota Fortuner",
    image: "/vehicles/suv/fortuner.jpg",
    imageLarge: "/vehicles/suv/fortuner-large.jpg",
    seatingCapacity: 7,
    airConditioning: true,
    pricePerDay: 22000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A commanding, high-clearance SUV built for highways, hill routes, and out-of-city travel.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
  {
    id: "suv-hrv",
    category: "SUVs",
    name: "Honda HR-V",
    image: "/vehicles/suv/hrv.jpg",
    imageLarge: "/vehicles/suv/hrv-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 15000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A compact crossover with an elevated seating position and generous cargo space.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
  {
    id: "suv-sportage",
    category: "SUVs",
    name: "Kia Sportage",
    image: "/vehicles/suv/sportage.jpg",
    imageLarge: "/vehicles/suv/sportage-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 16500,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A modern, tech-equipped SUV offering a smooth highway ride and strong road presence.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },

  // ---------- Leisure & Events ----------
  {
    id: "lux-camry",
    category: "Leisure & Events",
    name: "Toyota Camry",
    image: "/vehicles/leisure/camry.jpg",
    imageLarge: "/vehicles/leisure/camry-large.jpg",
    seatingCapacity: 5,
    airConditioning: true,
    pricePerDay: 28000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A flagship luxury sedan for weddings, VIP transport, and events where first impressions matter.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
  {
    id: "lux-hiace",
    category: "Leisure & Events",
    name: "Toyota Hiace Grand Cabin",
    image: "/vehicles/leisure/hiace.jpg",
    imageLarge: "/vehicles/leisure/hiace-large.jpg",
    seatingCapacity: 13,
    airConditioning: true,
    pricePerDay: 32000,
    maxRentalHours: 12,
    fuelPolicy: "Full to Full",
    description:
      "A spacious, air-conditioned van ideal for group events, guest transport, and family gatherings.",
    pickDrop: true,
    corporateBooking: true,
    inCityService: true,
    outCityService: true,
  },
];

// Helper: returns vehicles for a given category, safely handling casing/whitespace.
export function getVehiclesByCategory(category) {
  if (!category) return [];
  const normalized = category.trim().toLowerCase();
  return vehicles.filter((v) => v.category.trim().toLowerCase() === normalized);
}

// Helper: category meta lookup (title, description, image) by title.
export function getCategoryMeta(category) {
  if (!category) return null;
  const normalized = category.trim().toLowerCase();
  return categories.find((c) => c.title.trim().toLowerCase() === normalized) || null;
}