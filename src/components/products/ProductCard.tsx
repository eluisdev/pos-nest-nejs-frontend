import { Product } from "@/schemas";
import { formatCurrency, getImagePath, isAvailable } from "@/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div
            className='shadow relative border border-gray-500 max-w-80 bg-black bg-opacity-50 rounded-2xl overflow-hidden mx-auto'
        >
            <div className={`${!isAvailable(product.inventory) && 'opacity-40'}`}>
                <Image
                    src={getImagePath(product.image)}
                    alt={`Imagen de producto: ${product.name}`}
                    width={350}
                    height={400}
                    priority
                />
                <div className="p-3 space-y-2 flex flex-col text-sm">
                    <h3 className="text-lg font-bold text-gray-200">{product.name}</h3>
                    <section className="flex justify-between">
                        <p className="bg-cyan-600 px-2 rounded-lg">Disponibles: {''}
                            {isAvailable(product.inventory) ? (
                                <span className="font-bold">{product.inventory}</span>
                            ) : <span className="bg-red-600 rounded-lg px-3 py-1 text-white text-center text-sm uppercase">Agotado</span>}
                        </p>
                        <p className="font-extrabold text-yellow-300">{formatCurrency(product.price)}</p>
                    </section>
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