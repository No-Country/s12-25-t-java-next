import { redirect } from "next/navigation";
import { Metadata } from "next";
// import { products } from "@/utils/data";
// import { Notification, ProductDescription } from "@/components";
export const metadata: Metadata = {
  title: {
    default: "AlaCartApp",
    template: "Home | AlaCartApp",
  },
};


export default function Home() {
	redirect("/platos");
	// return (
	//   <main className="flex min-h-[100vh] w-screen flex-col bg-whitebackground items-center justify-between">
	//     <Notification />
	//   </main>
	// );
}
