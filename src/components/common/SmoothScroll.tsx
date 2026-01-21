import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { usePlace } from '../../context/PlaceContext';

export const SmoothScroll = () => {
    const location = useLocation();
    const { activePlace } = usePlace();

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname, activePlace.id]);

    return null;
};
