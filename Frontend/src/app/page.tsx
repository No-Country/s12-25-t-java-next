// import { products } from "@/utils/data";
// import { Notification, ProductDescription } from "@/components";
import { redirect } from "next/navigation";

export default function Home() {
	// TODO: create home page if its needed
	redirect("/menu");
	// return (
	// 	<main className="flex min-h-[100vh] w-screen flex-col bg-whitebackground items-center justify-between">
	// 		<Notification />
	// 	</main>
	// );
}
