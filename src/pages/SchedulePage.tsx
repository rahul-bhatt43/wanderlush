import { ScheduleHero } from '../components/schedule/ScheduleHero';
import { ItineraryTimeline } from '../components/schedule/ItineraryTimeline';
import { BookingSection } from '../components/schedule/BookingSection';

export const SchedulePage = () => {
    return (
        <div className="min-h-screen">
            <ScheduleHero />
            <ItineraryTimeline />
            <BookingSection />
        </div>
    );
};
