import style from "./purchaseSummary.module.css"

import ShippingCalculator from "./ShippingCalculator"

type Props = {
  itemsQuantity?: number
}

export default function PurchaseSummary({
  itemsQuantity
}: Props) {
  return (
    <aside className={style.purchaseSummary}>

      <header>
        <h2>Resumo</h2>
      </header>
      <section>
        <ShippingCalculator 
        length={10}
        height={10}
        width={10}
        weightKg={15}
        zone="area1"
        />
      </section>

    </aside>
  )
}