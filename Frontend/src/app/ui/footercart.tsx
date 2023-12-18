"use client";

import React, { useEffect, useState, lazy, Suspense } from "react";
import { useCartStore } from "@/store/cart";
import { useNotifyStore } from "@/store/zustand";
import { useRouter } from "next/navigation";
import { IOrder, IOrderDetail, Order, OrderDetail } from "../../types/order";

import ClientButton from "./clientbutton";
import { useSessionOrderStore } from "@/store/order";
import { useNavigateCheckout } from "@/hooks/useNavigateCheckout";

interface FooterCartProps {
  onCreateOrder?: (orderData: IOrder) => Promise<void>;
}
const FooterCart: React.FC<FooterCartProps> = () => {
  const { cart, subtotal } = useCartStore();
  const { add, setShowMessageBoolean } = useNotifyStore();
  const { sesionOrder } = useSessionOrderStore();
  const {navigateCheckout} = useNavigateCheckout(sesionOrder)
  const route = useRouter();
  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false);
    }, 2500);
  };
  // -------------------------------POST BACKEND
  // const tableEntity = {
  //   id: 1,

  // }

  // post DB EXAMPLE
  // const orderDetail: IOrderDetail[] = Array.isArray(cart)
  // ? cart.map((item, key) => {
  //     const { quantity, id } = item;
  //     return {
  //       product: { id: Number(id) }, // Convert id to number if it's a string
  //       quantity,
  //     };
  //   })
  // : [];

  // const orderData: IOrder = {
  //   id: 1,
  //   tableEntity,
  //   detail: orderDetail,
  //   paymentMethod: 'efectivo'
  // }

  // -------------------------------POST BACKEND
  const tableEntity = {
    id: 1,
    number: 1,
    capacity: 10,
    state: true,
    user: null,
  };
  const orderDetail: OrderDetail[] = Array.isArray(cart)
    ? cart.map((item, key) => {
        const quantity = item.quantity;
        const { id, ...newObjet } = item;
        return {
          id: key + 1,
          order: String(key + 1),
          product: {
            id,
            name: newObjet.name,
            price: newObjet.price,
            category: newObjet.category,
            description: newObjet.description,
            images: newObjet.images,
            state: newObjet.state,
            subCategory: newObjet.subCategory,
            // Add other required properties from IProduct
          },
          quantity,
          subtotal: newObjet.price * quantity,
        };
      })
    : [];

  const total = orderDetail.reduce(
    (prev, current) => prev + current.subtotal,
    0,
  );

  const orderData: Order = {
    id: 1,
    date: new Date(),
    tableEntity,
    detail: orderDetail,
    paymentMethod: "pending",
    state: "pending",
    total,
  };
  const newMessage = {
    text: (
      <>
        <p>
          La orden ha sido confirmada.
          <br />
          Tu pedido está en camino.
        </p>
      </>
    ),

    svg: "/icon/Group 8.svg",
  };

  const handleNotificationMessage = () => {
    add(newMessage);
    setShowMessageBoolean(true);
    handleNotification();
  };
  
  return (
    <footer className=" fixed bottom-0 z-[1] px-4 py-3 w-screen">
      <div className="flex justify-between items-center">
        <button
          disabled={sesionOrder && sesionOrder > 0 ? false : true}
          type="button"
          onClick={() => navigateCheckout(sesionOrder)}
          className="disabled:opacity-30 border-2 w-[10.3rem] h-[2.5rem] text-[0.75rem] border-primary-100 px-[1.3125rem] py-[0.625rem] font-medium rounded-[1.3rem]"
        >
          Ver Factura
        </button>
        <ClientButton
          orderData={orderData}
          handleNotification={handleNotificationMessage}
        />
      </div>
    </footer>
  );
};

export default FooterCart;
