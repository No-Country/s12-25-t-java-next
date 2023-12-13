// "Platos" | "Postres" | "Bebidas";

type Category = {
  id: string
  name: string
  available: boolean
}

type Image = {
  id: string
  imageUrl: string
}

type SubCategory = {
  id: string
  name: string
  available: boolean
}

export interface Product {
  id: string
  name: string
  price: number
  category: Category
  description: string
  images: Image[]
  state: boolean
  subCategory: SubCategory
  rating?: number
  optionals?: string[]
}

export type NonEssentialsProduct = Omit<
  Product,
  'id' | 'description' | 'subCategory' | 'optionals' | 'state'
>
