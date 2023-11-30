import { Footer, Header } from "@/components";
import FilterProducts from "@/components/FilterProducts/FilterProducts";
import React from "react";

function MainsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
          <Header />
      <FilterProducts />
      {children}
      <Footer />
    </div>
  );
}
export default MainsLayout;
