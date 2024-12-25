import { submitOrder } from "@/actions/submit-order-action"
import { useStore } from "@/store"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"


export default function SubmitOrderForm() {

    const total = useStore(state => state.total)
    const cuopon = useStore(state => state.coupon)
    const contents = useStore(state => state.contents)
    const userId = useStore(state => state.user)
    const clearOrder = useStore(state => state.clearOrder)

    const order = {
        total,
        coupon: cuopon.name,
        contents,
        userId: userId.userId
    }

    const submitOrderWithData = submitOrder.bind(null, order)
    const [state, dispatch] = useActionState(submitOrderWithData, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach((error: string) => toast.error(error))
        }

        if (state.success) {
            toast.success(state.success)
            clearOrder()
        }
    }, [state.errors, state.success, clearOrder])

    return (
        <form
            action={dispatch}
        >
            <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold p-3"
                value="Confirmar cuenta"
            />
        </form>
    )
}
