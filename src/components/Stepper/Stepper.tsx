import React from "react";

type StepperProps = {
  increment: () => void;
  decrement: () => void;
  value: number;
};

const Stepper = ({ increment, decrement, value = 1 }: StepperProps) => {
  return (
    <div className="flex items-center rounded-md border border-gray-300 overflow-hidden ">
      <button
        onClick={decrement}
        className="w-10 cursor-pointer px-3 py-1 transition hover:bg-gray-100"
      >
        -
      </button>
      <span className="w-10 px-3 py-1 text-gray-300">{value}</span>
      <button
        onClick={increment}
        className="cursor-pointer px-3 py-1 transition hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default Stepper;
