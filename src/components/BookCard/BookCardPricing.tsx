// components/BookCard/BookCardPricing.tsx
import { formatCurrency } from './shared/formatCurrency';

interface BookCardPricingProps {
    price: number;
    discountPercentage: number;
    discountedPrice: number;
}

export const BookCardPricing = ({
    price,
    discountPercentage,
    discountedPrice,
}: BookCardPricingProps) => {
    return (
        <div className="flex flex-col items-start gap-0">
            <p className="text-xl font-bold text-primary">
                {formatCurrency(discountedPrice)}
            </p>
            {discountPercentage > 0 && (
                <p className="text-xs text-muted-foreground line-through">
                    {formatCurrency(price)}
                </p>
            )}
        </div>
    );
};