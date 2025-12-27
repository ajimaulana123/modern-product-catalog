// components/BookDetail/BookDetailStockBrand.tsx
import { Separator } from '@/components/ui/separator';

interface BookDetailStockBrandProps {
    stock: number;
    brand: string;
}

export const BookDetailStockBrand = ({ stock, brand }: BookDetailStockBrandProps) => {
    return (
        <div className="flex items-center gap-4 text-sm text-foreground mb-6">
            <span>
                Stock: <span className="font-semibold">{stock}</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span>
                Brand: <span className="font-semibold">{brand}</span>
            </span>
        </div>
    );
};