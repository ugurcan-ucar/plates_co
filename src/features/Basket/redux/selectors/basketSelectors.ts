import { BasketItem } from "@/types/Basket";

export const getTotalBasketItems = (items: BasketItem[]) =>
  items.reduce((acc: number, current: BasketItem) => acc + current.quantity, 0);
