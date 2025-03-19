import { Suspense } from 'react';
import ShoppinCart from "@/components/cart/ShoppinCart";
import Loading from '@/components/ui/Loading';
import ProductList from '@/components/cart/ProductList';

type Params = Promise<{ categoryId: string }>;

export default async function StorePage({ params }: { params: Params }) {
    const { categoryId } = await params;
    return (
        <div className="flex pt-16">
            <Suspense fallback={<Loading allPage />}>
                <ProductList categoryId={categoryId} />
            </Suspense>
            <ShoppinCart />
        </div>
    );
}