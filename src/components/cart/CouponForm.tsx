import { FormEvent } from "react"
import { useStore } from "@/store"

export default function CouponForm() {
    const applyCoupon = useStore(state => state.applyCoupon)
    const coupon = useStore(state => state.coupon)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const couponName = formData.get('coupon_name')?.toString()
        if (!Boolean(couponName!.length)) return
        await applyCoupon(couponName!)
    }
    return (
        <>
            <p className="py-4 font-bold border-t border-gray-300 text-yellow-500 text-sm">Canjear Cupón</p>
            <form
                className="flex"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    className="p-2 bg-gray-200 border-gray-300 w-full h-8"
                    placeholder="Ingresa un cupón"
                    name="coupon_name"
                />
                <input
                    type="submit"
                    className=" px-1 bg-blue-400 font-bold hover:cursor-pointer"
                    value='Canjear'
                />
            </form>
            {
                coupon.message ? (
                    <p className="py-4 text-center text-sm font-bold">{coupon.message}</p>
                ) : null
            }
        </>
    )
}