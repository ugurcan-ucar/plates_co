import { BasketItem } from "@/types/Basket";
import { Offer } from "@/types/Offer";

export const BuyRedSecondIsHalfPrice: Offer = {
  apply: (products: BasketItem[]) => {
    const redPlate = products.find((product) => product.code === "R01");
    let discount = 0;

    if (redPlate) {
      const pairs = Math.floor(redPlate.quantity / 2);
      discount = parseFloat((pairs * redPlate.price * 0.5).toFixed(2));
    }

    return {
      discount,
      description: "2nd Red Plate 50% off",
      offeredProducts: ["R01"],
    };
  },
};
