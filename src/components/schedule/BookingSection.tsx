import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const BookingSection = () => {
    return (
        <section className="relative py-32 px-8 md:px-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('/images/bromo/grid-image1.png')` }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                            <Star size={14} className="text-orange-400 fill-orange-400" />
                            <span className="text-sm font-medium tracking-wide text-orange-100">Limited Spots Available</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
                            Start Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-200 to-white">
                                Adventure Today
                            </span>
                        </h2>

                        <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-lg font-light">
                            Don't miss the chance to witness the magic of Bromo with our expert guides.
                            Secure your journey now for an unforgettable experience.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {[
                                'Private Transportation',
                                'Expert Local Guide',
                                'Jeep 4x4 Experience',
                                'Breakfast & Snacks',
                                'All Entrance Fees',
                                'Hotel Transfer'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                                        <CheckCircle2 className="text-green-400 w-4 h-4 shrink-0" />
                                    </div>
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Price Card */}
                    <div className="md:w-1/2 w-full max-w-md">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-all duration-500">
                            {/* Decorative glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/30 transition-all duration-500" />

                            <div className="relative">
                                <p className="text-gray-300 text-sm font-medium uppercase tracking-widest mb-2">Total Price</p>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-semibold text-white">$280</span>
                                    <span className="text-gray-400">/ person</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <button className="w-full py-4 bg-white text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-lg shadow-white/5">
                                        Book Now <ArrowRight size={20} />
                                    </button>
                                    <button className="w-full py-4 bg-transparent border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
                                        Talk to an Expert
                                    </button>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    Free cancellation up to 24h before
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
