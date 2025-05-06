import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const Container = ({
  children,
  className,
  wrapperClassName,
}: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center",
        wrapperClassName,
      )}
    >
      <div className={twMerge("w-full max-w-7xl px-8", className)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
