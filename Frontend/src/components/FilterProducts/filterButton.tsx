 import FilterIcon from "./icons";

export default function FilterButton() {
  return (
    <button
      type="button"
      className=" w-[41px] h-10 bg-[#C8C8C8] rounded-[50px] border 
        border-[#E5E5E5] flex items-center justify-center  ml-2"
    >
      <span className="w-[17px] h-[14px]">
        <FilterIcon />
      </span>
    </button>
  );
}
