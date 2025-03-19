import { CategoriesResponseSchema } from "@/schemas"
import Logo from "./Logo"
import Link from "next/link"
import CartButton from "../products/CartButton"
import CloseButton from "../auth/CloseButton"
import React from "react"
import TransparentHeader from "./TransparentHeader"
import MobileMenu from "./MobileMenu"

async function getCategories() {
    const url = `${process.env.API_URL}/categories`;
    const req = await fetch(url, { next: { revalidate: 3600 } });
    const json = await req.json();
    const categories = CategoriesResponseSchema.parse(json);
    return categories;
}

async function MainNav() {
    const categories = await getCategories()
    return (
        <TransparentHeader>
            <section className="flex justify-between">
                <MobileMenu categories={categories} />
                <CloseButton />
            </section>
            <div className="flex justify-center max-sm:hidden">
                <Logo />
                <nav className="flex max-sm:flex-col font-medium sm:rounded-full justify-center items-center max-sm:w-full mx-5">
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            href={`/${category.id}`}
                            className={`text-white hover:text-blue-400 p-2 font-light`}
                        >{category.name}
                        </Link>
                    ))}
                    <Link
                        href={'/admin/sales'}
                        className="text-white hover:text-blue-400 p-2 font-light"
                    >Admin</Link>
                    <CartButton />
                </nav>
            </div>

        </TransparentHeader>
    )
}

export default React.memo(MainNav)