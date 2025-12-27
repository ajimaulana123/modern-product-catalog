// app/(home)/components/BookListSection.tsx
'use client';

import type { Book } from '@/lib/types/book';
import { BookGrid } from '@/components/BookGrid';
import { EmptyState } from '@/components/EmptyState';
import { Pagination } from '@/components/Pagination';

interface BookListSectionProps {
    books: Book[];
    paginatedBooks: Book[];
    totalPages: number;
    currentPage: number;
    loading: boolean;
    itemsPerPage: number;
    onBookClick: (book: Book) => void;
    onPageChange: (page: number) => void;
}

export const BookListSection = ({
    books,
    paginatedBooks,
    totalPages,
    currentPage,
    loading,
    itemsPerPage,
    onBookClick,
    onPageChange,
}: BookListSectionProps) => {
    // Show skeleton loading grid
    if (loading && books.length === 0) {
        return (
            <BookGrid
                books={[]}
                isLoading={true}
                itemsPerPage={itemsPerPage}
                onBookClick={onBookClick}
            />
        );
    }

    // Show books if available
    if (paginatedBooks.length > 0) {
        return (
            <>
                <BookGrid books={paginatedBooks} onBookClick={onBookClick} />
                {totalPages > 1 && (
                    <div className="mt-12">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                        />
                    </div>
                )}
            </>
        );
    }

    // Show empty state if no books
    return <EmptyState />;
};