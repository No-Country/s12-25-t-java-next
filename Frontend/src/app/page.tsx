import DishesPage from "./[slug]/page";
import { Button, Counter, Notification } from "@/components";

export default function Home() {
	return (
		<main className="flex min-h-[100vh] w-screen flex-col bg-whitebackground items-center justify-between overflow-hidden">
			<DishesPage />
			<Notification />
			<Counter />
		</main>
	);
}
