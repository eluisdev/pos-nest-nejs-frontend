import { CategoriesResponseSchema } from "@/schemas"
import Logo from "./Logo"
import Link from "next/link"
import CartButton from "../products/CartButton"
import CloseButton from "../auth/CloseButton"
import { getUser } from "@/utils/authUser"

async function getCategories() {
    const url = `${process.env.API_URL}/categories`
    const req = await fetch(url)
    const json = await req.json()
    const categories = CategoriesResponseSchema.parse(json)
    return categories
}
export default async function MainNav() {
    const categories = await getCategories()
    const user = await getUser()
    return (
        <header className="px-10 py-4 bg-black bg-opacity-50 flex flex-col md:flex-row justify-between">
            <div className="flex justify-center">
                <Logo />
            </div>

            <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">
                {categories.map(category => (
                    <Link
                        key={category.id}
                        href={`/${category.id}`}
                        className="text-white hover:text-blue-400 font-bold p-2"
                    >{category.name}
                    </Link>
                ))}
                <CartButton />
                {user?.rol === "admin" && <Link
                    href={'/admin/sales'}
                    className="rounded bg-green-400 font-bold py-2 px-2"
                >Admin</Link>}
                <CloseButton />
            </nav>
        </header>
    )
}