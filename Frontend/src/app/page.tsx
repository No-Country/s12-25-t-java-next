import { products } from "@/utils/data";
import { Notification, ProductDescription } from "@/components";


export default function Home() {
  return (
    <main className="flex min-h-[100vh] w-screen flex-col bg-whitebackground items-center justify-between">
      <Notification />
    </main>
  );
}
