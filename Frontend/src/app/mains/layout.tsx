import FilterProducts from "@/components/FilterProducts/FilterProducts";
import React from "react";

function MainsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FilterProducts />
      {children}
    </div>
  );
}
export default MainsLayout;
