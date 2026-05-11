import type { CartItemType } from "../types/CartItemType"
import style from "./cartItem.module.css"
import { useState } from "react"
import CounterQuantity from "./CounterQuantity"

export default function CartItem(props: CartItemType) {
  const image = props.image 
  ? <img src={props.image} alt={props.name} className={style.productImage}/> 
  : <p>Sem imagem</p>

  const [quantity, setQuantity] = useState(1)
  const subTotalPrice = (props.price * quantity)

  return (
    <div className={style.itemSection}>
      <div className={style.itemUnityInfo}>
        {image}
        <div className={style.textInfo}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{props.price.toLocaleString(
            'pt-BR', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>  
      </div>
      <div className={style.quantitySection}>
        <CounterQuantity quantity={quantity} setQuantity={setQuantity}/>
        <span>
          {subTotalPrice.toLocaleString(
          'pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
    </div>
  )
}