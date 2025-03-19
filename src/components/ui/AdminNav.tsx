import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import CloseButton from '../auth/CloseButton'
import TransparentHeader from './TransparentHeader'
import React from 'react'
import MobileMenuAdmin from './MobileMenuAdmin'

const categories = [
    { id: "admin/products", name: "Productos" },
    { id: "admin/sales", name: "Ventas" },
    { id: "1", name: "Tienda", }
]

async function AdminNav() {
    return (
        <TransparentHeader>
            <section className='flex justify-between'>
                <MobileMenuAdmin categories={categories} />
                <CloseButton />
            </section>
            <div className="max-sm:hidden flex md:flex-row flex-col gap-2 items-center">
                <Logo />
                <nav className='flex max-sm:flex-col font-medium sm:rounded-full justify-center items-center max-sm:w-full mx-5'>
                    <Link
                        href={'/admin/products?page=1'}
                        className="text-white hover:text-blue-400 p-2 font-light"
                    >Productos</Link>
                    <Link
                        href={'/admin/sales'}
                        className="text-white hover:text-blue-400 p-2 font-light"
                    >Ventas</Link>
                    <Link
                        href={'/1'}
                        className="text-white hover:text-blue-400 p-2 font-light"
                    >Tienda</Link>
                </nav>
            </div>
        </TransparentHeader>
    )
}

export default React.memo(AdminNav)