"use client";
import React from "react";
import HeaderBack from "@/components/Header/HeaderBack";
import Checkout from "@/components/Payment/Checkout";
import { useSessionOrderStore } from "@/store/order";
import useSWR from "swr";
import BillContent from "../bill/billContent";
import CheckoutContent from "@/components/Payment/CheckoutContent";
import NotFound from "../not-found";
import Loader from "@/components/Common/Loader";
import CheckoutSummary from "@/components/Payment/CheckoutSummary";

const CheckoutPage = () => {
  const { sesionOrder } = useSessionOrderStore();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
    fetcher
  );
  console.log(data);
  return (
    <main className="bg-whiteAdminBackground h-screen">
      {data ? (
        <>
          <HeaderBack text="Finalizar compra" />

          {/* <CheckoutContent products={data?.detail} total={data.total} /> */}
        
        <CheckoutSummary products={data?.detail} total={data.total} />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default CheckoutPage;
