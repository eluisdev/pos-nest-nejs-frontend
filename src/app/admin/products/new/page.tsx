import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
export const dynamic = 'force-dynamic'
export default function NewProductPage() {
    return (
        <>
            <Link
                href={'/admin/products?page=1'}
                className="text-white text-sm relative bg-blue-950/90 hover:bg-blue-900 p-2 rounded-lg"
            >Volver</Link>
            <Heading>Nuevo producto</Heading>
            <AddProductForm>
                <ProductForm />
            </AddProductForm>
        </>
    )
}