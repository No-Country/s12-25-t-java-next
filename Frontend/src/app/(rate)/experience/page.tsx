import Star from "@/components/shared/Icons/Start";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-lg font-semibold pb-2">
        Queremos conocer tu opinión
      </h1>
      <h3 className="text-sm">¿Qué te parecieron los siguientes platos?</h3>

      {/* Iterar */}
      <div className="overflow-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="fixed bottom-0 inset-x-0 py-8 px-4 bg-white">
        <button
          type="button"
          className="p-2 text-center bg-secondary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
        >
          Enviar calificación
        </button>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div className="flex items-center py-2 gap-4">
        <Image
          src="/images/lasaña.png"
          alt="lasaña"
          width={112}
          height={96}
          priority
        />
        <div className="flex self-start flex-col">
          <h4 className="py-3 text-sm font-medium">Carpaccio de salmón</h4>
          <div className="flex items-center gap-6">
            <Star className="text-tertiary-100" />
            <Star className="text-tertiary-100" />
            <Star className="text-tertiary-100" />
            <Star className="text-tertiary-100" />
            <Star className="text-white stroke-tertiary-100" />
          </div>
        </div>
      </div>
      <div className="border border-lightgrey/30" />
    </>
  );
};
