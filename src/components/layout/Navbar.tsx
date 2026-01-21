import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';
import { PlaceSelector } from '../ui/PlaceSelector';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4
        transition-all duration-500 ease-in-out
        ${isScrolled
                        ? 'mx-4 md:mx-8 mt-4 rounded-full bg-white/80 backdrop-blur-xl shadow-lg text-gray-900'
                        : 'text-white'
                    }`}
            >
                {/* Logo */}
                <Link to="/">
                    <div className="text-4xl font-bold tracking-wide font-dancing-script">
                        WanderLush
                    </div>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide" onMouseLeave={() => setHoveredIndex(null)}>
                    {['HOME', 'SERVICES', 'TOUR', 'ABOUT', 'CONTACT'].map((item, index) => (
                        <Link
                            key={item}
                            to="#"
                            className="relative px-2 py-1 transition-colors hover:text-primary"
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            {item}
                            {hoveredIndex === index && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search / Selector Trigger */}
                    <button
                        onClick={() => setIsSelectorOpen(true)}
                        className={`p-2.5 rounded-full transition-colors ${isScrolled
                            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                            }`}
                    >
                        <Search size={20} />
                    </button>

                    {/* CTA Button */}
                    <Link to="/schedule" className="hidden sm:block">
                        <AnimatedButton
                            text="Schedule Now"
                            className={`
                        px-6 py-2 border transition-colors duration-300
                        ${isScrolled
                                    ? ' text-gray-900 hover:bg-gray-900 hover:text-white border-gray-900'
                                    : ' text-white bg-transparent hover:bg-white hover:text-black border'
                                }
                    `}
                        />
                    </Link>
                </div>
            </nav>

            <PlaceSelector isOpen={isSelectorOpen} onClose={() => setIsSelectorOpen(false)} />
        </>
    );
};
