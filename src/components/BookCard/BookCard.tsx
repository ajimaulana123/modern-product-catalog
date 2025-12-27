// components/BookCard/BookCard.tsx
'use client';

import type { Book } from '@/lib/types/book';
import { Card } from '@/components/ui/card';
import { BookCardImage } from './BookCardImage';
import { BookCardContent } from './BookCardContent';
import { BookCardPricing } from './BookCardPricing';
import { BookCardRating } from './BookCardRating';

interface BookCardProps {
    book: Book;
    onBookClick: (book: Book) => void;
}

export const BookCard = ({ book, onBookClick }: BookCardProps) => {
    const discountedPrice = book.price * (1 - book.discountPercentage / 100);

    const handleClick = () => {
        onBookClick(book);
    };

    return (
        <div
            onClick={handleClick}
            className="group block cursor-pointer"
        >
            <Card className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 animate-fade-in">
                <BookCardImage
                    thumbnail={book.thumbnail}
                    title={book.title}
                    discountPercentage={book.discountPercentage}
                    category={book.category}
                />

                <BookCardContent title={book.title}>
                    <div className="mt-4 flex flex-wrap items-end justify-between gap-2">
                        <BookCardPricing
                            price={book.price}
                            discountPercentage={book.discountPercentage}
                            discountedPrice={discountedPrice}
                        />
                        <BookCardRating
                            rating={book.rating}
                            stock={book.stock}
                        />
                    </div>
                </BookCardContent>
            </Card>
        </div>
    );
};