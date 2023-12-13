import FilterProducts from "@/components/FilterProducts/FilterProducts";
import FilterButton from "@/components/FilterProducts/filterButton";
import Search from "@/components/FilterProducts/search";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProducts } from "@/lib/Products";
import { IProduct } from "@/types/order";
import React from "react";

async function MenuLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts();
  console.log("prueba");
  console.log("productos", products);
  const categories = [
    ...new Set(products.map((product) => product.category.name.toLowerCase())),
  ];
  return (
    <div>
      <Header />
      <FilterProducts categories={categories} />
      <div className='flex flex-row items-center mt-4 mb-2 px-4 w-full gap-x-2'>
        <Search placeholder='¿Qué deseas comer hoy?' />
        <div className='w-10'>
          <FilterButton />
        </div>
      </div>
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </div>
  );
}
export default MenuLayout;
