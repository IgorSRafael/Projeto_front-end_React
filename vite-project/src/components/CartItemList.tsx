import style from "./CartItemList.module.css"
import type { CartItemType } from "../types/CartItemType"
import CartItem from "./CartItem"
import { useState } from "react"
import pizzaImg from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import barbecueImg from "../assets/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import pastaImg from "../assets/emanuel-ekstrom-KJOUnsGXq58-unsplash.jpg"

export const items = [
  {
    name: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    image: pizzaImg
  },
  {
    name: 'Churrasquinho',
    description: 'Delicioso espetinho à moda da (sua) casa.',
    price: 29.90,
    image: barbecueImg
  },
  {
    name: 'Espaguete',
    description: 'Apetitoso macarrão. Basta seguir a receita.',
    price: 59.90,
    image: pastaImg
  }
]

export default function CartItemList() {
  const [cartItems, setCartItems] = useState(items)
  function removeItem(itemName: string) {
    const updateList = cartItems.filter(
      item => item.name !== itemName
    )
    setCartItems(updateList)
  }
  return ( 
    <div className={style.bodyList}>
      {cartItems.map((item: CartItemType) => (
        <div key={item.name} className={style.itemInfo}>
          <CartItem {...item} onRemove={() => removeItem(item.name)}/>
        </div>))
      }
    </div>
  )
}