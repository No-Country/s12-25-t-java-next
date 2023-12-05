import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cart | AlaCartApp",
	description: "Carrito de pedidos",
};

function CartLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<main className="min-h-[90vh]">{children}</main>
		</div>
	);
}
export default CartLayout;
