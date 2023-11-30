import ActiveButton from "./activeButton";
import Search from "./search";

export default function FilterProducts () {
  const fakeData = [
    {
      id: "1",
      title: "Platos",
      routes:"mains"
    },
    {
      id: "2",
      title: "Postres",
      routes:"#"
    },
    {
      id: "3",
      title: "Bebidas",
      routes:"#"
    },
  ];
  return (
    <section className="w-full ">
      <div className="flex flex-row items-center justify-between px-4 mt-4">
        {fakeData.map((data) => (
          <ActiveButton slug={`/${data.routes}`} key={data.id}>
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
