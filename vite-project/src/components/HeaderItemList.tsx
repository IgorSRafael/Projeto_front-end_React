import { items } from "./CartItemList"
import style from "./HeaderItemList.module.css"

export default function HeaderItemList() {
    return (
        <>
            <div className={style.intro}>
                <h1>Carrinho de compras</h1>

                <p className={style.counter}>
                    Você tem {items.length} itens
                </p>
            </div>
        </>
    );
}