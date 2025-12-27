// components/BookDetail/BookDetailDetails.tsx
import { TabsContent } from '@/components/ui/tabs';
import type { Book } from '@/lib/types/book';

interface BookDetailDetailsProps {
    book: Book;
}

export const BookDetailDetails = ({ book }: BookDetailDetailsProps) => {
    return (
        <TabsContent value="details" forceMount>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                    <span className="font-semibold text-foreground">SKU:</span> {book.sku}
                </li>
                <li>
                    <span className="font-semibold text-foreground">Weight:</span> {book.weight}g
                </li>
                <li>
                    <span className="font-semibold text-foreground">Dimensions:</span>{' '}
                    {book.dimensions.width} x {book.dimensions.height} x {book.dimensions.depth} cm
                </li>
                <li>
                    <span className="font-semibold text-foreground">Warranty:</span>{' '}
                    {book.warrantyInformation}
                </li>
                <li>
                    <span className="font-semibold text-foreground">Shipping:</span>{' '}
                    {book.shippingInformation}
                </li>
                <li>
                    <span className="font-semibold text-foreground">Return Policy:</span>{' '}
                    {book.returnPolicy}
                </li>
                {book.tags?.length > 0 && (
                    <li>
                        <span className="font-semibold text-foreground">Tags:</span>{' '}
                        {book.tags.join(', ')}
                    </li>
                )}
            </ul>
        </TabsContent>
    );
};