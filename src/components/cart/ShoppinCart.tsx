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
    const closeMenu = cartStore(state => state.closeMenu)

    return (
        <>
            {isOpen ? (
                <div className='fixed h-full top-0 right-0 bg-gray-950 z-10 p-6 w-96'>
                    <h2 className="text-3xl font-bold text-yellow-100 text-center">Resumen de Venta</h2>
                    <button className='text-white bg-red-700 hover:bg-red-800 rounded-full w-5 text-sm font-extrabold absolute top-6 right-6' onClick={closeMenu}>X</button>
                    {
                        contents.length ?
                            <>
                                <ul role='list' className='mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500'>
                                    {contents.map(item => (
                                        <ShoppingCartItem
                                            key={item.productId}
                                            item={item}
                                        />
                                    ))}
                                </ul>
                                <dl className='space-y-6 border-t border-gray-300 py-6 text-sm font-medium text-gray-500'>
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

                                <CouponForm />
                                <SubmitOrderForm />
                            </>
                            : <p className='text-center text-white mt-2'>No hay nada en el carrito</p>
                    }

                </div>
            ) : null}
        </>
    )
}
