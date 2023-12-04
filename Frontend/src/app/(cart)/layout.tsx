import {  Header } from "@/components";
import React from "react";
import { Metadata } from "next";
import HeaderBack from "@/components/Header/HeaderBack";
export const metadata: Metadata = {
  title: "Cart | AlaCartApp",
  description: 'Carrito de pedidos'
};
function CartLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="w-screen overflow-hidden">
   
      <main className="min-h-[90vh]">
      {children}
      </main>
   
      
    </div>
  );
}
export default CartLayout;
