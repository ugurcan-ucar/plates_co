import React from 'react'
import { IconProps } from "@type/Icon";

const HamburgerIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor", 
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height} 
    {...props}
  >
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M20 7H4m16 5H4m16 5H4"
    ></path>
  </svg>
);

export default HamburgerIcon;
