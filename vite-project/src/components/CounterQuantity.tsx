import style from "./CounterQuantity.module.css"
import { ChevronUp, ChevronDown } from "lucide-react";

type Props = {
    quantity: number,
    onIncrease: () => void,
    onDecrease: () => void
}

export default function CounterQuantity({quantity, onIncrease, onDecrease}: Props) {
    return(
        <>
            <span className={style.quantityProduct}>
                {quantity}
            </span>
            <div className={style.quantityButton}>
                <button onClick={onIncrease}>
                    <ChevronUp size={16}/>
                </button>
                <button onClick={onDecrease}>
                    <ChevronDown size={16}/>
                </button>
            </div>
        </>
    )
}