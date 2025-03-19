import { submitOrder } from "@/actions/submit-order-action"
import { useStore } from "@/store"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import Loading from "../ui/Loading"

export default function SubmitOrderForm() {

    const total = useStore(state => state.total)
    const cuopon = useStore(state => state.coupon)
    const contents = useStore(state => state.contents)
    const clearOrder = useStore(state => state.clearOrder)

    const order = {
        total,
        coupon: cuopon.name,
        contents,
    }

    const submitOrderWithData = submitOrder.bind(null, order)
    const [state, dispatch, isPending] = useActionState(submitOrderWithData, {
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
            className="flex justify-center"
        >
            <section className="flex gap-2">
                <input
                    type="submit"
                    className="my-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold p-1 rounded-lg"
                    disabled={isPending}
                    value="Confirmar cuenta"
                />
                {isPending && <Loading />}
            </section>

        </form>
    )
}
