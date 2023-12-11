import { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
  quantity: number;
}

type CartStore = {
  cart: CartItem[];
  quantity: () => number;
  quantityPerProduct: (idProduct: string) => number;
  subtotal: () => number;
  add: (product: Product, quantity?: number) => void;
  remove: (idProduct: string) => void;
  removeProduct: (idProduct: string) => void;
  removeAll: () => void;
};

const addDecimal = (a: number, b: number) => {
  return parseFloat((a + b).toFixed(2));
};

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],
      quantity: () => {
        const { cart } = get();
        if (cart.length) return cart.length;
        return 0;
      },
      quantityPerProduct: (idProduct: string) => {
        const { cart } = get();
        if (cart.length)
          return cart
            .filter((item) => item.id === idProduct)
            .map((item) => item.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        return 0;
      },
      subtotal: () => {
        const { cart } = get();
        if (cart.length) {
          return addDecimal(
            cart
              .map((item) => item.price * item.quantity)
              .reduce((prev, curr) => prev + curr, 0),
            0,
          );
        }
        return 0;
      },
      add: (product: Product, quantity?: number) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart, quantity);
        set({ cart: updatedCart });
      },
      remove: (idProduct: string) => {
        const { cart } = get();
        const updatedCart = removeCart(idProduct, cart);
        set({ cart: updatedCart });
      },
      removeProduct: (idProduct: string) => {
        const { cart } = get();
        const updatedCart = removeProduct(idProduct, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: "cart-items",
    },
  ),
);

function updateCart(
  product: Product,
  cart: CartItem[],
  quantity = 1,
): CartItem[] {
  const cartItem = { ...product, quantity: quantity } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, quantity: item.quantity + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    })
    .filter((item) => {
      return item.quantity;
    });
}

function removeProduct(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart.filter((item) => item.id !== idProduct);
}