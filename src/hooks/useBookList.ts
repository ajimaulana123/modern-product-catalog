// app/(home)/hooks/useBookList.ts
'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import type { Book } from '@/lib/types/book';
import { useBooks } from '@/hooks/useBooks';
import { filterBooks } from '@/utils/bookFilters';

const ITEMS_PER_PAGE = 12;

export const useBookList = () => {
    const { books, loading, error } = useBooks();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    // Memoized filtered books
    const filteredBooks = useMemo(() => {
        if (!books) return [];
        return filterBooks(books, searchQuery);
    }, [books, searchQuery]);

    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filteredBooks.length / ITEMS_PER_PAGE));

    // Memoized paginated books
    const paginatedBooks = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredBooks.slice(startIndex, endIndex);
    }, [filteredBooks, currentPage]);

    // Reset to page 1 when search query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    // Handle book selection
    const handleBookClick = useCallback((book: Book) => {
        setSelectedBook(book);
    }, []);

    // Handle dialog close
    const handleCloseDialog = useCallback(() => {
        setSelectedBook(null);
    }, []);

    // Handle page change
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
        // Optional: Scroll to top on page change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Handle search
    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    return {
        // State
        books,
        loading,
        error,
        searchQuery,
        currentPage,
        selectedBook,

        // Computed values
        filteredBooks,
        totalPages,
        paginatedBooks,

        // Constants
        ITEMS_PER_PAGE,

        // Handlers
        handleSearch,
        handleBookClick,
        handleCloseDialog,
        handlePageChange,
        setCurrentPage,
    };
};