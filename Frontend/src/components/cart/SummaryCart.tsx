"use client";
import React from "react";
import { format } from "../../utils/currency";

const SummaryCart = ({ subtotal }: { subtotal: number }) => {
  return (
    <div className="flex flex-col  items-end mx-4 py-4">
      <h3>Subtotal</h3>
      <h2 className=" font-semibold">{format(subtotal)}</h2>
    </div>
  );
};

export default SummaryCart;
