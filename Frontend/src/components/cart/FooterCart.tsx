"use client";

import React, { useEffect, useState, lazy, Suspense } from "react";
import { useCartStore } from "@/store/cart";
import { useNotifyStore } from "@/store/zustand";

import { Order, OrderDetail } from "../../types/order";

const FooterCart = () => {
  const { cart,  subtotal } = useCartStore();
  const { add, setShowMessageBoolean } = useNotifyStore();



  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false);
    }, 2500);
  };
  const userDetail = {
    id: 2,
    name: "Jesus",
    email: "mesero1@gmail.com",
    password: "123456",
    lastName: "Mendez",
    state: true,
    startDate: "05/04/2023",
  };
  const tableEntity = {
    id: 1,
    number: 1,
    capacity: 10,
    state: true,
    user: userDetail,
  };
  const orderDetail: OrderDetail[] = Array.isArray(cart)
    ? cart.map((item, key) => {
        return {
          id: key + 1,
          order: `order${key + 1}`,
          product: { ...item, quantity: undefined }, // Excluir la propiedad 'quantity'
          price: item.quantity * item.price,
          quantity: item.quantity,
        };
      })
    : [];

  const handleOrder = () => {
    console.log("orden detail", orderDetail);
    const orderData: Order = {
      id: 1,
      tableEntity,
      date: "05012022",
      detail: orderDetail,
    };
    console.log("order", orderData);

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

    add(newMessage);
    setShowMessageBoolean(true);
    handleNotification();
  };

  return (
    <footer className=" fixed bottom-0  px-4 py-3 w-screen">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border-2 w-[10.3rem] h-[2.5rem] text-[0.75rem] border-primary-100 px-5 py-2 font-medium rounded-[1.3rem]"
        >
          Ver Ticket
        </button>
        <button
          onClick={handleOrder}
          type="button"
          className="border-none w-[10.3rem] h-[2.5rem] text-[0.75rem] ml-1 bg-primary-100 hover:bg-primary-200 font-medium px-5 py-2 rounded-[1.3rem]"
        >
          Realizar pedido
        </button>
      </div>
    </footer>
  );
};

export default FooterCart;