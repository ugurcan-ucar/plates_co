import React from 'react'
import { IconProps } from "@type/Icon";

const BasketIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor", 
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    viewBox="0 0 24 24"
    width={width}
    height={height} 
    strokeWidth="1.5"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
  </svg>
);

export default BasketIcon;
