export default function PopupComponent() {
  return (
    <div className="min-h-screen bg-whitebackground flex items-center justify-center p-4 font-sans">
      <div className="bg-[#FFFFFF] h-44 w-full rounded-3xl shadow-2xl">
        <h1 className="text-xl font-bold pl-7 pt-3 pb-1">Llama al mesero</h1>
        <div className="border border-grey/30 w-full" />
        <div className="pt-3 pb-6 px-6">
          <div className="pb-2">
            ¿Tienes alguna duda? Llama al mesero para que te atienda.
          </div>
          <div className="flex items-center justify-between">
            <button className="w-28 rounded-3xl py-2 text-center font-medium text-secondary-100 border border-secondary-100 shadow-xl">
              Cancelar
            </button>
            <button className="w-28 rounded-3xl py-2 text-center font-medium text-[#FFFFFF] bg-secondary-100 shadow-xl">
              Llamar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
