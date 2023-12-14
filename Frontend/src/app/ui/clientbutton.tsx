"use client"
import { IOrder } from "@/types/order";
import React from "react";

interface Props {
  orderData: IOrder;
  handleNotification: () => void;
}

const ClientButton = ({ orderData, handleNotification }: Props) => {
  const handleClick = async () => {

    const url = process.env.NEXT_PUBLIC_API
    console.log(url)
    console.log("orderData", orderData)
    try {
      const orderReq = await fetch(`${process.env.NEXT_PUBLIC_API}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      handleNotification();

      return await orderReq.json();
    } catch (error) {
      // Aquí se manejan los errores, si la solicitud falla
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="border-none w-[10.3rem] h-[2.5rem] text-[0.75rem] ml-1 bg-primary-100 hover:bg-primary-200 font-medium px-5 py-2 rounded-[1.3rem]"
    >
      Realizar pedido
    </button>
  );
};

export default ClientButton;
