import HeaderItemList from "./HeaderItemList";
import CartItemList from "./CartItemList";
import  style  from "./CartLayout.module.css"
import { useState } from "react"
import { items } from "./CartItemList"

export default function CartLayout() {
    const [cartItems, setCartItems] = useState(items)
    return (
        <div className={style.conteiner}>
            <div className={style.list}>
                <HeaderItemList totalItems={cartItems.length}/>
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