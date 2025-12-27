import { Skeleton } from "@/components/ui/skeleton";

export const BookCardSkeletonDescription = () => {
    return (
        <>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mt-1" />
        </>
    );
};