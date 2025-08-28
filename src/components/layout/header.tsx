import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 px-6 py-4 backdrop-blur-sm md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <Button asChild>
          <a href="https://www.crowdfunder.co.uk/p/lumi-education" target="_blank" rel="noopener noreferrer">
            Donate Now
          </a>
        </Button>
      </div>
    </header>
  );
}
