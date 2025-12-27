"use client";

import Image from "next/image";
import type { Book } from "@/lib/types/book";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({ rating, className }: { rating: number, className?: string }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25; // A more generous half-star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-accent text-accent" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-accent text-accent" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 fill-muted text-muted-foreground/50" />
      ))}
    </div>
  );
};

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={book.thumbnail}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <Badge variant="outline" className="mb-2">{book.category}</Badge>
          <CardTitle className="font-headline text-lg leading-tight mb-2">
            {book.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3">
            {book.description}
          </CardDescription>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-foreground">
                ${(book.price * (1 - book.discountPercentage / 100)).toFixed(2)}
              </p>
              {book.discountPercentage > 0 && (
                <p className="text-sm text-muted-foreground line-through">
                  ${book.price.toFixed(2)}
                </p>
              )}
            </div>
            <StarRating rating={book.rating} className="mt-1" />
          </div>
          <p className="text-xs text-muted-foreground">{book.stock} in stock</p>
        </div>
      </CardContent>
    </Card>
  );
};
