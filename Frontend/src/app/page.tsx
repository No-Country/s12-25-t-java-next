import { redirect } from "next/navigation";
import PaymentComplete from "@/components/Payment/PaymentComplete";

export default function Home() {
  redirect("/platos");
  // return (
  //   <main className="flex h-screen w-screen flex-col bg-whitebackground items-center justify-between"></main>
  // );
}
