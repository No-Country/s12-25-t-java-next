import HeaderBack from "@/components/Header/HeaderBack";
import Checkbox from "./checkBox";
import { productsAndSubcats } from "@/utils/productBreakdown";

export default async function FilterPage({
  searchParams,
}: {
  searchParams: { subcategories: string };
}) {
  const { subcategories } = await productsAndSubcats(
    searchParams.subcategories,
  );

  return (
    <section className="bg-white">
      <HeaderBack text="Filter" />
      {subcategories && subcategories.length > 0 ? (
        <Checkbox subcategory={subcategories} />
      ) : (
        <p>Hola, estamos trabajando por ti. Vuelve pronto, te quiero :D</p>
      )}
    </section>
  );
}
