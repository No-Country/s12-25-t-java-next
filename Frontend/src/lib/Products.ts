import "server-only";

import { Product } from "@/types/Product";

const baseUrl = process.env.BASE_URL;

export async function getProducts(): Promise<Product[]> {
  const url = `${baseUrl}/api/products`;
  const res = await fetch(url);
  return await res.json();
}
