'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Book } from '@/lib/types/book';
import { useBooks } from '@/hooks/useBooks';
import { AnimatePresence, motion } from 'framer-motion';

import { Header } from '@/components/Header';
import { BookGrid } from '@/components/BookGrid';
import { EmptyState } from '@/components/EmptyState';
import { Pagination } from '@/components/Pagination';
import { Footer } from '@/components/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { BookDetail } from '@/components/BookDetail';
import { LoadingState } from '@/components/LoadingState';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const { books, loading, error } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    if (!books) return [];
    const query = searchQuery.toLowerCase().trim();
    if (!query) return books;

    return books.filter(
      (book: Book) =>
        book.title.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );
  }, [books, searchQuery]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredBooks.slice(startIndex, endIndex);
  }, [filteredBooks, currentPage]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  if (error) {
    // Error will be shown as a toast, but we can have a fallback UI
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-destructive-foreground">
          Failed to load books. Please try again later.
        </p>
      </div>
    );
  }
  
  if (loading && books.length === 0) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow">
        {loading ? (
           <BookGrid
            books={[]}
            isLoading={true}
            itemsPerPage={ITEMS_PER_PAGE}
            onBookClick={handleBookClick}
          />
        ) : paginatedBooks.length > 0 ? (
          <>
            <BookGrid books={paginatedBooks} onBookClick={handleBookClick} />
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <EmptyState />
        )}
      </main>
      <Footer />
      <AnimatePresence>
        {selectedBook && (
            <Dialog open onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
                <DialogPortal>
                    <DialogOverlay asChild>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </DialogOverlay>
                    <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0" asChild>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <DialogHeader>
                                <DialogTitle className="sr-only">{selectedBook.title}</DialogTitle>
                            </DialogHeader>
                            <BookDetail book={selectedBook} />
                        </motion.div>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
