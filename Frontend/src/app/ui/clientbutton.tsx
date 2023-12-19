"use client";
import React, { useEffect, useState } from "react";
import { useSessionOrderStore } from "@/store/order";
import { CartItem, IOrder, Order } from "@/types/order";
import { updateOrder } from "@/lib/Orders";
import useSWR, { SWRConfiguration } from "swr";
import { useNavigateCheckout } from "@/hooks/useNavigateCheckout";
import { OrderDetail } from '../../types/order';


interface Props {
  // POST BACKEND IS NOT ALL INFORMATION
  // orderData: IOrder;
  // POST APIMOCK NEED AL INFORMATION
  orderData: Order;
  handleNotification: () => void;
orderDetail?:OrderDetail
cart: CartItem[] | []
}

const ClientButton = ({ orderData, handleNotification, orderDetail, cart }: Props) => {
  const { sesionOrder, setSessionOrder } = useSessionOrderStore();
  const [orderDataCreate, setOrderDataCreate] = useState<Order | null>(null);
  const { navigateCheckout } = useNavigateCheckout(sesionOrder);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      // Aquí puedes actualizar el estado con los datos obtenidos
      setOrderDataCreate(data);
      console.log("toma", data);
    }
    console.log("no toma", data);
  }, [data]);

  const detail = orderData.detail.concat(orderDataCreate?.detail || []);
  const total = detail.reduce((prev, current) => prev + current.subtotal, 0);
  const totalConDosDecimales = parseFloat(total.toFixed(2));
  const orderDataPost = {
    detail,
    total: totalConDosDecimales,
  };

  const handleClick = async () => {
    try {
      // No hay orden abierta
      if (!sesionOrder) {
        const orderReq = await fetch(`${process.env.NEXT_PUBLIC_API}/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        console.log("orderDta nueva", orderData);
        const res = await orderReq.json();
        handleNotification();
        setSessionOrder(res.id);
        console.log("respuesta", res);
        navigateCheckout(sesionOrder);
        return res;
      }
      const orderReq = await fetch(
        `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDataPost),
        }
      );
      // const res = await orderReq.json();
      console.log(
        "orderData existe y se agrega al nuevo carrito",
        orderDataPost
      );

      const res = await orderReq.json();
      console.log("res", res);
      handleNotification();
      navigateCheckout(sesionOrder);
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <button
    onClick={handleClick}
    disabled={cart && Array.isArray(cart) && cart.length > 0 ? false : true}
    type="button"
    className="disabled:opacity-30 border-none w-[10.3rem] h-[2.5rem] text-[0.75rem] ml-1 bg-primary-100 hover:bg-primary-200 font-medium px-5 py-2 rounded-[1.3rem]"
  >
    Realizar pedido
  </button>
  
  );
};

export default ClientButton;