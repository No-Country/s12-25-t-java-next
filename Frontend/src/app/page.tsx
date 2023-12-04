import { redirect } from "next/navigation";
import { Metadata } from "next";
import PaymentComplete from "@/components/Payment/PaymentComplete";

export const metadata: Metadata = {
  title: {
    default: "AlaCartApp",
    template: "Home | AlaCartApp",
  },
};

export default function Home() {
  redirect("/platos");
  // return (
  //   <main className="flex h-screen w-screen flex-col bg-whitebackground items-center justify-between"></main>
  // );
}
