import ActiveButton from "./activeButton";
import Search from "./search";

export default function DishesPage() {
  const fakeData = [
    {
      id: "1",
      title: "Platos",
    },
    {
      id: "2",
      title: "Postres",
    },
    {
      id: "3",
      title: "Bebidas",
    },
  ];
  return (
    <section className="w-full ">
      <div className="flex flex-row items-center justify-between px-4 mt-4">
        {fakeData.map((data) => (
          <ActiveButton slug={`/${data.title}`} key={data.id}>
            <div className="flex justify-center items-center h-full">
              <span> {data.title} </span>
            </div>
          </ActiveButton>
        ))}
      </div>
      <Search />
    </section>
  );
}
