import FilterButton from "./filterButton";
import { SearchIcon } from "./icons";

export default function Search() {
  return (
    <section className="flex flex-row items-center gap-x-2 mt-4 mb-2 px-4 w-full">
      <div className="relative w-full">
        <input
          type="search"
          className="h-10 w-full  rounded-full
            border border-[#E5E5E5] bg-[#C8C8C8] pl-10 text-xs
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
