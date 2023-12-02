import Image from "next/image";

export default function NotificationPage() {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/notification-exp.png"
          alt="notification"
          width={224}
          height={150}
          priority
          className="pt-24 pb-4"
        />

        <h1 className="pb-16 font-semibold text-2xl text-center">
          ¡Tu calificación ha sido enviada!
        </h1>
        <h3 className="pb-3 text-xl font-semibold">Valoramos tu opinión</h3>
        <p className="text-sm">¡Esperamos verte pronto!</p>

        <button
          type="button"
          className="mt-16 p-2 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
        >
          Abrir nueva mesa
        </button>
      </div>
    </div>
  );
}
