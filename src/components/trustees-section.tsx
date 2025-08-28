import { trustees } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export function TrusteesSection() {
  return (
    <section className="bg-accent/20 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Trustees</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            The dedicated individuals guiding our mission and ensuring our commitment to transparency and impact.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {trustees.map((trustee) => (
            <Card key={trustee.name} className="bg-background/80 text-center backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 pt-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={`https://picsum.photos/seed/${trustee.name.replace(/\s+/g, '')}/100`}
                    data-ai-hint="professional headshot"
                  />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-headline text-lg font-bold">{trustee.name}</h3>
                  <p className="text-sm text-primary">{trustee.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
