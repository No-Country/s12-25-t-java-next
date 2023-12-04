import FilterButton from "./filterButton";
import { SearchIcon } from "./icons";

export default function Search() {
  return (
    <section className="flex flex-row items-center  mt-4 px-4">
      <div className="relative">
        <input
          type="search"
          className="w-[280px] h-10  rounded-full
            border border-[#E5E5E5] bg-[#C8C8C8] pl-10 pr-4 text-xs
             placeholder:text-darkgrey focus:outline-none 
             focus:border-primary-100 focus:ring-primary-100"
          placeholder="¿Qué deseas comer hoy?"
        />
        <span className="absolute left-3 top-3 ">
          <SearchIcon />
        </span>
      </div>
      <FilterButton />
    </section>
  );
}
