"use client";
import TrashIcon from "@/components/Icons/TrashIcon";
import Stepper from "@/components/Stepper/Stepper";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import useCalculatePrices from "../hooks/useCalculatePrices";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
} from "../redux/slices/basketSlice";

const ShoppingBasket = () => {
  const basketItems = useSelector((state: RootState) => state.basket.products);
  const dispatch = useDispatch();
  const { offerDiscounts } = useCalculatePrices();
  return (
    <div className="h-max flex-2 divide-y divide-gray-200 rounded-lg bg-white shadow-md">
      {basketItems.map((item) => (
        <div key={item.code} className="flex rounded-md p-5">
          <Image
            src={item.img}
            alt={item.name}
            className="mr-4 max-h-[100px] rounded-md"
            width={100}
            height={100}
          />
          <div className="flex w-full flex-col justify-between gap-5 lg:flex-row">
            <div className="flex flex-col justify-center gap-1">
              <strong>{item.name}</strong>
              <span className="text-sm text-gray-500">{item.description}</span>
              <span className="font-semibold">${item.price}</span>
              {offerDiscounts.some((offer) =>
                offer.offeredProducts.includes(item.code),
              ) && (
                <span className="text-sm text-green-500">
                  {
                    offerDiscounts.find((offer) =>
                      offer.offeredProducts.includes(item.code),
                    )?.description
                  }{" "}
                  is Applied!
                </span>
              )}
            </div>
            <div className="flex w-full justify-end items-center gap-3 lg:w-auto">
              <Stepper
                increment={() => dispatch(incrementQuantity(item.code))}
                decrement={() => dispatch(decrementQuantity(item.code))}
                value={item.quantity}
              />
              <TrashIcon
                onClick={() => {
                  dispatch(removeFromBasket(item.code));
                }}
                className="cursor-pointer"
                color="red"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBasket;
