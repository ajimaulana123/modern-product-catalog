// components/BookDetail/BookDetailTabs.tsx
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookDetailDescription } from './BookDetailDescription';
import { BookDetailDetails } from './BookDetailDetails';
import { BookDetailReviews } from './BookDetailReviews';
import { AnimatePresence, motion } from 'framer-motion';
import type { Book } from '@/lib/types/book';

interface BookDetailTabsProps {
    book: Book;
}

export const BookDetailTabs = ({ book }: BookDetailTabsProps) => {
    const [activeTab, setActiveTab] = useState('description');

    const tabContentVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <div className="relative min-h-[150px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={tabContentVariants}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {activeTab === 'description' && (
                            <BookDetailDescription description={book.description} />
                        )}
                        {activeTab === 'details' && <BookDetailDetails book={book} />}
                        {activeTab === 'reviews' && <BookDetailReviews reviews={book.reviews} />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Tabs>
    );
};