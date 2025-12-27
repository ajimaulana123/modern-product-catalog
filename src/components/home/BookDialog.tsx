// app/(home)/components/BookDialog.tsx
'use client';

import type { Book } from '@/lib/types/book';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogOverlay,
    DialogPortal,
} from '@/components/ui/dialog';
import { BookDetail } from '@/components/BookDetail';

interface BookDialogProps {
    selectedBook: Book | null;
    onClose: () => void;
    isOpen?: boolean;
}

export const BookDialog = ({
    selectedBook,
    onClose,
    isOpen = false
}: BookDialogProps) => {
    if (!selectedBook) return null;

    return (
        <AnimatePresence>
            <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
                <DialogPortal>
                    <DialogOverlay asChild>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                        />
                    </DialogOverlay>
                    <DialogContent
                        className="fixed left-[50%] top-[50%] z-50 w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] border bg-background p-0 shadow-lg max-h-[90vh] overflow-y-auto"
                        asChild
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <DialogHeader className="sr-only">
                                <DialogTitle>{selectedBook.title}</DialogTitle>
                            </DialogHeader>
                            <BookDetail book={selectedBook} />
                        </motion.div>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </AnimatePresence>
    );
};