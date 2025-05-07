export const priceFormatter = (price: number) => {
  return `${price < 0 ? "-" : ""}$${Math.abs(price).toFixed(2)}`;
};
