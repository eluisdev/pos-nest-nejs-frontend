'use client'

import { addProduct } from "@/actions/add-product-action"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function AddProductForm({ children }: { children: React.ReactNode }) {

    const router = useRouter()
    const [state, dispatch] = useActionState(addProduct, {
        errors: [],
        success: ''
    })

    useEffect(() => {

        if (state.errors) {
            state.errors.forEach(error => toast.error(error))
        }
        if (state.success) {
            toast.success(state.success)
            router.push('/admin/products?page=1')
        }
    }, [state.errors, state.success])


    return (
        <form
            className="space-y-5"
            action={dispatch}
        >
            {children}
            <input
                type='submit'
                className='text-white text-sm relative w-full bg-blue-950/90 hover:bg-blue-900 p-2 rounded-lg'
                value='Agregar producto'
            />
        </form>
    )
}
