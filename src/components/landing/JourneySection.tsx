import { Play } from 'lucide-react';
import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { VideoModal } from '../ui/VideoModal';
import type { PlaceData } from '../../data/places';

interface JourneySectionProps {
    data: PlaceData['journey'];
}

export const JourneySection = ({ data }: JourneySectionProps) => {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const handlePlayClick = (e: React.MouseEvent, videoId: string = 'xZ774uoCkLw') => {
        e.stopPropagation(); // Prevent card navigation if any
        setActiveVideoId(videoId);
    };

    return (
        <section className="bg-white py-20 px-8 md:px-24">
            <div className="container mx-auto">
                {/* Header */}
                <SectionHeader
                    title={<>{data.title.line1}<br />{data.title.line2}</>}
                    description={data.description}
                    primaryAction={{ label: 'Reminder me' }}
                    secondaryAction={{ label: 'Learn More' }}
                />

                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Row 1 */}
                    {/* Left Large Card - Item 0 */}
                    {data.items[0] && (
                        <div className="col-span-12 md:col-span-5 md:row-span-2 relative rounded-3xl overflow-hidden h-72 md:h-auto group cursor-pointer">
                            <img
                                src={data.items[0].image}
                                alt={data.items[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                            {/* Badge */}
                            {data.items[0].badge && (
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                                    <span className="text-white text-xs font-medium">{data.items[0].badge}</span>
                                </div>
                            )}

                            {/* Content */}
                            <div className="absolute bottom-6 left-6">
                                <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{data.items[0].subtitle}</span>
                                <h3 className="text-white text-xl font-semibold mt-1">{data.items[0].title}</h3>
                                {/* Avatar Group */}
                                {data.items[0].hasAvatars && (
                                    <div className="flex -space-x-2 mt-3">
                                        <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Top Right Card - Item 1 */}
                    {data.items[1] && (
                        <div className="col-span-12 md:col-span-7 relative rounded-3xl overflow-hidden h-56 group cursor-pointer">
                            <img
                                src={data.items[1].image}
                                alt={data.items[1].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                            {/* Play Button */}
                            {data.items[1].videoId && (
                                <div
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                                    onClick={(e) => handlePlayClick(e, data.items[1].videoId)}
                                >
                                    <Play size={16} className="text-white fill-white" />
                                </div>
                            )}

                            {/* Content */}
                            <div className="absolute bottom-6 left-6">
                                <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{data.items[1].subtitle}</span>
                                <h3 className="text-white text-xl font-semibold mt-1">{data.items[1].title}</h3>
                            </div>
                        </div>
                    )}

                    {/* Row 2 - Bottom Right: 3 smaller cards that share 7 columns */}
                    <div className="col-span-12 md:col-span-7 relative rounded-3xl overflow-hidden h-56 group cursor-pointer md:col-start-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                            {/* Card 1 - Item 2 */}
                            {data.items[2] && (
                                <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                                    <img
                                        src={data.items[2].image}
                                        alt={data.items[2].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Play Button */}
                                    {data.items[2].videoId && (
                                        <div
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                                            onClick={(e) => handlePlayClick(e, data.items[2].videoId)}
                                        >
                                            <Play size={16} className="text-white fill-white" />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{data.items[2].subtitle}</span>
                                        <h3 className="text-white text-lg font-semibold mt-1">{data.items[2].title}</h3>
                                    </div>
                                </div>
                            )}

                            {/* Card 2 - Item 3 */}
                            {data.items[3] && (
                                <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                                    <img
                                        src={data.items[3].image}
                                        alt={data.items[3].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Play Button */}
                                    {data.items[3].videoId && (
                                        <div
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                                            onClick={(e) => handlePlayClick(e, data.items[3].videoId)}
                                        >
                                            <Play size={16} className="text-white fill-white" />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{data.items[3].subtitle}</span>
                                        <h3 className="text-white text-lg font-semibold mt-1">{data.items[3].title}</h3>
                                    </div>
                                </div>
                            )}

                            {/* Card 3 - Item 4 */}
                            {data.items[4] && (
                                <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                                    <img
                                        src={data.items[4].image}
                                        alt={data.items[4].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Play Button */}
                                    {data.items[4].videoId && (
                                        <div
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                                            onClick={(e) => handlePlayClick(e, data.items[4].videoId)}
                                        >
                                            <Play size={16} className="text-white fill-white" />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{data.items[4].subtitle}</span>
                                        <h3 className="text-white text-lg font-semibold mt-1">{data.items[4].title}</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={!!activeVideoId}
                onClose={() => setActiveVideoId(null)}
                videoId={activeVideoId || ''}
            />
        </section>
    );
};
