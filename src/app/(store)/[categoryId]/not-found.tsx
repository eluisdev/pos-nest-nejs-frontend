import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center text-white w-dvw h-dvh'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/1" className='text-blue-500'>Return</Link>
        </div>
    )
}