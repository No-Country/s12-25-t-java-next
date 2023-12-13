import FilterProducts from "@/components/FilterProducts/FilterProducts";
import FilterButton from "@/components/FilterProducts/filterButton";
import Search from "@/components/FilterProducts/search";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProducts } from "@/lib/Products";
import React from "react";
import NoProducts from "@/components/Products/NoProducts";

async function MenuLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts();

  const categories =
    products.length > 0
      ? [
          ...new Set(
            products.map((product) => product.category.name.toLowerCase())
          ),
        ]
      : [];
  return (
    <div>
      <Header />
      {categories.length > 0 && <FilterProducts categories={categories} />}
      {products.length > 0 ? (
        <>
          <div className="flex flex-row items-center mt-4 mb-2 px-4 w-full gap-x-2">
            <Search placeholder="¿Qué deseas comer hoy?" />
            <div className="w-10">
              <FilterButton />
            </div>
          </div>
          <main className="min-h-[90vh]">{children}</main>
        </>
      ) : (
        <NoProducts />
      )}
      <Footer />
    </div>
  );
}
export default MenuLayout