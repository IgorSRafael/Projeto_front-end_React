import style from "./HeaderItemList.module.css"

type Props = {
    infoTotalQuantity: number
}

export default function HeaderItemList({
    infoTotalQuantity
}: Props){
    return (
        <header className={style.headerList}>
            <h1>Carrinho de compras</h1>
            <p>Você tem {infoTotalQuantity} itens</p>
        </header>

    );
}