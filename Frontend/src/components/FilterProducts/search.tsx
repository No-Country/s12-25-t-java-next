"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./filterButton";
import { SearchIcon } from "./icons";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className='flex flex-row items-center gap-x-2 mt-4 mb-2 px-4 w-full'>
      <div className='relative w-full'>
        <input
          type='search'
          className='h-10 w-full  rounded-full
            border border-[#E5E5E5] bg-[#C8C8C8] pl-10 pr-2 text-xs
             placeholder:text-darkgrey focus:outline-none 
             focus:border-primary-100 focus:ring-primary-100'
          placeholder='¿Qué deseas comer hoy?'
          onChange={event => handleSearch(event.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <span className='absolute left-3 top-3 '>
          <SearchIcon />
        </span>
      </div>
      <div className='w-10'>
        <FilterButton />
      </div>
    </section>
  )
}
