import HeaderItemList from "./HeaderItemList";
import CartItemList from "./CartItemList";
import  style  from "./CartLayout.module.css"
import { useState } from "react"
import { products } from "../data/AllProducts"

export default function CartLayout() {
    const [cartItems, setCartItems] = useState(products)
    const totalQuantity = cartItems.reduce(
        (acc, item) => acc + item.quantity, 0
    )
    return (
        <div className={style.conteiner}>
            <div className={style.list}>
                <HeaderItemList totalItems={totalQuantity}/>
                <div className={style.divider}></div>
                <CartItemList 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </div> 
            <div className={style.resume}>
            </div>
        </div>
    )
}