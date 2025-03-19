'use client'

import { updateProduct } from "@/actions/update-product-action"
import { useParams, useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function EditProductForm({ children }: { children: React.ReactNode }) {

    const router = useRouter()
    const { id } = useParams<{ id: string }>()

    const uptateProductWithId = updateProduct.bind(null, +id)

    const [state, dispatch] = useActionState(uptateProductWithId, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => toast.error(error))
        }
        if (state.success) {
            router.push('/admin/products?page=1')
            // toast.success(state.success)
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
                value='Guardar cambios'
            />
        </form>
    )
}
