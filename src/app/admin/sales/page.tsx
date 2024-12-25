import { getSalesByDate } from "@/api";
import TransactionFilter from "@/components/transactions/TransactionFilter";
import Heading from "@/components/ui/Heading";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { format } from "date-fns";
export default async function SalesPage() {
  
  const queryClient = new QueryClient()
  const today = new Date()
  const formmatedDate = format(today, 'yyyy-MM-dd')
  await queryClient.prefetchQuery({
    queryKey: ['sales', formmatedDate],
    queryFn: () => getSalesByDate(formmatedDate)
  })
  return (
    <>
      <Heading>Ventas</Heading>
      <p className="text-lg">En esta seccion veras las ventas, utiliza el calendario para filtrar por fecha.</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TransactionFilter />
      </HydrationBoundary>
    </>
  )
}
