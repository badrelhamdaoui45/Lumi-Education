import { impactStats } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ImpactSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Impact in Numbers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Your support translates into real, measurable change. Here&apos;s a glance at what we&apos;ve achieved together.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <Card
              key={stat.label}
              className="border-2 border-primary/20 text-center shadow-lg transition-colors duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <p className="text-5xl font-bold text-primary md:text-6xl">{stat.figure}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <CardTitle className="font-headline text-xl">{stat.label}</CardTitle>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
