import HeaderBack from "@/components/Header/HeaderBack";

export default function BillPages() {
  const filterData = [
    {
      id: "1",
      nombreDelPlato: "Carpaccio de salmon",
      precio: "2000",
    },
    {
      id: "2",
      nombreDelPlato: "Carpaccio de salmon",
      precio: "2000",
    },
  ];
  const total = "5000";
  return (
    <section className="bg-white">
      <HeaderBack text="Factura" />
      <div className="px-5 mt-5">
        {filterData.map((data) => (
          <div key={data.id}>
            <h1 className={`text-black h-4 text-base font-normal font-sans my-2 ${data.id === "1" ? "": "border-t-2 border-[#E8E8E8]"}`}>
              {data.nombreDelPlato}
            </h1>
            <span className="text-lg font-semibold font-sans mt-[6px]">
              ${data.precio}
            </span>
          </div>
        ))}
        <div className="text-end">
          <h2 className="h-6 text-zinc-900 text-base font-medium font-sans">
            Subtotal
          </h2>
          <span className="text-[22px] font-medium font-sans">${total}</span>
        </div>
      </div>
    </section>
  );
}
