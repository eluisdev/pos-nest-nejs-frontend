'use client'
import { useStore } from '@/store'
import ShoppingCartItem from './ShoppinCartItem'
import Amount from './Amount'
import CouponForm from './CouponForm'
import SubmitOrderForm from './SubmitOrderForm'
import { cartStore } from '@/cartStore'

export default function ShoppinCart() {
    const contents = useStore(state => state.contents)
    const total = useStore(state => state.total)
    const discount = useStore(state => state.discount)
    const isOpen = cartStore(state => state.isOpen)
    const showMenu = cartStore(state => state.showMenu)

    return (
        <>
            <div className={`${isOpen ? "sm:translate-x-0 sm:w-96 left-0" : "sm:translate-x-full sm:w-0 translate-x-0 -left-full"} sm:bg-black/70 px-4 pt-5 transition-all duration-700 ease-in-out max-sm:fixed max-sm:top-40 w-full bg-gray-950`}>
                <h2 className={`${isOpen ? "sm:opacity-100 sm:delay-500" : "sm:opacity-0"} sm:text-2xl font-bold text-yellow-100 text-center mb-4 transition-opacity duration-500 text-xl`}>Resumen de Compra</h2>
                {<button className={`${isOpen ? "opacity-100 delay-500" : "opacity-0"} text-white bg-red-700 hover:bg-red-800 rounded-full text-sm absolute top-8 right-5 w-5 transition-opacity duration-500`} onClick={showMenu}>X</button>}
                {
                    contents.length ?
                        <>
                            <ul role="list" className={`${isOpen ? "opacity-100 delay-500" : "opacity-0"} divide-gray-200 border-gray-200 text-sm font-medium text-gray-500 space-y-4 transition-opacity duration-500`}>
                                {contents.map(item => (
                                    <ShoppingCartItem key={item.productId} item={item} />
                                ))}
                            </ul>
                            <dl className={`${isOpen ? 'opacity-100 delay-500' : 'opacity-0'} space-y-2 border-gray-300 py-4 text-sm font-medium text-gray-500 transition-opacity duration-500`}>

                                {discount ? (
                                    <Amount
                                        label="Descuento"
                                        amount={discount}
                                        discount={true}
                                    />
                                ) : (
                                    null
                                )}
                                <Amount
                                    label="Total a pagar"
                                    amount={total}
                                />

                            </dl>
                            <section className={`${isOpen ? 'opacity-100 delay-500' : 'opacity-0'} transition-opacity duration-500`}>
                                <CouponForm />
                                <SubmitOrderForm />
                            </section>
                        </>
                        : <p className={`${isOpen ? "opacity-100 delay-500" : "opacity-0"} text-center text-white mt-2 text-sm transition-opacity duration-500 mb-3`}>No hay nada en el carrito</p>
                }

            </div>

        </>
    )
}
