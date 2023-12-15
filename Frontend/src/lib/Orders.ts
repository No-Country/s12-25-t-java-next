import 'use server';
import { IOrder, Order } from "@/types/order";
import { revalidatePath } from "next/cache";

export const baseUrl = process.env.BASE_URL;
export async function getOrders(): Promise<Order[]> {
  const url = `${baseUrl}/orders`;
  const res = await fetch(url, { cache: "no-cache" });
  return await res.json();
}

export async function createOrders(ordersData: IOrder): Promise<Order | undefined > {
  const url = `${baseUrl}/orders`;
try {
  console.log( "url server", url)

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(ordersData),
    cache: "no-cache",
  });
  revalidatePath("/cart");
  return await res.json();
} catch (error) {
  console.log( "url server error", url)

  console.log("error", error)
}
}

