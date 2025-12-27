"use client";

import { useState, useEffect } from "react";
import type { Book, BookApiResponse } from "@/lib/types/book";
import { useToast } from "@/hooks/use-toast";
import { translateToIndonesian } from "@/ai/flows/translate-flow";

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
        const response = await fetch("https://dummyjson.com/products?limit=100");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BookApiResponse = await response.json();
        
        const bookCategories = ["groceries", "home-decoration", "furniture", "lighting"];
        const filteredProducts = data.products.filter(p => !bookCategories.includes(p.category));

        // Translate descriptions
        const translatedProducts = await Promise.all(
          filteredProducts.map(async (product) => {
            try {
              const translationResult = await translateToIndonesian({ text: product.description });
              return {
                ...product,
                description: translationResult.translation,
              };
            } catch (e) {
              console.error(`Could not translate description for ${product.title}`, e);
              // Fallback to original description if translation fails
              return product;
            }
          })
        );
        
        setBooks(translatedProducts);

      } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Terjadi kesalahan yang tidak diketahui";
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Oops! Terjadi kesalahan.",
          description: `Ada masalah saat mengambil data buku: ${errorMessage}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [toast]);

  return { books, loading, error };
};
