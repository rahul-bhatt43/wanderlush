import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import { places } from '../../data/places';
import { usePlace } from '../../context/PlaceContext';

interface PlaceSelectorProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PlaceSelector = ({ isOpen, onClose }: PlaceSelectorProps) => {
    const { setActivePlace } = usePlace();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPlaces = places.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelect = (placeId: string) => {
        setActivePlace(placeId);
        onClose();
        setSearchQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[600px] bg-white rounded-3xl shadow-2xl z-[70] overflow-hidden"
                    >
                        {/* Header & Search */}
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Select Destination</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={20} className="text-gray-500" />
                                </button>
                            </div>

                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search for a place..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-900/10 focus:outline-none transition-shadow"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* List */}
                        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-2">
                            {filteredPlaces.length > 0 ? filteredPlaces.map((place, index) => (
                                <motion.button
                                    key={place.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleSelect(place.id)}
                                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors text-left group w-full"
                                >
                                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                        <img
                                            src={place.hero.backgroundImage}
                                            alt={place.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                                            <MapPin size={12} />
                                            <span>Indonesia</span> {/* Hardcoded for now, could be in data */}
                                        </div>
                                    </div>
                                    <div className="p-2 rounded-full bg-white border border-gray-100 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
                                        <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                </motion.button>
                            )) : (
                                <div className="text-center py-10 text-gray-400">
                                    No places found
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
