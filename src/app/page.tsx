import { MissionSection } from '@/components/mission-section';
import { FinancialsSection } from '@/components/financials-section';
import { ImpactSection } from '@/components/impact-section';
import { EventsSection } from '@/components/events-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <MissionSection />
      <ImpactSection />
      <FinancialsSection />
      <EventsSection />
    </div>
  );
}
