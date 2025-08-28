import { MissionSection } from '@/components/mission-section';
import { FinancialsSection } from '@/components/financials-section';
import { ImpactSection } from '@/components/impact-section';
import { EventsSection } from '@/components/events-section';
import { ValuesSection } from '@/components/values-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <MissionSection />
      <ValuesSection />
      <ImpactSection />
      <FinancialsSection />
      <EventsSection />
    </div>
  );
}