import { Product } from '@/types/Product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem extends Product {
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  quantity: () => number
  quantityPerProduct: (idProduct: number) => number
  subtotal: () => number
  add: (product: Product, quantity?: number) => void
  remove: (idProduct: number) => void
  removeProduct: (idProduct: number) => void
  removeAll: () => void
}

const addDecimal = (a: number, b: number) => {
  return parseFloat((a + b).toFixed(2))
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],
      quantity: () => {
        const { cart } = get()
        if (cart.length) return cart.length
        return 0
      },
      quantityPerProduct: (idProduct: number) => {
        const { cart } = get()
        if (cart.length)
          return cart
            .filter(item => item.id === idProduct)
            .map(item => item.quantity)
            .reduce((prev, curr) => prev + curr, 0)
        return 0
      },
      subtotal: () => {
        const { cart } = get()
        if (cart.length) {
          return addDecimal(
            cart
              .map(item => item.price * item.quantity)
              .reduce((prev, curr) => prev + curr, 0),
            0,
          )
        }
        return 0
      },
      add: (product: Product, quantity?: number) => {
        const { cart } = get()
        const updatedCart = updateCart(product, cart, quantity)
        set({ cart: updatedCart })
      },
      remove: (idProduct: number) => {
        const { cart } = get()
        const updatedCart = removeCart(idProduct, cart)
        set({ cart: updatedCart })
      },
      removeProduct: (idProduct: number) => {
        const { cart } = get()
        const updatedCart = removeProduct(idProduct, cart)
        set({ cart: updatedCart })
      },
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: 'cart-items',
    },
  ),
)

function updateCart(
  product: Product,
  cart: CartItem[],
  quantity = 1,
): CartItem[] {
  const cartItem = { ...product, quantity: quantity } as CartItem

  const productOnCart = cart.map(item => item.id).includes(product.id)

  if (!productOnCart) cart.push(cartItem)
  else {
    return cart.map(item => {
      if (item.id === product.id)
        return { ...item, quantity: item.quantity + quantity } as CartItem
      return item
    })
  }

  return cart
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map(item => {
      if (item.id === idProduct) return { ...item, quantity: item.quantity - 1 }
      return item
    })
    .filter(item => {
      return item.quantity
    })
}

function removeProduct(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart.filter(item => item.id !== idProduct)
}

// import { Product } from "@/types/Product";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CartItem extends Product {
//   quantity: number;
// }

// type CartStore = {
//   cart: CartItem[];

//   subtotal: () => number;
//   add: (product: Product, count?: number) => void;
//   remove: (idProduct: number, count ?: number) => void;
//   removeProduct: (idProduct: number ) => void; 
//   removeAll: () => void;
// };
// const addDecimal = (a: number, b: number) => {
//   return parseFloat((a + b).toFixed(2));
// };
// export const useCartStore = create(
//   persist<CartStore>(
//     (set, get) => ({
//       cart: [],
    

//       subtotal: () => {
//         const { cart } = get();
//         if (cart.length) {
//           return addDecimal(
//             cart
//               .map((item) => item.price * item.quantity)
//               .reduce((prev, curr) => prev + curr),
//             0
//           );
//         }
//         return 0;
//       },
//       add: (product: Product, count?: number ) => {
//         const { cart } = get();
//         const updatedCart = updateCart(product, cart, count);
//         set({ cart: updatedCart });
//       },
//       remove: (idProduct: number, count ?: number) => {
//         const { cart } = get();
//         const updatedCart = removeCart(idProduct, cart, count);
//         set({ cart: updatedCart });
//       },
//       removeProduct: (idProduct: number, count?: number ) => {
//         const { cart } = get();
//         const updatedCart = removeProduct(idProduct, cart);
//         set({ cart: updatedCart });
//       },
//       removeAll: () => set({ cart: [] }),
//     }),
//     {
//       name: "cart-items",
//     },
//   ),
// );
// function updateCart(product: Product, cart: CartItem[], count: number = 1){
//   const cartItem = { ...product, quantity: count } as CartItem;

//   const productOnCart = cart.map((item) => item.id).includes(product.id);

//     // Product is already in the cart, update its quantity
//     if (!productOnCart) cart.push(cartItem);
//       else {
//         return cart.map((item) => {
//           if (item.id === product.id)
//             return { ...item, quantity: item.quantity + count } as CartItem;
//           return item;
//         });
//       }
// }


// // function updateCart(product: Product, cart: CartItem[]): CartItem[] {
// //   const cartItem = { ...product, qutity: 1 } as CartItem;

// //   const productOnCart = cart.map((item) => item.id).includes(product.id);

// //   if (!productOnCart) cart.push(cartItem);
// //   else {
// //     return cart.map((item) => {
// //       if (item.id === product.id)an
// //         return { ...item, quantity: item.quantity + 1 } as CartItem;
// //       return item;
// //     });
// //   }

// //   return cart;
// // }


// function removeCart(idProduct: number, cart: CartItem[], count = 1): CartItem[] {
//   return cart
//     .map((item) => {
//       if (item.id === idProduct)
//         return { ...item, quantity: item.quantity - count };
//       return item;
//     })
//     .filter((item) => {
//       return item.quantity;
//     });
// }

// function removeProduct(idProduct: number, cart: CartItem[]): CartItem[] {
//  console.log("remove ",idProduct)
//   return cart.filter((item) => item.id !== idProduct);
// }