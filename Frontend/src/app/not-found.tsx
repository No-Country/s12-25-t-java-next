import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center px-5 justify-center flex-col w-screen h-screen overflow-hidden">
      <h2 className="text-[2.1875rem] text-center text-primary-100 font-semibold ">Ups! <br/> Ha ocurrido un error</h2>
      <p className="text-center font-medium text-[1rem] " >Parece que la página a la que deseas acceder ya no existe.</p>
      <Link href="/platos">Volver al Home</Link>
    </div>
  );
}