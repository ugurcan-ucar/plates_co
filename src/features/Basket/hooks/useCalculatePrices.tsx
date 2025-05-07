"use client";

import { BuyRedSecondIsHalfPrice } from "@/features/Offers/BuyRedSecondIsHalfPrice";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import {
  getBasketSubTotalPrice,
  getShippingPrice,
} from "../redux/selectors/basketSelectors";
import { OfferDiscount } from "@/types/Offer";

const useCalculatePrices = () => {
  const products = useSelector((state: RootState) => state.basket.products);

  const subTotalPrice = getBasketSubTotalPrice(products);
  const offers = [BuyRedSecondIsHalfPrice];
  const offerDiscounts: OfferDiscount[] = [];
  const totalDiscount = offers.reduce((total, offer) => {
    const response = offer.apply(products);
    if (response.discount > 0) offerDiscounts.push(response);
    return total + response.discount;
  }, 0);

  const totalPrice = subTotalPrice - totalDiscount;
  const shippingPrice = getShippingPrice(totalPrice);

  return {
    totalPrice: subTotalPrice - totalDiscount + shippingPrice,
    subTotalPrice,
    offerDiscounts,
    totalDiscount,
    shippingPrice,
  };
};

export default useCalculatePrices;
