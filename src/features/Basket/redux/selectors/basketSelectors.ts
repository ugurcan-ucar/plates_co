import { BasketItem } from "@/types/Basket";
import {
  CARGO_PRICE_THRESHOLDS,
  CARGO_PRICES,
} from "../../constants/cargoPrices";

export const getTotalBasketItems = (items: BasketItem[]) =>
  items.reduce((acc: number, current: BasketItem) => acc + current.quantity, 0);

export const getBasketSubTotalPrice = (items: BasketItem[]) => {
  return items.reduce(
    (acc: number, current: BasketItem) =>
      acc + current.price * current.quantity,
    0,
  );
};

export const getShippingPrice = (price: number) =>
  CARGO_PRICE_THRESHOLDS.find((cargoPrice) => price > cargoPrice.min)?.price ??
  CARGO_PRICES.free;
