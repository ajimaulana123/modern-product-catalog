// components/BookCard/BookCardSkeleton.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface BookCardSkeletonProps {
    className?: string;
}

export const BookCardSkeleton = ({ className }: BookCardSkeletonProps) => {
    return (
        <div className={cn('block', className)}>
            <Card className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
                {/* Image skeleton */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Skeleton className="h-full w-full" />
                </div>

                <CardContent className="flex flex-1 flex-col p-4">
                    {/* Title skeleton */}
                    <Skeleton className="mb-2 h-5 w-3/4" />
                    <Skeleton className="mb-2 h-5 w-1/2" />

                    {/* Pricing and rating skeleton */}
                    <div className="mt-4 flex flex-wrap items-end justify-between gap-2">
                        <div>
                            <Skeleton className="h-7 w-24 mb-1" />
                            <Skeleton className="h-3 w-16" />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Skeleton key={i} className="h-4 w-4 rounded-sm" />
                                ))}
                            </div>
                            <Skeleton className="h-3 w-12" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};