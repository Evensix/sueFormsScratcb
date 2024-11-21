"use dom"

import { useRef, useState } from "react";
import { IconSymbol } from "./ui/IconSymbol";

interface DropDownInputProps {
    label: string;
    value: string;
}


export const DropDownInput = ({ label,  value }: DropDownInputProps) => {
    const [open, setOpen] = useState(false);
    const [listVal, setListVal] = useState<string[]>([]);
    const addToList = () => {
        if (ref.current){
            setListVal([...listVal, ref.current.value]);

        }
    }
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className="flex flex-col relative w-full ">
            <button onClick={() => setOpen(!open)} >
                <div className="flex flex-row w-fit p-2 px-4 border rounded-xl bg-white">
                    + Add
                </div>
            </button>
            {open && (
                <div  className="flex flex-col top-[45px] bg-white p-2 absolute border rounded-lg" >
                    <div className="flex flex-row justify-between border-b mb-2" >
                        <h3>Add</h3>
                        <div onClick={() => setOpen(false)}>
                            x
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label>{label}</label>
                        <input ref={ref} type="text" value={value} />
                    </div>
                    <div className="w-[150px]">
                        <button onClick={() => (addToList)}>Save</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};