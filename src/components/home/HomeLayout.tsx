// app/(home)/components/HomeLayout.tsx
'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface HomeLayoutProps {
    children: ReactNode;
    searchQuery: string;
    onSearch: (query: string) => void;
}

export const HomeLayout = ({ children, searchQuery, onSearch }: HomeLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header searchQuery={searchQuery} onSearch={onSearch} />
            <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};