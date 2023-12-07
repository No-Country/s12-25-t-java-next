"use client"
import { useSelectedItem } from "@/store/FilterSelected/filterSelected";
import { CloseIcon } from "./icons";

export default function FilterSelected() {
 const selectItems = useSelectedItem((state) => state.selectedItems)
 const removeItem = useSelectedItem((state) => state.removeSelectedItem)
  return (
    <section className="px-4 flex flex-row gap-x-2">
        {selectItems.map((item) =>
        
      <div key={item} className="h-6 pl-3 pr-2 py-1 bg-[#E0E0E0] rounded-[100px] justify-start items-center gap-2 inline-flex">
        <div className="w-full text-zinc-600 text-[11px] text-darkgrey font-normal font-['Roboto'] leading-tight tracking-tight">
          {item}
        </div>
        <span onClick={ () => removeItem(item)} className="cursor-pointer"><CloseIcon /></span>
    
      </div>
      )}
    </section>
  );
}
