import style from "./CartItemList.module.css"
import CartItem from "./CartItem"
import type { Product } from "../types/Product"

type Props = {
  cartItems: Product[]
  setCartItems: React.Dispatch<
    React.SetStateAction<Product[]>
  >
}

export default function CartItemList({cartItems, setCartItems}: Props) {
  
  function removeItem(id: number) {
    setCartItems((prevItems) =>
      prevItems.filter(
        (items) => items.id !== id
      )
    )
  }

  function increaseQuantity(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  function decreaseQuantity(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    )
  }
  
  return ( 
    <div className={style.bodyList}>
      {cartItems.map((item) => (
        <div 
          key={item.id} 
          className={style.itemInfo}
        >
          <CartItem 
            {...item}
            onRemove={() => removeItem(item.id)}
            onIncrease={() => increaseQuantity(item.id)}
            onDecrease={() => decreaseQuantity(item.id)}
          />
        </div>
      ))}
    </div>
  )
}