'use client';

import Image from 'next/image';
import type { Book } from '@/lib/types/book';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="h-5 w-5 fill-muted text-muted-foreground/30"
        />
      ))}
    </div>
  );
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export function BookDetail({ book }: { book: Book }) {
  const discountedPrice = book.price * (1 - book.discountPercentage / 100);

  return (
    <div className="p-2 sm:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                src={book.thumbnail}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                />
            </div>
          </div>
          <div className="flex flex-col">
            <Badge variant="secondary" className="w-fit mb-2">{book.category}</Badge>
            <h1 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {book.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
                <StarRating rating={book.rating} />
                <span className="text-muted-foreground text-sm">({book.reviews?.length || 0} reviews)</span>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-1">
                {formatCurrency(discountedPrice)}
              </p>
              {book.discountPercentage > 0 && (
                 <div className="flex items-center gap-2 text-lg">
                    <p className="text-muted-foreground line-through">
                    {formatCurrency(book.price)}
                    </p>
                    <Badge variant="destructive">{book.discountPercentage}% OFF</Badge>
                </div>
              )}
            </div>
            
            <Separator className="my-6"/>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {book.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-foreground">
                <span>Stock: <span className="font-semibold">{book.stock}</span></span>
                <Separator orientation="vertical" className="h-4"/>
                <span>Brand: <span className="font-semibold">{book.brand}</span></span>
            </div>

          </div>
        </div>
    </div>
  );
}
