import { Footer, Header } from "@/components";
import React from "react";

function CartLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      <Header />
      <main className="min-h-[90vh]">
      {children}
      </main>
   
      
    </div>
  );
}
export default CartLayout;
