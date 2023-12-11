import { Order } from '@/types/order';
import 'server-only'


const baseUrl = process.env.API_URL;
export async function getOrders(): Promise<Order[]> {
	const url = `${baseUrl}/api/order`
	const res = await fetch(url, { cache: 'no-cache' })
	return await res.json()
}

export async function createOrders(ordersData: Order): Promise<Order[]> {
    const url = `${baseUrl}/api/order`;
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados si es necesario
      },
      body: JSON.stringify(ordersData),
      cache: 'no-cache',
    });
  
    return await res.json();
  }
  