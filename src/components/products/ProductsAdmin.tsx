import { ProductsResponseSchema } from "@/schemas";
import { isValidPage } from "@/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import Heading from "../ui/Heading";
import ProductsTable from "./ProductsTable";
import Pagination from "../ui/Pagination";

async function getProducts(take: number, skip: number) {
    const url = `${process.env.API_URL}/products?take=${take}&skip=${skip}`;
    const req = await fetch(url);
    const json = await req.json();
    const data = ProductsResponseSchema.parse(json);
    return {
        products: data.products,
        total: data.total,
    };
}

export default async function ProductsAdmin({ page }: { page: string }) {
    if (!isValidPage(+page)) redirect(`/admin/products?page=1`);
    const productPerPage = 10;
    const skip = (+page - 1) * productPerPage;
    const { products, total } = await getProducts(productPerPage, skip);
    const totalPages = Math.ceil(total / productPerPage);
    if (+page > totalPages) redirect('/admin/products?page=1');
    return (
        <>
            <Link
                href={'/admin/products/new'}
                className="text-white text-sm relative bg-blue-950/90 hover:bg-blue-900 p-2 rounded-lg"
            >
                Nuevo producto
            </Link>
            <Heading>Administrar productos</Heading>
            <ProductsTable products={products} />
            <Pagination
                page={+page}
                totalPages={totalPages}
                baseUrl="/admin/products"
            />
        </>
    )
}