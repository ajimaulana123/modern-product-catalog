// components/BookDetail/BookDetailCarousel.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface BookDetailCarouselProps {
    images: string[];
    title: string;
}

export const BookDetailCarousel = ({ images, title }: BookDetailCarouselProps) => {
    const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

    const handleImageLoad = (url: string) => {
        setImageLoading(prev => ({ ...prev, [url]: false }));
    };

    return (
        <Carousel className="w-full">
            <CarouselContent>
                {images.map((img, index) => {
                    const isLoading = imageLoading[img] !== false;
                    return (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg">
                                        {isLoading && (
                                            <Skeleton className="absolute inset-0 h-full w-full rounded-lg shimmer" />
                                        )}
                                        <Image
                                            src={img}
                                            alt={`${title} - image ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className={cn(
                                                "object-contain transition-opacity duration-300",
                                                isLoading ? "opacity-0" : "opacity-100"
                                            )}
                                            onLoadingComplete={() => handleImageLoad(img)}
                                            onLoad={() => setImageLoading(prev => ({ ...prev, [img]: true }))}
                                            onError={() => handleImageLoad(img)}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    );
};