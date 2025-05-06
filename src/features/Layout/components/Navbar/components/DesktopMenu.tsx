import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import BasketIconWithBadge from "./BasketIconWithBadge";

const DesktopMenu = () => {
  return (
    <div className="hidden items-center space-x-4 md:flex">
      {ROUTES.map((route) => (
        <Link
          key={route.id}
          href={route.path}
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          {route.name}
        </Link>
      ))}
      <BasketIconWithBadge />
    </div>
  );
};

export default DesktopMenu;
