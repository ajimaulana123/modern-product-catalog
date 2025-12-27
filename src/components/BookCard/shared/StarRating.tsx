// components/BookCard/shared/StarRating.tsx
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
    rating: number;
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
};

export const StarRating = ({
    rating,
    className,
    size = 'sm',
}: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={cn('flex items-center gap-0.5', className)}>
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')}
                />
            ))}
            {hasHalfStar && (
                <StarHalf
                    className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')}
                />
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    className={cn(sizeClasses[size], 'fill-muted text-muted-foreground/30')}
                />
            ))}
        </div>
    );
};