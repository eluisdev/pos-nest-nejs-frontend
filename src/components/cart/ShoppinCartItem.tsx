import { CardItem } from "@/schemas";
import { formatCurrency, getImagePath } from "@/utils";
import Image from "next/image";
import { useStore } from "@/store";

export default function ShoppingCartItem({ item }: { item: CardItem }) {
    const updateQuantity = useStore(state => state.updateQuantity)
    const removeFromCart = useStore(state => state.removeFromCart)

    return (
        <li className="flex items-center pt-2 relative gap-2 flex-1 p-2 bg-gray-950 bg-opacity-10">
            <Image
                src={getImagePath(item.image)}
                alt={`Imagen del producto: ${item.name}`}
                width={50}
                height={50}
                priority
                className="rounded-lg max-sm:hidden"
            />
            <div className="w-full">
                <div className="flex justify-between gap-3">
                    <h3 className="text-gray-50">{item.name}</h3>
                    <select
                        className="text-center rounded-lg bg-gray-100 w-16"
                        value={item.quantity}
                        onChange={(e) => { updateQuantity(item.productId, +e.target.value) }}
                    >
                        {Array.from({ length: item.inventory }, (_, index) => index + 1).map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-blue-400 font-semibold">{formatCurrency(item.price)}</p>
                    <button
                        type="button"
                        onClick={() => removeFromCart(item.productId)}
                        className="bg-red-500 hover:bg-red-600 w-16 rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" className="w-5 h-5 text-center mx-auto text-white">
                            <path className="fill-current" d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}