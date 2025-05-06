import React, { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  count: number;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, count, className }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {count > 0 && (
        <span className="pointer-events-none absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white shadow-md">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </div>
  );
};

export default Badge;
