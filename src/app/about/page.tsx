import { aboutData } from '@/lib/data';
import { TrusteesSection } from '@/components/trustees-section';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Building, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const galleryImages = [
    { src: '/1.jpg', alt: 'Children learning in a classroom', hint: 'happy children classroom' },
    { src: '/2.jpg', alt: 'People at a charity gala', hint: 'charity event' },
    { src: '/3.jpg', alt: 'Participants in a fun run', hint: 'people running' },
    { src: '/5.jpg', alt: 'Display of baked goods at a sale', hint: 'baked goods' },
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
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl lg:h-[500px]">
            <Image
              src="/4.jpg"
              alt="Children in a classroom in Malawi"
              fill
              className="object-cover"
              data-ai-hint="children classroom"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Future Plans</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
              We have an ambitious vision to create a sustainable and empowering educational environment. Here's what we plan to do:
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {aboutData.futurePlans.map((plan, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-foreground/80">{plan}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/20 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-headline font-bold text-foreground md:text-5xl">How Your Contribution Helps</h2>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70">
            {aboutData.contributionHelp}
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="https://www.crowdfunder.co.uk/p/lumi-education" target="_blank" rel="noopener noreferrer">
              Donate to Our Project
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Journey in Pictures</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              A glimpse into the lives we&apos;re changing together.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.src} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrusteesSection />
    </div>
  );
}
