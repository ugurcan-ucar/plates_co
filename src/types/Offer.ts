import { BasketItem } from "./Basket";

export interface Offer {
  apply: (items: BasketItem[]) => OfferDiscount;
}

export interface OfferDiscount {
  discount: number;
  description: string;
  offeredProducts: string[];
}
