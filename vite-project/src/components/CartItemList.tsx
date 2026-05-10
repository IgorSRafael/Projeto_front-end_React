import style from "./CartItemList.module.css"
import type { CartItemType } from "../types/CartItemType"
import CartItem from "./CartItem"
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

/* Função trasformadora para retornar apenas os itens com imagens
return items
    .filter((item: CartItemType) => item.image!=='')  
    .map((item: CartItemType) => <CartItem {...item}/>)
*/

// Componente para ser retornado, a exibição dessa lista
export default function CartItemList() {
  return ( 
    <div className={style.bodyList}>
      {items.map((item: CartItemType) => (
        <div className={style.itemWrapper}>
          <CartItem {...item}/>
        </div>))
      }
    </div>
  )
}