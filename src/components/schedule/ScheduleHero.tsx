import { Calendar, Clock, MapPin } from 'lucide-react';

export const ScheduleHero = () => {
    return (
        <div className="relative w-full h-[80vh] min-h-[500px] text-white flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/images/bromo/hero-image.png')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-8 md:px-24">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full w-fit mb-6">
                        <span className="text-sm font-medium uppercase tracking-wider">Your Adventure Awaits</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
                        3 Days of <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-200 to-white">
                            Wonder & Mystery
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
                        Experience the breathtaking landscapes of Bromo Tengger Semeru National Park.
                        From the golden sunrise to the sea of sand, every moment is crafted for an unforgettable journey.
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-orange-400" />
                            <span>3 Days / 2 Nights</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-orange-400" />
                            <span>East Java, Indonesia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-orange-400" />
                            <span>Available Daily</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
