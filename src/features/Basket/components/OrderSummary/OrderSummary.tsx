"use client";
import React from "react";
import PriceRow from "./PriceRow";
import useCalculatePrices from "../../hooks/useCalculatePrices";

const OrderSummary = () => {
  const {
    subTotalPrice,
    shippingPrice,
    totalDiscount,
    totalPrice,
    offerDiscounts,
  } = useCalculatePrices();
  return (
    <div className="h-max flex-1 rounded-lg border border-gray-200 bg-white p-5 shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
      <div className="space-y-4">
        <PriceRow title="Subtotal" price={subTotalPrice} />
        {totalDiscount > 0 && (
          <div className="border-t border-gray-200 pt-4">
            <span className="text-sm font-semibold text-gray-900">
              Discounts Applied
            </span>
            <div className="mt-4">
              {offerDiscounts.map((offer, index) => (
                <PriceRow
                  key={index}
                  title={offer.description}
                  price={-offer.discount}
                  className="text-sm text-balance text-green-500"
                />
              ))}
              <PriceRow
                title="Total Savings"
                price={-totalDiscount}
                className="mt-3 font-semibold text-green-500"
              />
            </div>
          </div>
        )}

        <PriceRow
          title="Shipping"
          price={shippingPrice === 0 ? "Free" : shippingPrice}
          className="border-t border-gray-200 pt-4"
        />

        <PriceRow
          title="Total"
          price={totalPrice}
          className="border-t border-gray-200 pt-4 text-lg font-semibold text-gray-900"
        />
        <button className="mt-2 w-full cursor-pointer rounded-md bg-blue-500 py-5 font-semibold text-white transition-colors hover:bg-blue-600">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
