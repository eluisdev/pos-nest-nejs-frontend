
import ShoppinCart from "@/components/cart/ShoppinCart"
import ProductCard from "@/components/products/ProductCard"
import { CategoryWithProductsResponseSchema } from "@/schemas"

import { redirect } from "next/navigation"

type Params = Promise<{ categoryId: string }>

async function getProducts(categoryId: string) {
    const url = `${process.env.API_URL}/categories/${categoryId}?products=true`
    console.log(url);
    console.log("Peticion antes de URL");
    const req = await fetch(url, {
        next: {
            tags: ['product-by-category']
        }
    })
    const json = await req.json()
    if (!req.ok) {
        redirect('/1')
    }
    const products = CategoryWithProductsResponseSchema.parse(json)
    return products
}

export default async function StorePage({ params }: { params: Params }) {

    const { categoryId } = await params

    const category = await getProducts(categoryId)

    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {
                    category.products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
            <ShoppinCart />
        </>
    )
}
