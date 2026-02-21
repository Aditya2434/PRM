// src/data/products.ts

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

// The categories that will appear in the filter menu
export const productCategories = [
  "ALL",
  "REHEATING FURNACES",
  "REFRACTORIES",
  "MINERALS",
  "FERRO CHROME"
];

export const products: Product[] = [
  {
    id: 1,
    title: "Continuous Reheating Furnace",
    subtitle: "Heavy Duty Manufacturing",
    category: "REHEATING FURNACES",
    image: "/src/assets/images/project-1.jpg", 
  },
  {
    id: 2,
    title: "High Alumina Bricks",
    subtitle: "Thermal Resistance",
    category: "REFRACTORIES",
    image: "/src/assets/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Premium Ferro Chrome",
    subtitle: "Sodium Nitrate Processed",
    category: "FERRO CHROME",
    image: "/src/assets/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Batch Type Furnace",
    subtitle: "Industrial Application",
    category: "REHEATING FURNACES",
    image: "/src/assets/images/project-4.jpg",
  },
  {
    id: 5,
    title: "Castables & Mortars",
    subtitle: "Refractory Solutions",
    category: "REFRACTORIES",
    image: "/src/assets/images/project-5.jpg",
  },
  {
    id: 6,
    title: "Raw Mineral Extracts",
    subtitle: "Processed Materials",
    category: "MINERALS",
    image: "/src/assets/images/project-6.jpg",
  }
];