"use dom"

import { useRef, useState } from "react";
import { IconSymbol } from "./ui/IconSymbol";

interface DropDownInputProps {
    label: string;
    value: string;
}


export const DateInput = ({ label,  value }: DropDownInputProps) => {

    return (
            <div 
             className="flex flex-row w-fit gap-2">
                <div>
                <p>Day</p>
                <input type="number" value={value.split("-")[2]} style={{width: "5rem"}} />
                </div>
                <div>
                <p>Month</p>
                <input type="text" value={value.split("-")[1]} maxLength={3} style={{width: "5rem", textAlign: "center"}} />
                </div>
                <div>
                <p>Year</p>
                <input type="number" value={value.split("-")[0]} style={{width: "5rem"}} />
                </div>
            </div>
            
    );
};