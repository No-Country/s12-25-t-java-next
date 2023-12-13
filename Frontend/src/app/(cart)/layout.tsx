import React, { Suspense } from "react";
import { Metadata } from "next";

import Notification from '@/components/Modal/Notification'

export const metadata: Metadata = {
  title: 'Cart | AlaCartApp',
  description: 'Carrito de pedidos',
}

function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="min-h-[90vh]">{children}</main>
      <Notification />
    </div>
  );
}
export default CartLayout
