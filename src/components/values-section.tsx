import { missionData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12 text-3xl font-headline font-bold text-foreground md:text-5xl">Our Core Values</h2>
        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {missionData.values.map((value) => (
            <Card
              key={value.title}
              className="bg-background/80 text-left shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <value.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mx-auto max-w-3xl text-base text-foreground/80 md:text-lg">{missionData.goals}</p>
      </div>
    </section>
  );
}