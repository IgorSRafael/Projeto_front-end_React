import style from "./HeaderItemList.module.css"

type Props = {
    totalItems: number
}

export default function HeaderItemList({totalItems}: Props) {
    return (
        <>
            <div className={style.headerList}>
                <h1>Carrinho de compras</h1>

                <p className={style.infoCountList}>
                    Você tem {totalItems} itens
                </p>
            </div>
        </>
    );
}