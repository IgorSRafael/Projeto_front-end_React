import type { CartItemType } from "../types/CartItemType"
import style from "./cartItem.module.css"

// Componente
export default function CartItem(props: CartItemType) {
  const image = props.image ? <img src={props.image} alt={props.name} className={style.productImage}/> : <p>Sem imagem</p>

  return (
    <div className="cart-item">
      {image}
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>R$ {props.price}</span>
      </div>
    </div>
  )
}