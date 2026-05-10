import HeaderItemList from "./HeaderItemList";
import CartItemList from "./CartItemList";
import  style  from "./CartLayout.module.css"

export default function CartLayout() {
    return (
        <div className={style.conteiner}>
            <div>
                <HeaderItemList/>
                <div className={style.divider}></div>
                <CartItemList />
            </div> 
        </div>
    )
}