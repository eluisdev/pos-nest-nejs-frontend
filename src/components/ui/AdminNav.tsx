import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import CloseButton from '../auth/CloseButton'
import { getUser } from '@/utils/authUser'

export default async function AdminNav() {
    const user = await getUser()
    return (
        <header className="px-10 py-5 bg-gray-950 flex md:flex-row flex-col justify-between">
            <div className="flex gap-5 text-white">
                <Logo />
            </div>

            <div className="flex md:flex-row flex-col gap-2 items-center">
                <Link
                    href={'/admin/products'}
                    className="rounded text-white hover:text-blue-300 font-bold p-2"
                >Productos</Link>

                <Link
                    href={'/admin/sales'}
                    className="rounded text-white hover:text-blue-300 font-bold p-2"
                >Ventas</Link>
                {
                    user?.rol === "admin" && <Link
                        href={'/1'}
                        className="rounded bg-green-400 font-bold py-2 px-2"
                    >Tienda</Link>
                }
                <CloseButton />
            </div>
        </header>
    )
}