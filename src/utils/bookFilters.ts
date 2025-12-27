// app/(home)/utils/bookFilters.ts
import type { Book } from '@/lib/types/book';

export const filterBooks = (books: Book[], searchQuery: string): Book[] => {
    if (!books) return [];

    const query = searchQuery.toLowerCase().trim();
    if (!query) return books;

    return books.filter(
        (book: Book) =>
            book.title.toLowerCase().includes(query) ||
            book.description.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query)
    );
};

// Optional: Additional filter functions
export const sortBooks = (books: Book[], sortBy: 'title' | 'price' | 'rating'): Book[] => {
    return [...books].sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'price':
                return a.price - b.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
};