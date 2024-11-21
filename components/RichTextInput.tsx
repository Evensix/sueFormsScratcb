"use dom";

import { useRef, useState } from "react";
import { IconSymbol } from "./ui/IconSymbol";

interface RichTextInputProps {
  label: string;
  value: string;
  hint: string;
  example: string;
}

export const RichTextInput = ({
  label,
  hint,
  value,
  example,
}: RichTextInputProps) => {
  const ref = useRef<HTMLSelectElement>(null);


  const [isExampleOpen, setIsExampleOpen] = useState(false);



  return (
    <div className="flex flex-col relative w-full ">
      <label>{label}</label>
      {hint && <p>{hint}</p>}
      <textarea
        value={value}
        className="flex flex-row w-fit w-full border rounded-xl bg-white h-[100px]"
      />
      {(isExampleOpen) && example && (
        <div onClick={() => setIsExampleOpen(!isExampleOpen)}>
          <p>Example</p>
          {isExampleOpen && <p>{example}</p>}
        </div>
      )}
    </div>
  );
};
