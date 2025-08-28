import { events } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function EventsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Get involved! Join our fundraising events and help us bring light to learning.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} className="flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-52 w-full">
                <Image
                  src={event.image.src}
                  alt={event.title}
                  fill
                  className="object-cover"
                  data-ai-hint={event.image.hint}
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 p-0 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}