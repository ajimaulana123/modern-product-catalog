import { LoaderCircle } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <LoaderCircle className="mx-auto h-16 w-16 animate-spin text-primary" />
        <h2 className="mt-4 text-2xl font-headline font-semibold">
          Memuat Buku...
        </h2>
        <p className="mt-2 text-muted-foreground">
          Harap tunggu sebentar.
        </p>
      </div>
    </div>
  );
};
