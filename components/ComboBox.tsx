"use dom";

import { useRef, useState } from "react";
import { IconSymbol } from "./ui/IconSymbol";

interface ComboBoxInputProps {
  label: string;
  value: string;
  options: string[];
  hint: string;
  example: string;
}

export const ComboBoxInput = ({
  label,
  options,
  hint,
  value,
  example,
}: ComboBoxInputProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true); // Dropdown has been clicked (or focused)
  };

  const handleBlur = () => {
    setIsOpen(false); // Dropdown has lost focus (closed)
  };

  return (
    <div className="flex flex-col relative w-full ">
      <label>{label}</label>
      {isOpen && hint && <p>{hint}</p>}
      <select
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        value={value}
        className="flex flex-row w-fit p-2 px-4 border rounded-xl bg-white"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {(isOpen || isExampleOpen) && example && (
        <div onClick={() => setIsExampleOpen(!isExampleOpen)}>
          <p>Example</p>
          {isExampleOpen && <p>{example}</p>}
        </div>
      )}
    </div>
  );
};
