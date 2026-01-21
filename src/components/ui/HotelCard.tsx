import { Star, MapPin } from 'lucide-react';

interface HotelCardProps {
    image: string;
    name: string;
    location: string;
    price: number;
    rating: number;
}

export const HotelCard = ({ image, name, location, price, rating }: HotelCardProps) => {
    return (
        <div className="relative rounded-3xl overflow-hidden h-[500px] group cursor-pointer shadow-lg">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-900/20 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md z-10">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-white">{rating}</span>
            </div>

            {/* Glass Content Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex justify-between items-end">
                <div>
                    <h3 className="text-white text-xl font-medium">{name}</h3>
                    <div className="flex items-center gap-1.5 text-white text-sm mt-1">
                        <MapPin size={14} className="text-white" />
                        <span>{location}</span>
                    </div>
                </div>
                <span className="text-white text-3xl font-medium">${price}</span>
            </div>
        </div>
    );
};
