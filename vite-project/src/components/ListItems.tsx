import type { attributes } from "../type/attributes"
import ItemVisual from "./ItemVisual"
import UserControlItem from "./UserControlItem"

import style from "./ListItems.module.css"

type Props = {
  productsList: attributes[],
  onIncrease: (id: number) => void,
  onDecrease: (id: number) => void,
  onRemove: (id: number) => void
}

export default function ListItems({
  productsList,
  onIncrease,
  onDecrease,
  onRemove
}: Props) {

  return (
    <ul className={style.bodyList}>
      {productsList.map((product) => (
        <li
          key={product.id}
          className={style.fieldList}
        >
          <ItemVisual {...product}/>
          <UserControlItem
            quantityProduct={product.quantity}
            priceProduct={product.price}
            onIncrease={ () => onIncrease(product.id)}
            onDecrease={ () => onDecrease(product.id)}
            onRemove={ () => onRemove(product.id)}
          />
        </li>
      ))}
    </ul>
  )
}