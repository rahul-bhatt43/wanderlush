import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from '../components/landing/HeroSection';
import { JourneySection } from '../components/landing/JourneySection';
import { BeautySection } from '../components/landing/BeautySection';
import { VillasSection } from '../components/landing/VillasSection';
import { BlogSection } from '../components/ui/BlogSection';
import { TrekMapSection } from '../components/ui/TrekMapSection';
import { usePlace } from '../context/PlaceContext';

export const LandingPage = () => {
    const { activePlace } = usePlace();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activePlace.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Hero Section */}
                <HeroSection data={activePlace.hero} />

                {/* Journey Section */}
                <JourneySection data={activePlace.journey} />

                {/* Beauty of Bromo Section */}
                <BeautySection data={activePlace.beauty} />

                {/* Villas And Hotels Section */}
                <VillasSection data={activePlace.villas} />

                {/* Trek Map Section */}
                <TrekMapSection data={activePlace.trek} />

                {/* Traveler Blog Section */}
                <BlogSection data={activePlace.blog} />
            </motion.div>
        </AnimatePresence>
    );
};
