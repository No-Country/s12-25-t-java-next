"use client";
import React, { useState } from "react";
import Checkout from "./Checkout";
import { OrderDetail } from "@/types/order";
import { format, trimTo3Words } from "../../utils/currency";
import { useSessionOrderStore } from "@/store/order";
import { useRouter } from "next/navigation"; // Import corrected from "next/navigation"

import { useNotifyStore } from "@/store/zustand";

interface Props {
  products: OrderDetail[];
  total: number;
}

const CheckoutSummary: React.FC<Props> = ({ products, total }: Props) => {
  // You need to define paymentMethod and handlePaymentChange here or fetch them from props or state.
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const { add, setShowMessageBoolean } = useNotifyStore();
  const { sesionOrder } = useSessionOrderStore();
  const router = useRouter();

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };
  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false);
    }, 2500);
  };
  const orderData = {
    paymentMethod,
  };
  const newMessage = {
    text: <p>El mesero vendrá en seguida.</p>,
    svg: "/icon/Group 8.svg",
  };
 
  const handleNotificationMessage = () => {
    add(newMessage);
    setShowMessageBoolean(true);
    handleNotification();
  };
  const handlePaymentOrder = async (prop: string) => {
    console.log("el boton submit", orderData);

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
      handleNotificationMessage();
      router.push("/experience");
      return orders;
    } catch (error) {
      console.log("error updated", error);
    }
  };

  return (
    <>
     

      {/* Render the Checkout component with payment information */}
      <Checkout
        paymentMethod={paymentMethod}
        handlePaymentChange={handlePaymentChange}
      />

      <div className="px-5 mt-5  ">
        <h2 className="font-semibold text-[1.125rem]">Resumen</h2>
        {products.map((product, key) => (
          <div key={key + 1} className=""> 
            <div className="flex flex-row justify-between">
              
              <span className="text-lg font-semibold font-sans mt-[6px] ">
              {trimTo3Words(product.product.name)}
              </span>
              <span className="text-lg font-semibold font-sans mt-[6px] ">
                {format(product.subtotal)}
              </span>
            </div>
          </div>
        ))}
        
      </div>
      <div className="px-5 mt-5 flex items-end justify-end flex-col  ">
        <h2 className="text-[1rem] font-medium">Total</h2>
        <h2 className="text-[1.375rem] font-semibold">{format(total)}</h2>

       
      </div>
      <footer className="bg-white fixed px-4 right-0  z-[4] bottom-0 w-screen py-6">
<button
          type="button"
          onClick={() => handlePaymentOrder(paymentMethod)}
          className="py-2 mb-4 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
          >
          Pagar
        </button>
</footer>
    </>
  );
};

export default CheckoutSummary;
