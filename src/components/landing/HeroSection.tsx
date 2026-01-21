import { ArrowRight, Map as MapIcon, User, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedButton } from '../ui/AnimatedButton';
import type { PlaceData } from '../../data/places';

interface HeroSectionProps {
    data: PlaceData['hero'];
}

export const HeroSection = ({ data }: HeroSectionProps) => {
    return (
        <div className="relative w-full min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${data.backgroundImage}')` }}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-24 container mx-auto">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full w-fit">
                    <span className="text-sm font-medium">{data.badgeText}</span>
                </div>

                <h1 className="mb-8 leading-[1.2]">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="block text-8xl font-semibold"
                    >
                        {data.titlePart1}
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="block text-9xl font-semibold mt-2"
                    >
                        {data.titlePart2}
                        <span
                            className="
                                bg-linear-to-r
                                from-white
                                to-white/40
                                bg-clip-text text-transparent
                            "
                        >
                            {data.titleAccent}
                        </span>
                    </motion.span>
                </h1>

                <AnimatedButton
                    text="Explore Now"
                    className='w-fit bg-white text-black'
                    icon={<ArrowRight size={20} />}
                />

                {/* Bottom Feature Items */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-between items-end px-8 md:px-24">
                    <div className='flex gap-16'>
                        <div className="flex items-center gap-4 max-w-xs">
                            <div className="w-14 h-14 min-w-14 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <MapIcon size={24} className="text-white" />
                            </div>
                            <p className="text-sm text-gray-200 leading-relaxed font-light">
                                {data.features.map}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 max-w-xs">
                            <div className="w-14 h-14 min-w-14 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <User size={24} className="text-white" />
                            </div>
                            <p className="text-sm text-gray-200 leading-relaxed font-light">
                                {data.features.user}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 cursor-pointer transition-colors">
                            <Facebook size={14} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 cursor-pointer transition-colors">
                            <Instagram size={14} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 cursor-pointer transition-colors">
                            <Youtube size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
