import { Calendar, ChevronDown, User, Wallet } from 'lucide-react';
import { HotelCard } from '../ui/HotelCard';
import type { PlaceData } from '../../data/places';

interface VillasSectionProps {
    data: PlaceData['villas'];
}

export const VillasSection = ({ data }: VillasSectionProps) => {
    return (
        <section className="py-20 px-8 md:px-24 bg-white">
            <div className="container mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 text-center mb-10">
                    {data.title.line1}<br />{data.title.line2}
                </h2>

                {/* Search Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-lg">
                        <Calendar size={18} className="text-gray-500" />
                        <span className="text-gray-700">Date</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-lg">
                        <Wallet size={18} className="text-gray-500" />
                        <span className="text-gray-700">Budget</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-lg">
                        <User size={18} className="text-gray-500" />
                        <span className="text-gray-700">Guest</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                    <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Search
                    </button>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {['All', 'Resort', 'Villa', 'Hotel', 'Cottage', 'Homestay', 'Guesthouse', 'Eco Lodge'].map((category, index) => (
                        <button
                            key={category}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.hotels.map((hotel) => (
                        <HotelCard key={hotel.id} {...hotel} />
                    ))}
                </div>
            </div>
        </section>
    );
};
