import { items } from "./CartItemList"
import style from "./HeaderItemList.module.css"

export default function HeaderItemList() {
    return (
        <>
            <div className={style.headerList}>
                <h1>Carrinho de compras</h1>

                <p className={style.infoCountList}>
                    Você tem {items.length} itens
                </p>
            </div>
        </>
    );
}