import { useSessionOrderStore } from "@/store/order";
import { OrderDetail } from "@/types/order";

interface OrderPut {
  detail: OrderDetail[];
}

export const updateOrder = async (orderData: OrderPut, sesionOrder: number) => {
  try {
    const orderReq = await fetch(
      `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    );
    const orders = await orderReq.json();
    console.log("actualizada la orden", orders);
    // return orders
  } catch (error) {
    console.log("error updated", error);
  }
};
export const getOrder = async (id: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API}/orders/${id}`
    const orderReq = await fetch(
      url,{cache:"no-cache"}
    );
  
    const orders = await orderReq.json();
    console.log("actualizada la orden", orders);
    return orders
  } catch (error) {
    console.log("error updated", error);
  }
};

