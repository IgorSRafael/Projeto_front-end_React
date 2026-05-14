import style from "./userControlItem.module.css"

import { ChevronUp, ChevronDown } from "lucide-react"
import { Trash2 } from "lucide-react"

type Props = {
    quantityProduct : number,
    priceProduct: number,
    onIncrease: () => void,
    onDecrease: () => void,
    onRemove: () => void
}

export default function UserControlItem({
    quantityProduct,
    priceProduct,
    onIncrease,
    onDecrease,
    onRemove
}: Props) {
    
    const subTotalPrice = (quantityProduct * priceProduct)
    
    return (
        <div className={style.controlItemSection}>
            <div className={style.itemControl}>
                <span>{quantityProduct}</span>
                
                <div className={style.buttonQuantity}>
                    <button onClick={onIncrease}>
                        <ChevronUp size={16}/>
                    </button>
                    
                    <button onClick={onDecrease}>   
                        <ChevronDown size={16}/>
                    </button>
                </div>
            </div>
            
            <div className={style.subtotalControl}>
                <span>{subTotalPrice.toLocaleString(
                    'pt-BR', {style: 'currency', currency: 'BRL'})}
                </span>
                <button onClick={onRemove}>
                    <Trash2 size={18}/>
                </button>
            </div>
        </div>
    )
}