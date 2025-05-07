export const CARGO_PRICES = {
  normal: 4.95,
  discounted: 2.95,
  free: 0,
};

export const CARGO_PRICE_THRESHOLDS = [
  { min: 90, price: CARGO_PRICES.free },
  { min: 50, price: CARGO_PRICES.discounted },
  { min: 0, price: CARGO_PRICES.normal },
];
