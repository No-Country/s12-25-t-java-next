import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import dynamic, { LoaderComponent } from "next/dynamic";
import FooterCart from "@/components/cart/FooterCart";
import { useNotifyStore } from "@/store/zustand";
import { useEffect } from "react";

const CartList = dynamic(() => import("@/components/cart/CartList"), {
	ssr: false,
});
const SummaryCart = dynamic(() => import("@/components/cart/SummaryCart"), {
	ssr: false,
});
const HeaderBack = dynamic(() => import("@/components/Header/HeaderBack"), {
	ssr: false,
});

const CartPage = () => {
	const { cart, removeAll, subtotal } = useCartStore();

	const { add, setShowMessageBoolean } = useNotifyStore();

	useEffect(() => {
		subtotal();
	}, [subtotal]);
	// Call subtotal once and store the result in a variable
	const cartSubtotal = subtotal();

	const handleNotification = () => {
		setTimeout(() => {
			setShowMessageBoolean(false);
		}, 2500);
	};
	const handleOrder = () => {
		const orderData = {
			table: 1,
			date: new Date(),
			state: "pending",
			subTotal: cartSubtotal,
			payment: "inProcess",
			products: cart,
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
		<div className="w-full">
			<HeaderBack editable text="Carrito" />
			<CartList />
			<SummaryCart subtotal={cartSubtotal} />
			<FooterCart />
		</div>
	);
};

export default CartPage;
