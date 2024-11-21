"use dom"

import { useRef, useState } from "react";
import { IconSymbol } from "./IconSymbol";

interface DropDownInputProps {
    label: string;
    value: string;
}


export const DropDownInputComponent = ({ label,  value }: DropDownInputProps) => {
    const [open, setOpen] = useState(false);
    const [listVal, setListVal] = useState<string[]>([]);
    const addToList = () => {
        if (ref.current){
            setListVal([...listVal, ref.current.value]);

        }
    }
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "row", width: '150px' }}>
                <button onClick={() => setOpen(!open)} >
                    + Add
                </button>
            </div>
            {open && (
                <div style={{ display: "flex", flexDirection: "column", top: "-50px", backgroundColor: 'white' }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <h3>Add</h3>
                        <div onClick={() => setOpen(false)}>
                            <IconSymbol name="xmark" color="grey" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", height: '100px' }}>
                        <label>{label}</label>
                        <input ref={ref} type="text" value={value} />
                    </div>
                    <button onClick={() => (addToList)}>Add</button>
                </div>
                )
            }
        </div>
    );
};