import React from 'react'

export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className='text-2xl my-5 font-bold'>{children}</h1>
    )
}
