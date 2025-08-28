import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Lumi Education logo"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
      <span className="font-headline text-2xl font-bold text-foreground">Lumi Education</span>
    </a>
  );
}
