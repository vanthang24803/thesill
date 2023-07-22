import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  removeAll: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      isOpen: false,
      onOpen: () => set({ isOpen: true }),
      onClose: () => set({ isOpen: false }),
      items: [],
      addItem: (data: Product, quantity: number = 1) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === data.id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
        } else {
          set({ items: [...get().items, { product: data, quantity }] });
        }

        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.product.id !== id)],
        });
        toast.success("Item removed from cart.");
      },
      updateItemQuantity: (id: string, quantity: number) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity = quantity;
          set({ items: updatedItems });
          toast.success("Item quantity updated.");
        } else {
          toast.error("Item not found in cart.");
        }
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
