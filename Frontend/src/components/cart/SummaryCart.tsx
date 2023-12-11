"use client";
import React from "react";
import { format } from "../../utils/currency";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

const SummaryCart = () => {
  const { cart, subtotal } = useCartStore();
  useEffect(() => {
    subtotal();
  }, [cart, subtotal]);
  // Call subtotal once and store the result in a variable
  const cartSubtotal = subtotal();

  console.log("subtotal", cartSubtotal);

  return (
    <div className="flex flex-col  items-end mx-4 py-4">
      <h3>Subtotal</h3>
      <h2 className=" font-semibold">{format(cartSubtotal)}</h2>
    </div>
  );
};

export default SummaryCart;
