import type { CartItemType } from "../types/CartItemType"
import style from "./cartItem.module.css"

export default function CartItem(props: CartItemType) {
  const image = props.image 
    ? <img src={props.image} alt={props.name} className={style.productImage}/> 
    : <p>Sem imagem</p>

  return (
    <div className={style.listPrint}>
      {image}
      <div className={style.itemInfo}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.price?.toLocaleString(
          'pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
    </div>
  )
}