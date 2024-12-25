import { Product } from "@/schemas";
import { formatCurrency, getImagePath, isAvailable } from "@/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div
            className='rounded bg-gray-900 shadow relative border border-gray-500'
        >
            <div className={`${!isAvailable(product.inventory) && 'opacity-40'}`}>
                <Image
                    src={getImagePath(product.image)}
                    alt={`Imagen de producto: ${product.name}`}
                    width={600}
                    height={500}
                    priority
                />
                <div className="p-3 space-y-2">
                    <h3 className="text-xl font-bold text-gray-200">{product.name}</h3>
                    <p className="text-gray-300">Disponibles:
                        {isAvailable(product.inventory) ? (
                            product.inventory
                        ) : <span className="bg-red-600 rounded-lg px-3 py-1 text-white text-center text-sm uppercase">Agotado</span>}
                    </p>
                    <p className="text-2xl font-extrabold text-yellow-300">{formatCurrency(product.price)}</p>
                </div>
            </div>
            {
                isAvailable(product.inventory) ? (
                    <AddProductButton
                        product={product}
                    />
                ) : (
                    <p className="absolute top-1/2  transform -traslate-x-1/2 -traslate-y-1/2 bg-white opacity-60 w-full text-center py-5 text-2xl uppercase font-black">Agotado</p>
                )
            }

        </div>
    )
}