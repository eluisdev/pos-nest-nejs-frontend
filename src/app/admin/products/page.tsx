import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';
import ProductsAdmin from '@/components/products/ProductsAdmin';

type SearchParams = Promise<{ page: string }>;

export default async function ProductsPage({ searchParams }: { searchParams: SearchParams }) {
  const { page } = await searchParams;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductsAdmin page={page} />
      </Suspense>
    </>
  );
}