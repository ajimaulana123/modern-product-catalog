"use client";

import { useState, useEffect } from "react";
import type { Book, BookApiResponse } from "@/lib/types/book";
import { useToast } from "@/hooks/use-toast";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://dummyjson.com/products?limit=12");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BookApiResponse = await response.json();
        setBooks(data.products);
      } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem fetching the books: ${errorMessage}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [toast]);

  return { books, loading, error };
};
