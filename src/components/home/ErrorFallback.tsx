// app/(home)/components/ErrorFallback.tsx
'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ErrorFallbackProps {
    message?: string;
    onRetry?: () => void;
}

export const ErrorFallback = ({
    message = "Failed to load books. Please try again later.",
    onRetry
}: ErrorFallbackProps) => {
    return (
        <div className="flex h-screen items-center justify-center p-4">
            <div className="text-center max-w-md">
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
                <p className="text-muted-foreground mb-6">{message}</p>
                {onRetry && (
                    <Button onClick={onRetry} variant="outline">
                        Try Again
                    </Button>
                )}
            </div>
        </div>
    );
};