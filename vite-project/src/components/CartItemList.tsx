import style from "./CartItemList.module.css"
import type { CartItemType } from "../types/CartItemType"
import CartItem from "./CartItem"
import pizzaImg from "../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg"

//lista de produtos no carrinho
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
    image: ''
  },
  {
    name: 'Espaguete',
    description: 'Apetitoso macarrão. Basta seguir a receita.',
    price: 59.90,
    image: ''
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
    <div className={style.listBody}>
      {items.map((item: CartItemType) => (
        <div className={style.itemWrapper}>
          <CartItem {...item}/>
        </div>))
      }
    </div>
  )
}