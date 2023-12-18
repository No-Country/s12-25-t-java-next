"use client";
import React, { useEffect, useState } from "react";
import { useSessionOrderStore } from "@/store/order";
import { IOrder, Order } from "@/types/order";
import { updateOrder } from "@/lib/Orders";
import useSWR, { SWRConfiguration } from "swr";
import { useNavigateCheckout } from "@/hooks/useNavigateCheckout";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cart";

interface Props {
	// POST BACKEND IS NOT ALL INFORMATION
	// orderData: IOrder;
	// POST APIMOCK NEED AL INFORMATION
	orderData: Order;
	handleNotification: () => void;
}

const ClientButton = ({ orderData, handleNotification }: Props) => {
	const { cart } = useCartStore();
	const { sesionOrder, setSessionOrder } = useSessionOrderStore();
	const [orderDataCreate, setOrderDataCreate] = useState<Order | null>(null);
	const { navigateCheckout } = useNavigateCheckout(sesionOrder);
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
		fetcher,
	);

	useEffect(() => {
		if (data) {
			// Aquí puedes actualizar el estado con los datos obtenidos
			setOrderDataCreate(data);
			console.log("toma", data);
		}
		console.log("no toma", data);
	}, [data]);

	const orderDataPost = {
		detail: orderData.detail.concat(orderDataCreate?.detail || []),
	};

	const handleClick = async () => {
		try {
			// No hay orden abierta
			if (!sesionOrder) {
				const orderReq = await fetch(`${process.env.NEXT_PUBLIC_API}/orders`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(orderData),
				});
				console.log("orderDta nueva", orderData);
				const res = await orderReq.json();
				handleNotification();
				setSessionOrder(res.id);
				console.log("respuesta", res);
				navigateCheckout(sesionOrder);
				return res;
			}
			const orderReq = await fetch(
				`${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(orderDataPost),
				},
			);
			// const res = await orderReq.json();
			console.log(
				"orderData existe y se agrega al nuevo carrito",
				orderDataPost,
			);

			const res = await orderReq.json();
			handleNotification();
			navigateCheckout(sesionOrder);
		} catch (error) {
			console.error("Error al procesar la solicitud:", error);
		}
	};

	return (
		<Button
			variant="primary"
			text="Realizar pedido"
			onClick={handleClick}
			disabled={cart.length === 0}
		/>
	);
};

export default ClientButton;
