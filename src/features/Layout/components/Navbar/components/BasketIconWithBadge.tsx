"use client";
import Badge from "@/components/Badge/Badge";
import BasketIcon from "@/components/Icons/BasketIcon";
import { getTotalBasketItems } from "@/features/Basket/redux/selectors/basketSelectors";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const BasketIconWithBadge = () => {
  const basketItems = useSelector((state: RootState) => state.basket.products);

  const totalItemCount = getTotalBasketItems(basketItems);  

  return (
    <Badge
      count={totalItemCount}
      className="rounded-md p-2 text-sm font-medium text-gray-600 hover:text-gray-900"
    >
      <Link href={"/basket"}>
        <BasketIcon />
      </Link>
    </Badge>
  );
};

export default BasketIconWithBadge;
