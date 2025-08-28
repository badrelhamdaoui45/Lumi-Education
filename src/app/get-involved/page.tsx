import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Share2, Award } from 'lucide-react';
import Image from 'next/image';

export default function GetInvolvedPage() {
  const waysToHelp = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your financial support is crucial. Every donation, big or small, helps us purchase land, building materials, and educational supplies. It\'s a direct investment in the future of young women in Malawi.',
      cta: 'Donate Securely',
      link: 'https://www.crowdfunder.co.uk/p/lumi-education',
    },
    {
      icon: Users,
      title: 'Fundraise for Us',
      description: 'Start your own fundraising campaign! Whether it\'s a bake sale, a sponsored run, or a birthday fundraiser, your efforts can rally your community and make a significant impact.',
      cta: 'Start Fundraising',
      link: 'https://www.crowdfunder.co.uk/p/lumi-education',
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Follow us on social media and share our story with your network. Raising awareness is a powerful, free way to support our mission and help us reach more people who want to make a difference.',
      cta: 'Follow Our Journey',
      link: '#', // Add social media link later
    },
    {
        icon: Award,
        title: 'Corporate Sponsorship',
        description: 'Partner with us to show your company\'s commitment to social responsibility. We offer various partnership levels and would be delighted to discuss how we can work together for a greater good.',
        cta: 'Contact Us',
        link: 'mailto:hello@lumieducation.org',
      },
  ];

  return (
    <div className="bg-background">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/3.jpg"
            alt="Community fun run"
            fill
            className="object-cover"
            data-ai-hint="people running"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl font-headline font-bold text-white md:text-6xl mb-4">Get Involved</h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            You have the power to change lives. Join us in our mission to bring quality education to girls in Malawi.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">How You Can Help</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
              Whether you donate, fundraise, or simply spread the word, your contribution is invaluable. Here are a few ways you can make a difference:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {waysToHelp.map((item) => (
              <Card key={item.title} className="bg-background/80 flex flex-col text-left shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <item.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline text-3xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-foreground/70 mb-6 flex-grow">{item.description}</p>
                  <Button asChild size="lg">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/20 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-headline font-bold text-foreground md:text-5xl">Ready to Make a Difference?</h2>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70">
            Your support is just a click away. Visit our Crowdfunder page to see our progress and contribute to the next phase of our project. Together, we can build a brighter future.
          </p>
          <Button size="lg" className="mt-8 text-lg py-7 px-10" asChild>
            <a href="https://www.crowdfunder.co.uk/p/lumi-education" target="_blank" rel="noopener noreferrer">
              Visit our Crowdfunder
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
