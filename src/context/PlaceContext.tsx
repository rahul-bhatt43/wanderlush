import { createContext, useContext, useState, type ReactNode } from 'react';
import { places, type PlaceData } from '../data/places';

interface PlaceContextType {
    activePlace: PlaceData;
    setActivePlace: (placeId: string) => void;
}

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export const PlaceProvider = ({ children }: { children: ReactNode }) => {
    // Default to first place (Bromo)
    const [activePlace, setActivePlaceState] = useState<PlaceData>(places[0]);

    const setActivePlace = (placeId: string) => {
        const place = places.find((p) => p.id === placeId);
        if (place) {
            setActivePlaceState(place);
        }
    };

    return (
        <PlaceContext.Provider value={{ activePlace, setActivePlace }}>
            {children}
        </PlaceContext.Provider>
    );
};

export const usePlace = () => {
    const context = useContext(PlaceContext);
    if (!context) {
        throw new Error('usePlace must be used within a PlaceProvider');
    }
    return context;
};
