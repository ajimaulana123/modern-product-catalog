// components/BookDetail/BookDetailReviews.tsx
import { TabsContent } from '@/components/ui/tabs';
import { StarRating } from './shared/StarRating';
import type { Review } from '@/lib/types/book';

interface BookDetailReviewsProps {
    reviews?: Review[];
}

export const BookDetailReviews = ({ reviews = [] }: BookDetailReviewsProps) => {
    return (
        <TabsContent value="reviews" forceMount>
            {reviews.length > 0 ? (
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-foreground">{review.reviewerName}</h4>
                                <StarRating rating={review.rating} size="sm" />
                            </div>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground">No reviews yet.</p>
            )}
        </TabsContent>
    );
};