"use client";

import { SearchBar } from "@/components/SearchBar";

interface HeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export const Header = ({ searchQuery, onSearch }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
           <h1 className="text-4xl font-bold">
            <span className="font-logo text-primary">Ziyad</span>
            <span className="font-headline text-3xl text-foreground">books</span>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full max-w-sm">
            <SearchBar
              value={searchQuery}
              onSearch={onSearch}
              placeholder="Cari berdasarkan judul, kategori, atau deskripsi..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};
