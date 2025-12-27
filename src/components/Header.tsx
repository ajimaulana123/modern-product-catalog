"use client";

import { SearchBar } from "@/components/SearchBar";

interface HeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export const Header = ({ searchQuery, onSearch }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-auto flex-col items-start justify-between gap-4 px-4 py-4 sm:h-20 sm:flex-row sm:items-center sm:gap-0 sm:py-0 sm:px-6 lg:px-8">
        <div className="flex items-center">
           <h1 className="text-4xl font-bold">
            <span className="font-logo text-primary">Ziyad</span>
            <span className="font-headline text-3xl text-foreground">books</span>
          </h1>
        </div>
        <div className="flex w-full flex-1 items-center justify-end sm:w-auto">
          <div className="w-full sm:max-w-sm">
            <SearchBar
              value={searchQuery}
              onSearch={onSearch}
              placeholder="Search by title, category, or description..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};
