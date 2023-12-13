import { Product } from "@/types/Product";
import unorm from "unorm";

export function filterProductsBySubcategory(
  subcategory: string,
  productsByCategory: Product[],
  searchParams?: { query: string | undefined },
): Product[] {
  const filteredProductsBySubcategory = productsByCategory.filter((product) => {
    const sensitiveSearchParams = unorm
      .nfd(searchParams?.query?.toLowerCase() || '')
      .replace(/[\u0300-\u036f]/g, '')
    const sensitiveProduct = unorm
      .nfd(product.name.toLowerCase())
      .replace(/[\u0300-\u036f]/g, '')
    const nameMatch = sensitiveProduct.includes(sensitiveSearchParams)
    const descriptionMatch = product.description
      ?.toLowerCase()
      .includes(sensitiveSearchParams)

    return (
      product.subCategory.name === subcategory &&
      (nameMatch || descriptionMatch)
    );
  });

  return filteredProductsBySubcategory
}

export function filterProducts(
  productsByCategory: Product[],
  searchParams?: { query: string | undefined; sort: string | undefined },
): Product[] {
  return productsByCategory.filter((product) => {
    const subcategoryMatch = product.subCategory.name === searchParams?.sort;

    const sensitiveSearchParams = unorm
      .nfd(searchParams?.query?.toLowerCase() || '')
      .replace(/[\u0300-\u036f]/g, '')
    const sensitiveProduct = unorm
      .nfd(product.name.toLowerCase())
      .replace(/[\u0300-\u036f]/g, '')
    const nameMatch = sensitiveProduct.includes(sensitiveSearchParams)
    const descriptionMatch = product.description
      ?.toLowerCase()
      .includes(sensitiveSearchParams)

    return subcategoryMatch ? nameMatch || descriptionMatch : false;
  });
}
