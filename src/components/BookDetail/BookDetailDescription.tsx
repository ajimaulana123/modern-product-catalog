// components/BookDetail/BookDetailDescription.tsx
import { TabsContent } from '@/components/ui/tabs';

interface BookDetailDescriptionProps {
    description: string;
}

export const BookDetailDescription = ({ description }: BookDetailDescriptionProps) => {
    return (
        <TabsContent value="description" forceMount className="text-muted-foreground leading-relaxed">
            {description}
        </TabsContent>
    );
};