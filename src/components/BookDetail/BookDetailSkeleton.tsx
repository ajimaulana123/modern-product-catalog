// components/BookDetail/BookDetailSkeleton.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export const BookDetailSkeleton = () => {
    return (
        <div className="p-2 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Image Carousel Skeleton */}
                <div className="w-full">
                    <div className="relative">
                        <Card>
                            <CardContent className="relative aspect-video p-0 overflow-hidden rounded-lg">
                                <Skeleton className="h-full w-full rounded-lg" />
                            </CardContent>
                        </Card>

                        {/* Carousel Navigation Skeletons */}
                        <div className="flex justify-center gap-2 mt-4">
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="h-2 w-10 rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Content Skeleton */}
                <div className="flex flex-col">
                    {/* Category and Title */}
                    <Skeleton className="h-6 w-24 mb-3" />
                    <Skeleton className="h-10 w-3/4 mb-4" />

                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-5 w-5 rounded-sm" />
                            ))}
                        </div>
                        <Skeleton className="h-4 w-16" />
                    </div>

                    {/* Pricing */}
                    <div className="mb-2">
                        <Skeleton className="h-12 w-32 mb-2" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-6 w-16 rounded-full" />
                        </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Stock and Brand */}
                    <div className="flex items-center gap-4 text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-10" />
                            <Skeleton className="h-4 w-8" />
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-12" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="w-full">
                        {/* Tab Headers */}
                        <div className="flex gap-2 mb-4">
                            {['Description', 'Details', 'Reviews'].map((tab) => (
                                <Skeleton key={tab} className="h-10 w-28 rounded-md" />
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="relative min-h-[150px]">
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/5" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};