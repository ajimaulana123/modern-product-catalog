import { CardContent } from "@/components/ui/card";
import { BookCardSkeletonTitle } from "./BookCardSkeletonTitle";
import { BookCardSkeletonDescription } from "./BookCardSkeletonDescription";
import { BookCardSkeletonFooter } from "./BookCardSkeletonFooter";

export const BookCardSkeletonContent = () => {
    return (
        <CardContent className="flex flex-1 flex-col p-4">
            <div className="flex-1">
                <BookCardSkeletonTitle />
                <BookCardSkeletonDescription />
            </div>
            <BookCardSkeletonFooter />
        </CardContent>
    );
};