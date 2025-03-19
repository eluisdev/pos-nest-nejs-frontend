'use client'
import { useStore } from "@/store"
import { cartStore } from "@/cartStore"

export default function CartButton() {
    const totalProducts = useStore(state => state.totalProducts)
    const showMenu = cartStore(state => state.showMenu)
    const contents = useStore(state => state.contents)
    return (
        <>
            <button className="relative" aria-label="Carrito de compras" title="Ver carrito" onClick={showMenu}>
                {
                    contents.length ? (<p className="absolute text-white bg-blue-500 rounded-full font-bold text-xs -top-1 right-0 w-3">{totalProducts}</p>) : null
                }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-blue-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </button>
        </>
    )

}
