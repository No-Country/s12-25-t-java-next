import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Cart | AlaCartApp",
  description: "Carrito de pedidos",
};
function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
    </div>
  );
}
export default CartLayout;
