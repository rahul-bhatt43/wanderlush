import { Bus, Coffee, Mountain, Sun, Camera, Footprints, Moon, Star } from 'lucide-react';

const itinerary = [
    {
        day: 'Day 1',
        title: 'Arrival & Acclimatization',
        description: 'Welcome to East Java! We will pick you up from the airport or train station and head towards the Bromo area. Enjoy the scenic drive and settle into your hotel.',
        activities: [
            { time: '09:00 AM', title: 'Airport Pickup', icon: Bus },
            { time: '12:00 PM', title: 'Local Lunch', icon: Coffee },
            { time: '02:00 PM', title: 'Hotel Check-in', icon: Moon },
            { time: '05:00 PM', title: 'Sunset View Point', icon: Sun },
        ]
    },
    {
        day: 'Day 2',
        title: 'The Golden Sunrise',
        description: 'The highlight of the trip! We wake up early to catch the famous sunrise over Mount Bromo, followed by an adventure across the Sea of Sand.',
        activities: [
            { time: '03:00 AM', title: 'Jeep Ride to Penanjakan', icon: Bus },
            { time: '05:00 AM', title: 'Sunrise Witness', icon: Sun },
            { time: '06:30 AM', title: 'Crater Hike', icon: Mountain },
            { time: '08:00 AM', title: 'Sea of Sand & Savanna', icon: Camera },
            { time: '10:00 AM', title: 'Back to Hotel & Breakfast', icon: Coffee },
        ]
    },
    {
        day: 'Day 3',
        title: 'Leisure & Departure',
        description: 'Enjoy a relaxed morning with breakfast and some free time before we drop you off at your next destination.',
        activities: [
            { time: '08:00 AM', title: 'Breakfast at Hotel', icon: Coffee },
            { time: '10:00 AM', title: 'Free Time/Village Walk', icon: Footprints },
            { time: '12:00 PM', title: 'Check-out & Transfer', icon: Bus },
            { time: '03:00 PM', title: 'Drop off Airport/Station', icon: Star },
        ]
    }
];

export const ItineraryTimeline = () => {
    return (
        <section className="py-20 px-8 md:px-24 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Sticky Sidebar for Title (Optional, keeping it simple for now) */}
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-semibold mb-6 text-gray-900">Your Itinerary</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            A carefully curated schedule to ensure you experience the best of Bromo without the rush.
                            We balance adventure with comfort.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-semibold mb-2">Note:</h4>
                            <p className="text-sm text-gray-500">
                                This itinerary is flexible and can be adjusted based on weather conditions and your preferences.
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="md:w-2/3 space-y-12">
                        {itinerary.map((day, index) => (
                            <div key={index} className="relative pl-8 border-l border-gray-200">
                                {/* Day Badge */}
                                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-900 border-4 border-white"></div>

                                <div className="mb-2">
                                    <span className="text-sm font-bold text-orange-500 tracking-wider uppercase">{day.day}</span>
                                    <h3 className="text-2xl font-semibold mt-1 text-gray-900">{day.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{day.description}</p>

                                {/* Activities Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {day.activities.map((activity, idx) => {
                                        const Icon = activity.icon;
                                        return (
                                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100 cursor-default group">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                                                    <Icon size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium">{activity.time}</p>
                                                    <p className="text-sm font-semibold text-gray-700">{activity.title}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
