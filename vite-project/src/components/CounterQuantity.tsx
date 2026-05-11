import type React from "react"
import style from "./CounterQuantity.module.css"
import { ChevronUp, ChevronDown } from "lucide-react";

type Props = {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default function CounterQuantity({quantity, setQuantity}: Props) {
    function increase() {
        setQuantity(quantity + 1);
    }
    function decrease() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className={style.counterSection}>
            <span className={style.quantityProduct}>
                {quantity}
            </span>
            <div className={style.quantityButton}>
                <button onClick={increase}>
                    <ChevronUp size={16}/>
                </button>
                <button onClick={decrease}>
                    <ChevronDown size={16}/>
                </button>
            </div>
        </div>
    )
}