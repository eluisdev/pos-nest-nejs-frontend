"use client"

import { signOut } from "@/actions/sign-out-action"
import { useStore } from "@/store"
import { startTransition } from "react"

export default function CloseButton() {

    const clearUser = useStore(state => state.clearUser)
    const handleClick = () => {
        startTransition(() => {
            signOut()
        })
        clearUser()
    }
    return (
        <>
            <button className="relative text-white bg-red-500 hover:bg-red-600 font-bold p-1 rounded-lg" aria-label="Carrito de compras" title="Ver carrito" onClick={() => handleClick()} >
                Cerrar Sesion
            </button>
        </>
    )


}