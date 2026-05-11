import style from "./CartItemList.module.css"
import CartItem from "./CartItem"
import React, { useState } from "react"
import pizzaImg from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import barbecueImg from "../assets/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import pastaImg from "../assets/emanuel-ekstrom-KJOUnsGXq58-unsplash.jpg"
import type { CartItemType } from "../types/CartItemType"

export const items = [
  {
    id: 1,
    name: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    image: pizzaImg
  },
  {
    id: 2,
    name: 'Churrasquinho',
    description: 'Delicioso espetinho à moda da (sua) casa.',
    price: 29.90,
    image: barbecueImg
  },
  {
    id: 3,
    name: 'Espaguete',
    description: 'Apetitoso macarrão. Basta seguir a receita.',
    price: 59.90,
    image: pastaImg
  }
]

type Props = {
  cartItems: CartItemType[]
  setCartItems: React.Dispatch<
    React.SetStateAction<CartItemType[]>
  >
}

export default function CartItemList({cartItems, setCartItems}: Props) {
  
  function removeItem(id: number) {
    const updateList = cartItems
      .filter( item => item.id !== id)
    setCartItems(updateList)
  }
  
  return ( 
    <div className={style.bodyList}>
      {cartItems.map((item) => (
        <div key={item.id} className={style.itemInfo}>
          <CartItem 
            {...item}
            onRemove={() => removeItem(item.id)}
          />
        </div>
      ))}
    </div>
  )
}