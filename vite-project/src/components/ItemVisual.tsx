import type { attributes } from "../type/attributes"
import style from "./itemVisual.module.css"

// Esse componente representa o item e suas informações
export default function ItemVisual(props: attributes) {
    const image = props.image
    ? <img src={props.image} alt={props.name} className={style.productImage}/>
    : <p>Sem Imagem</p>

    return(
        <article className={style.itemSection}>
            {image}
            <div className={style.itemInfo}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <span>{props.price.toLocaleString(
                'pt-BR', {style: 'currency', currency: 'BRL'})}
                </span>
            </div>
        </article>
    )
}