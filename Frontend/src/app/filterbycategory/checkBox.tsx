"use client"
import Button from "@/components/Button";
import React, { useState } from "react";
import { CheckboxIcon } from "./icons";
import { useRouter } from "next/navigation";
import { useSelectedItem } from "@/store/FilterSelected/filterSelected";

export default function Checkbox({ subcategory }: { subcategory: string[] }) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(subcategory.length).fill(false));
  const route = useRouter()
  const setSelectedItems = useSelectedItem((state) => state.setSelectedItems)

  if (!subcategory || subcategory.length === 0) {
    <p>Hola, estamos trabajando por ti. Vuelve pronto, te quiero :D</p>
  }
  const handleChecked = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedItems = subcategory.filter((_, index) => checkedItems[index]);
    if (selectedItems.length > 0 && selectedItems.every(item => item.trim() !== ""))
    {
      setSelectedItems(selectedItems)
      route.back();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {
        subcategory.map((subcategoryItem, index) => (
          <div key={index} className="flex justify-between items-center px-4 mt-7">
            <label htmlFor={`checkbox-${index}`}>{subcategoryItem}</label>
            {checkedItems[index] ? (
              <div
                className="bg-secondary-100"
                onClick={() => handleChecked(index)}
              >
                <CheckboxIcon />
              </div>
            ) : (
              <div
                className="w-[1.125rem] h-[1.125rem] border-2 border-secondary-100 rounded-sm cursor-pointer"
                onClick={() => handleChecked(index)}
              />
            )}
          </div>
))}
        <div className="px-4 mt-8">
          <Button text="Aplicar" variant="primary" type="submit" />
        </div>
    </form>
  );
}