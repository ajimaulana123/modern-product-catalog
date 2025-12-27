// components/BookCard/BookCardImage.tsx
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface BookCardImageProps {
    thumbnail: string;
    title: string;
    discountPercentage: number;
    category: string;
}

export const BookCardImage = ({
    thumbnail,
    title,
    discountPercentage,
    category,
}: BookCardImageProps) => {
    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            {discountPercentage > 0 && (
                <Badge
                    variant="destructive"
                    className="absolute top-3 right-3 rounded-md"
                >
                    {Math.round(discountPercentage)}% OFF
                </Badge>
            )}
            <Badge variant="secondary" className="absolute top-3 left-3 rounded-md">
                {category}
            </Badge>
        </div>
    );
};