import { aboutData } from '@/lib/data';
import { TrusteesSection } from '@/components/trustees-section';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Building, Globe } from 'lucide-react';

export default function AboutPage() {
  const sections = [
    {
      icon: Heart,
      title: 'What we do',
      content: aboutData.whatWeDo,
    },
    {
      icon: Target,
      title: 'Who we help',
      content: aboutData.whoWeHelp,
    },
    {
      icon: Building,
      title: 'How we help',
      content: aboutData.howWeHelp,
    },
    {
      icon: Globe,
      title: 'Where we work',
      content: aboutData.whereWeWork,
    },
  ];

  return (
    <div className="bg-background">
      <section className="bg-accent/20 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-headline font-bold text-primary md:text-6xl mb-4">About Lumi Education</h1>
          <p className="mx-auto max-w-3xl text-lg text-foreground/80 md:text-xl">
            Learn about our journey, our mission, and the dedicated people behind our work.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <Card key={section.title} className="bg-background/80 text-left shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <section.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-headline font-bold">Our Background</h2>
              <p className="leading-relaxed text-foreground/80">{aboutData.background}</p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-headline font-bold">Our Motivation</h2>
              <p className="leading-relaxed text-foreground/80">{aboutData.motivations}</p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-headline font-bold">Future Plans</h2>
              <p className="leading-relaxed text-foreground/80">{aboutData.futurePlans}</p>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl lg:h-[500px]">
            <Image
              src="https://picsum.photos/800/600"
              alt="Children in a classroom in Malawi"
              fill
              className="object-cover"
              data-ai-hint="happy children classroom"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <TrusteesSection />
    </div>
  );
}
