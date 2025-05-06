"use client";

import CrossIcon from "@/components/Icons/CrossIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // For lock scroll whenever we open menu
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <HamburgerIcon width={32} height={32} onClick={() => setIsOpen(true)} />

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full transform bg-white transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <CrossIcon
          width={32}
          height={32}
          className="absolute top-5 right-5"
          strokeWidth={2}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <ul className="flex h-full flex-col items-center justify-center space-y-8 text-2xl text-gray-800">
          {ROUTES.map((route) => (
            <li key={route.id}>
              <Link href={route.path} onClick={() => setIsOpen(false)}>
                {route.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/basket" onClick={() => setIsOpen(false)}>
              Basket
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
