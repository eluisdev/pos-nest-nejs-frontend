import { CategoryWithProductsResponseSchema } from "@/schemas";
import { notFound } from "next/navigation";
import ProductCard from "../products/ProductCard";

async function getProducts(categoryId: string) {
    try {
        const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
        const req = await fetch(url, {
            next: {
                tags: ['product-by-category'],
                revalidate: 7200
            }
        });
        const json = await req.json();
        if (!req.ok) {
            notFound()
        }
        const products = CategoryWithProductsResponseSchema.parse(json);
        return products;
    } catch (error) {
        console.error(error);
        notFound()
    }
}
export default async function ProductList({ categoryId }: { categoryId: string }) {
    const category = await getProducts(categoryId);
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto mt-5 sm:gap-5 px-5 ">
            {category.products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
