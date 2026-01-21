import { useState, useRef, type MouseEvent } from 'react';
import type { PlaceData } from '../../data/places';

interface TrekMapSectionProps {
    data: PlaceData['trek'];
}

export const TrekMapSection = ({ data }: TrekMapSectionProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <section className="py-20 px-8 md:px-24 bg-gray-100/50">
            <div className="container mx-auto">
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-crosshair group"
                >
                    {/* Title Overlay - ensuring it stays on top */}
                    <div className="absolute top-12 left-12 z-30 pointer-events-none">
                        <h2 className="text-6xl md:text-7xl font-medium text-white leading-tight drop-shadow-lg">
                            {data.title.line1}<br />{data.title.line2}
                        </h2>
                    </div>

                    {/* Base Layer: Grayscale Image */}
                    <img
                        src={data.mapImage}
                        alt="Trek Map Grayscale"
                        className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75 contrast-125"
                    />

                    {/* Reveal Layer: Color Image with Mask */}
                    <div
                        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                        style={{
                            maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                        }}
                    >
                        <img
                            src={data.mapImage}
                            alt="Trek Map Color"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Trek Points Markers */}
                    {data.points.map((point) => (
                        <div
                            key={point.name}
                            className="absolute z-20 flex flex-col items-center justify-center text-center -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
                            style={{ top: point.top, left: point.left }}
                        >
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg">
                                <span className="block text-white text-sm font-semibold whitespace-nowrap">{point.name}</span>
                                <span className="block text-white/80 text-xs whitespace-nowrap">{point.height}</span>
                            </div>
                            {/* Dot */}
                            <div className="w-3 h-3 bg-white rounded-full mt-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
