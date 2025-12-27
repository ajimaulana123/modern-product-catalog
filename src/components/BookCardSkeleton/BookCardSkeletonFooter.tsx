import { Skeleton } from "@/components/ui/skeleton";
import { BookCardSkeletonPrice } from "./BookCardSkeletonPrice";

export const BookCardSkeletonFooter = () => {
    return (
        <div className="mt-4 flex items-end justify-between gap-2">
            <BookCardSkeletonPrice />
            <Skeleton className="h-4 w-16" />
        </div>
    );
};