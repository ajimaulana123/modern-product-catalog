import { CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const BookCardSkeletonImage = () => {
    return (
        <CardHeader className="p-0">
            <Skeleton className="aspect-[4/3] w-full" />
        </CardHeader>
    );
};