import { formatCurrency } from "@/utils"


type AmountProps = {
    label: string
    amount: number
    discount?: boolean
}
export default function Amount({ label, amount, discount }: AmountProps) {
    // RevisarCodigo dt,dd
    return (
        <div className={`${discount && 'bg-green-400 text-green-900'} flex justify-between p-1`}>
            <dt className="font-bold text-red-200">
                {label}
            </dt>
            <dd className="text-white">
                {discount && '-'} {formatCurrency(amount)}
            </dd>
        </div>
    )
}
