import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/1"}>
            <h1 className="text-3xl font-extrabold text-blue-500 max-sm:hidden">POS.
                <span className="text-white text-xl ">n</span>
                <span className="text-red-300 text-xl ">.n</span>
            </h1>
        </Link>
    )
}