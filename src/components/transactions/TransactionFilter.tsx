'use client'
import { getSalesByDate } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useState } from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import TransactionSummary from './TransactionSummary'
import { formatCurrency } from '@/utils'
import Loading from '../ui/Loading'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function TransactionFilter() {
    const [date, setDate] = useState<Value>(new Date())
    const formattedDate = format(date!.toString(), 'yyyy-MM-dd')
    
    const { data, isLoading } = useQuery({
        queryKey: ['sales', formattedDate],
        queryFn: () => getSalesByDate(formattedDate)
    })

    const total = data?.reduce((total, transaction) => total + +transaction.total, 0) ?? 0

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 relative items-start'>
            <div className='lg:sticky lg:top-10 mx-auto'>
                <Calendar
                    value={date}
                    onChange={setDate}
                    locale='es'
                />
            </div>

            <div>
                {isLoading && <Loading />}
                {data ? data.length ? (
                    data.map(transaction => (
                        <TransactionSummary
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))
                ) : (<p className='text-lg text-center'>No hay ventas en esta fecha</p>) : null}
                <p className='my-5 text-lg font-bold text-right'> Total del dia: {''}
                    <span className='font-normal'>{formatCurrency(total)}</span>
                </p>
            </div>
        </div>
    )
}
