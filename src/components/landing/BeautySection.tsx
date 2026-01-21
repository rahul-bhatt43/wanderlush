import type { PlaceData } from '../../data/places';

interface BeautySectionProps {
    data: PlaceData['beauty'];
}

export const BeautySection = ({ data }: BeautySectionProps) => {
    return (
        <section className="relative py-20 px-8 md:px-24 overflow-hidden">
            {/* Map SVG Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('${data.mapImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Light overlay */}
            <div className="absolute inset-0 bg-gray-100/50" />

            {/* Content */}
            <div className="relative z-10 container text-start">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                    {data.description}
                </p>
            </div>
        </section>
    );
};
