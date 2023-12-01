import { Footer, Header } from "@/components";
import React from "react";

function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default CartLayout;
