import { missionData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function MissionSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1200/800"
          alt="Children learning in a classroom"
          fill
          className="object-cover"
          data-ai-hint="happy children classroom"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="mb-6 text-4xl font-headline font-bold text-white md:text-7xl">{missionData.title}</h1>
        <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">{missionData.statement}</p>
      </div>
    </section>
  );
}