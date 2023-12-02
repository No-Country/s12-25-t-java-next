type Category = "Platos" | "Postres" | "Bebidas";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: Category;
  subcategory: string;
  optionals: string[];
}

export type NonEssentialsProduct = Omit<
  Product,
  "id" | "description" | "subcategory" | "optionals"
>;
