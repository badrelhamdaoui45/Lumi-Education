import { BookHeart } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <BookHeart className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold text-foreground">Lumi Education</span>
    </a>
  );
}
