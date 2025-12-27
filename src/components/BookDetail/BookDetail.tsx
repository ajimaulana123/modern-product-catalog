// components/BookDetail/BookDetail.tsx
'use client';

import type { Book } from '@/lib/types/book';
import { BookDetailCarousel } from './BookDetailCarousel';
import { BookDetailHeader } from './BookDetailHeader';
import { BookDetailPricing } from './BookDetailPricing';
import { BookDetailStockBrand } from './BookDetailStockBrand';
import { BookDetailTabs } from './BookDetailTabs';

export function BookDetail({ book }: { book: Book }) {
    return (
        <div className="p-2 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Images */}
                <div className="w-full">
                    <BookDetailCarousel images={book.images} title={book.title} />
                </div>

                {/* Right Column - Info */}
                <div className="flex flex-col">
                    <BookDetailHeader
                        category={book.category}
                        title={book.title}
                        rating={book.rating}
                        reviewsCount={book.reviews?.length || 0}
                    />

                    <BookDetailPricing
                        price={book.price}
                        discountPercentage={book.discountPercentage}
                    />

                    <BookDetailStockBrand
                        stock={book.stock}
                        brand={book.brand}
                    />

                    <BookDetailTabs book={book} />
                </div>
            </div>
        </div>
    );
}