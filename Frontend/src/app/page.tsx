import Notification from "@/components/Modal/Notification";
import Image from "next/image";
import DishesPage from "./[slug]/page";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] w-screen flex-col bg-whitebackground items-center justify-between overflow-hidden">
      <DishesPage />
      <Notification />
    </main>
  );
}
