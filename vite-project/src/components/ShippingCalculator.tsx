import style from "./shippingCalculator.module.css"
import { RotateCcw } from "lucide-react"

// Vai receber do PurchaseModal as dimensões totais da compra
type Props = {
    length: number;
    height: number
    width: number;
    weightKg: number;
    zone: "area1" | "area2" | "area3";
};

function getDistance(destination: Props["zone"]) {
    switch(destination) {
        case "area1":
            return 1;
        case "area2":
            return 1.5;
        case "area3":
            return 2.0;
        default:
            return 1;
    }
}

export default function ShippingCalculator({
    length,
    height,
    width,
    weightKg,
    zone
}: Props) {

    // Defniir regra de custo
    const volume = (length * height * width);
    const shippingCost = (
        weightKg * 3 +
        volume * 0.01
    ) * getDistance(zone);

    return (
        <article className={style.shippingCalculator}>
            <header>
                <h3>Frete</h3>
            </header>
            <div className={style.shippingSection}>
                <div className={style.Calculate}>
                    <label htmlFor="cep">CEP</label>
                    <input
                        id="cep"
                        type="txt"
                        placeholder="00000-000"
                    />
                    <button>
                        <RotateCcw/>
                    </button>
                </div>
                <span>
                    {shippingCost.toLocaleString(
                        'pt-BR', 
                        {style: 'currency', currency: 'BRL'}
                    )}
                </span>
            </div>
            <small>Natal - RN</small>
        </article>
    )
}  