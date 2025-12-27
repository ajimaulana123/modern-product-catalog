import { Skeleton } from "@/components/ui/skeleton";

export const BookCardSkeletonPrice = () => {
    return (
        <div>
            <Skeleton className="h-7 w-24 mb-1" />
            <Skeleton className="h-4 w-12" />
        </div>
    );
};