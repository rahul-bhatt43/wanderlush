import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { places } from '../../data/places';
import { usePlace } from '../../context/PlaceContext';

const ITEMS_PER_PAGE = 3;

export const FloatingDock = () => {
    const { activePlace, setActivePlace } = usePlace();
    const [startIndex, setStartIndex] = useState(0);

    const visiblePlaces = places.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const hasNext = startIndex + ITEMS_PER_PAGE < places.length;
    const hasPrev = startIndex > 0;

    const handleNext = () => {
        if (hasNext) {
            setStartIndex((prev) => Math.min(prev + 1, places.length - ITEMS_PER_PAGE));
        }
    };

    const handlePrev = () => {
        if (hasPrev) {
            setStartIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-[90vw]">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl p-3 pr-4 rounded-full border border-white/20 shadow-xl overflow-visible">

                {/* Prev Button */}
                <div className={`transition-all duration-300 ${hasPrev ? 'w-8 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                    <button
                        onClick={handlePrev}
                        className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex items-center gap-4">
                    <AnimatePresence mode='popLayout'>
                        {visiblePlaces.map((place) => {
                            const isActive = activePlace.id === place.id;

                            return (
                                <motion.button
                                    key={place.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    onClick={() => setActivePlace(place.id)}
                                    className="relative group focus:outline-none shrink-0"
                                >
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {place.name}
                                    </div>

                                    {/* Thumbnail */}
                                    <motion.div
                                        animate={{
                                            border: isActive ? '2px solid white' : '1px solid rgba(255,255,255,0.5)'
                                        }}
                                        className="w-12 h-12 rounded-full overflow-hidden bg-gray-900"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <img
                                            src={place.hero.backgroundImage}
                                            alt={place.name}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </motion.div>

                                    {/* Active Indicator Dot */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-dot"
                                            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                <div className={`transition-all duration-300 ${hasNext ? 'w-8 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                    <button
                        onClick={handleNext}
                        className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
};
