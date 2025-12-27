import { Skeleton } from "@/components/ui/skeleton";

export const BookCardSkeletonTitle = () => {
    return (
        <>
            <Skeleton className="mb-2 h-5 w-1/4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
        </>
    );
};