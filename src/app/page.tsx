// app/(home)/page.tsx
'use client';

import { useBookList } from '@/hooks/useBookList';
import { HomeLayout } from '@/components/home/HomeLayout';
import { BookListSection } from '@/components/home/BookListSection';
import { BookDialog } from '@/components/home/BookDialog';
import { ErrorFallback } from '@/components/home/ErrorFallback';

export default function Home() {
  const {
    loading,
    error,
    searchQuery,
    currentPage,
    selectedBook,
    paginatedBooks,
    totalPages,
    ITEMS_PER_PAGE,
    handleSearch,
    handleBookClick,
    handleCloseDialog,
    handlePageChange,
    books,
  } = useBookList();

  // Show error state
  if (error) {
    return <ErrorFallback />;
  }

  return (
    <>
      <HomeLayout searchQuery={searchQuery} onSearch={handleSearch}>
        <BookListSection
          books={books}
          paginatedBooks={paginatedBooks}
          totalPages={totalPages}
          currentPage={currentPage}
          loading={loading}
          itemsPerPage={ITEMS_PER_PAGE}
          onBookClick={handleBookClick}
          onPageChange={handlePageChange}
        />
      </HomeLayout>

      <BookDialog
        selectedBook={selectedBook}
        onClose={handleCloseDialog}
        isOpen={!!selectedBook}
      />
    </>
  );
}