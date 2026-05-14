import  style  from "./PurchaseModal.module.css"

import { products } from "../data/products"
import HeaderItemList from "./HeaderItemList";
import ListItems from "./ListItems";

import { useState } from "react";

export default function PurchaseModal() {

    // Mudança de estados da lista
    const [currentlistItems, setListItems] = useState(products)
    
    // Atualizar o cabeçalho de acordo com a quantidade de itens
    const totalQuantity = currentlistItems.reduce(
        (accumulator, currentItem) => 
        accumulator + currentItem.quantity,
        0
    )

    // função para incrementar a quantidade de itens
    function increaseQuantity(id: number) {
        setListItems((currentListItems) => // Fazer a troca de estados
            currentListItems.map((item) =>
                item.id === id 
                ? {...item, quantity: item.quantity + 1,}
                : item
            )
        )
    }

    // função para incrementar a quantidade de itens
    function decreaseQuantity(id: number) {
        setListItems((currentlistItems) =>
            currentlistItems.map((item) =>
                item.id == id
                ? {...item, quantity: 
                    item.quantity > 1 
                    ? item.quantity - 1 
                    : 1
                }
                : item
            )
        )
    }

    // função para remover um item da lista
    function removeItem(id: number) {
        setListItems((currentListItems) => 
            (currentListItems.filter((item) => 
                (item.id != id) 
            )) 
        )  
    }

    return(
        <div className={style.purchaseModal}>
            <section className={style.listItemsSection}>
                <HeaderItemList 
                    infoTotalQuantity={totalQuantity}
                />
                <ListItems 
                    productsList={currentlistItems}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                />
            </section>
            <div>

            </div>
        </div>
    )
}