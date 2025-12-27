// components/BookCard/BookCardContent.tsx
interface BookCardContentProps {
    title: string;
    children: React.ReactNode;
}

export const BookCardContent = ({ title, children }: BookCardContentProps) => {
    return (
        <div className="flex flex-1 flex-col p-4">
            <h3 className="font-headline text-lg leading-tight mb-2 flex-grow text-foreground">
                {title}
            </h3>
            {children}
        </div>
    );
};