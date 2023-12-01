import { StarIcon } from "@heroicons/react/20/solid";
import { NonEssentialsProduct } from "../../types/Product";
import Image from "next/image";

function ProductCard({
  title,
  price,
  image,
  rating,
  category,
}: NonEssentialsProduct) {
  const cardSize = category === "Platos" ? "w-44 h-36" : "w-40 h-44";
  const imageSize = category === "Platos" ? "w-40 h-24" : "w-36 h-28";

  return (
    <div className={`${cardSize} rounded-lg shadow-card px-2 pt-2 mb-5`}>
      <div className={`relative ${imageSize}`}>
        <Image
          alt="product"
          src={image}
          className="rounded-lg"
          priority={true}
          fill={true}
          sizes="50vw"
        />
      </div>
      <div className="mt-1 flex justify-between items-baseline">
        <h2 className="text-black text-xs truncate">{title}</h2>
        <div className="flex items-baseline justify-around w-6 h-3 px-[0.125rem] py-[0.0625rem] bg-lightgrey rounded">
          <StarIcon className="w-2 h-2 text-tertiary-100" />
          <p className="text-[0.5rem] text-black">{rating}</p>
        </div>
      </div>
      <p className="text-black text-sm font-semibold ">${price}</p>
    </div>
  );
}
export default ProductCard;
