// components/BookCard/BookCardRating.tsx
import { StarRating } from './shared/StarRating';

interface BookCardRatingProps {
    rating: number;
    stock: number;
}

export const BookCardRating = ({ rating, stock }: BookCardRatingProps) => {
    return (
        <div className="flex flex-col items-end gap-1">
            <StarRating rating={rating} />
            <p className="text-xs text-muted-foreground">{stock} in stock</p>
        </div>
    );
};