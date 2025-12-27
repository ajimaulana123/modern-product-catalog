// components/BookDetail/BookDetailPricing.tsx
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from './shared/formatCurrency';

interface BookDetailPricingProps {
    price: number;
    discountPercentage: number;
}

export const BookDetailPricing = ({
    price,
    discountPercentage,
}: BookDetailPricingProps) => {
    const discountedPrice = price * (1 - discountPercentage / 100);

    return (
        <>
            <div>
                <p className="text-4xl font-bold text-primary mb-1">
                    {formatCurrency(discountedPrice)}
                </p>
                {discountPercentage > 0 && (
                    <div className="flex items-center gap-2 text-lg">
                        <p className="text-muted-foreground line-through">
                            {formatCurrency(price)}
                        </p>
                        <Badge variant="destructive">
                            {Math.round(discountPercentage)}% OFF
                        </Badge>
                    </div>
                )}
            </div>
            <Separator className="my-6" />
        </>
    );
};