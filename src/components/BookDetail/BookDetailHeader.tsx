// components/BookDetail/BookDetailHeader.tsx
import { Badge } from '@/components/ui/badge';
import { StarRating } from './shared/StarRating';

interface BookDetailHeaderProps {
    category: string;
    title: string;
    rating: number;
    reviewsCount: number;
}

export const BookDetailHeader = ({
    category,
    title,
    rating,
    reviewsCount,
}: BookDetailHeaderProps) => {
    return (
        <>
            <Badge variant="secondary" className="w-fit mb-2">
                {category}
            </Badge>
            <h1 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
                <StarRating rating={rating} />
                <span className="text-muted-foreground text-sm">
                    ({reviewsCount} reviews)
                </span>
            </div>
        </>
    );
};