export interface PlaceData {
    id: string;
    name: string;
    hero: {
        backgroundImage: string;
        badgeText: string;
        titlePart1: string;
        titlePart2: string;
        titleAccent: string;
        features: {
            map: string;
            user: string;
        };
    };
    journey: {
        title: {
            line1: string;
            line2: string;
        };
        description: string;
        items: Array<{
            image: string;
            badge?: string;
            subtitle: string;
            title: string;
            videoId?: string;
            colSpan?: string;
            hasAvatars?: boolean;
        }>;
    };
    beauty: {
        description: string;
        mapImage: string;
    };
    villas: {
        title: {
            line1: string;
            line2: string;
        };
        hotels: Array<{
            id: number;
            image: string;
            name: string;
            location: string;
            price: number;
            rating: number;
        }>;
    };
    trek: {
        title: {
            line1: string;
            line2: string;
        };
        mapImage: string; // Using same image for both gray and colored for now, handled by CSS filters
        points: Array<{
            name: string;
            height: string;
            top: string;
            left: string;
        }>;
    };
    blog: {
        title: {
            line1: string;
            line2: string;
        };
        description: string;
        posts: Array<{
            id: number;
            image: string;
            category: string;
            title: string;
            author: string;
            date: string;
            authorImage?: string;
            isLarge?: boolean;
        }>;
    };
}

export const places: PlaceData[] = [
    {
        id: 'bromo',
        name: 'Bromo Mountain',
        hero: {
            backgroundImage: '/images/bromo/hero-image.png',
            badgeText: 'A Place Where Nature and Adventure Unite',
            titlePart1: 'Experience the',
            titlePart2: 'Magic ',
            titleAccent: 'of Bromo',
            features: {
                map: 'Provides a visual representation of destinations, attractions, and activities.',
                user: 'Provides travelers with more accurate and reliable perspective of the destination.'
            }
        },
        journey: {
            title: {
                line1: 'The Journey Of',
                line2: 'Bromo Mountain'
            },
            description: 'This journey offers an unforgettable experience that blends adventure, culture, and natural beauty. Located in the Bromo Tengger Semeru National Park',
            items: [
                {
                    image: '/images/bromo/grid-image1.png',
                    badge: 'Most Interesting',
                    subtitle: 'THE BEAUTY OF BROMO',
                    title: 'Country above the clouds',
                    hasAvatars: true,
                },
                {
                    image: '/images/bromo/grid-image2.png',
                    subtitle: 'JEEPS GO AROUND BROMO',
                    title: 'Lava Jeep Tour',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bromo/grid-image3.png',
                    subtitle: 'MEMORABLE EXPERIENCE',
                    title: 'Hiking on Bromo',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bromo/grid-image4.png',
                    subtitle: 'CULTURE AND TRADITION',
                    title: 'Luhur Poten Temple',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bromo/grid-image5.png',
                    subtitle: 'UNFORGETTABLE EXPERIENCE',
                    title: 'Bromo Horse Riding',
                    videoId: 'xZ774uoCkLw'
                }
            ]
        },
        beauty: {
            description: 'The beauty of Bromo Mountain lies in its stunning landscapes, ranging from vast volcanic craters to picturesque savannahs and lush forests. The mountain is surrounded by a sea of sand, which gives it a surreal, otherworldly quality that is truly breathtaking.',
            mapImage: '/svgs/map.svg'
        },
        villas: {
            title: {
                line1: 'A Selection Of Exceptional',
                line2: 'Villas And Hotels'
            },
            hotels: [
                {
                    id: 1,
                    image: '/images/bromo/sec4-image1.png',
                    name: 'Bromo Valley Villas',
                    location: 'East Java, Indonesia',
                    price: 280,
                    rating: 4.9
                },
                {
                    id: 2,
                    image: '/images/bromo/sec4-image2.png',
                    name: 'Plataran Bromo',
                    location: 'East Java, Indonesia',
                    price: 285,
                    rating: 4.9
                },
                {
                    id: 3,
                    image: '/images/bromo/sec4-image3.png',
                    name: 'Jiwa Jawa Resort',
                    location: 'East Java, Indonesia',
                    price: 287,
                    rating: 4.9
                }
            ]
        },
        trek: {
            title: {
                line1: 'Enjoy Your',
                line2: 'Travel'
            },
            mapImage: '/images/bromo/trek-locator.png',
            points: [
                { name: 'Gunung Semeru', height: 'MT +3676', top: '25%', left: '55%' },
                { name: 'Gunung Bromo', height: 'MT +2392', top: '55%', left: '38%' },
                { name: 'Gunung Batok', height: 'MT +2400', top: '70%', left: '60%' },
                { name: 'Gunung Widodaren', height: 'MT +2614', top: '35%', left: '75%' },
            ]
        },
        blog: {
            title: {
                line1: 'Travel Blog',
                line2: 'Around Bromo'
            },
            description: 'This blog features beautiful photographs and personal experiences, providing insights into the local culture and customs, and inspiring travel enthusiasts to explore this enchanting destination.',
            posts: [
                {
                    id: 1,
                    image: '/images/bromo/blog-image1.png',
                    category: 'TRAVEL',
                    title: 'Exploring Local Culture and Traditions',
                    author: 'Pambudi Smith',
                    date: '10th May 2023',
                    authorImage: '/images/blogger1.png',
                    isLarge: true
                },
                {
                    id: 2,
                    image: '/images/bromo/blog-image2.png',
                    category: 'TRAVEL',
                    title: 'The Beauty of the Sea of Sand',
                    author: 'Admin',
                    date: '12th May 2023'
                },
                {
                    id: 3,
                    image: '/images/bromo/blog-image3.png',
                    category: 'TRAVEL',
                    title: 'Sunrise in Bromo Tengger Semeru',
                    author: 'Admin',
                    date: '15th May 2023'
                }
            ]
        }
    },
    {
        id: 'bali',
        name: 'Bali Island',
        hero: {
            backgroundImage: '/images/bali/hero-image.png',
            badgeText: 'A Land Where Culture, Nature, and Serenity Meet',
            titlePart1: 'Discover the',
            titlePart2: 'Soul ',
            titleAccent: 'of Bali',
            features: {
                map: 'Provides a visual guide to beaches, temples, rice terraces, and cultural landmarks.',
                user: 'Offers travelers an authentic and immersive perspective of island life and traditions.'
            }
        },

        journey: {
            title: {
                line1: 'The Journey Of',
                line2: 'Bali Island'
            },
            description:
                'This journey delivers a harmonious blend of spirituality, adventure, and relaxation. Located in the heart of Indonesia, Bali is renowned for its sacred temples, vibrant traditions, lush landscapes, and breathtaking coastlines.',
            items: [
                {
                    image: '/images/bali/grid-image1.png',
                    badge: 'Most Interesting',
                    subtitle: 'CULTURAL HERITAGE',
                    title: 'Uluwatu Temple',
                    hasAvatars: true,
                },
                {
                    image: '/images/bali/grid-image2.png',
                    subtitle: 'COASTAL ADVENTURE',
                    title: 'Kuta Beach Experience',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bali/grid-image3.png',
                    subtitle: 'SPIRITUAL ESCAPE',
                    title: 'Tirta Empul Temple',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bali/grid-image4.png',
                    subtitle: 'NATURE AND RELAXATION',
                    title: 'Tegallalang Rice Terraces',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/bali/grid-image5.png',
                    subtitle: 'ISLAND ADVENTURE',
                    title: 'Nusa Penida Tour',
                    videoId: 'xZ774uoCkLw'
                }
            ]
        },

        beauty: {
            description:
                'The beauty of Bali Island lies in its diverse landscapes, from golden beaches and turquoise waters to emerald rice fields and misty jungles. Sacred temples, dramatic cliffs, and tranquil villages create a timeless atmosphere that captivates every traveler.',
            mapImage: '/svgs/map.svg'
        },

        villas: {
            title: {
                line1: 'A Selection Of Exceptional',
                line2: 'Villas And Resorts'
            },
            hotels: [
                {
                    id: 1,
                    image: '/images/bali/sec4-image1.png',
                    name: 'Ayana Resort Bali',
                    location: 'Bali, Indonesia',
                    price: 320,
                    rating: 4.8
                },
                {
                    id: 2,
                    image: '/images/bali/sec4-image2.png',
                    name: 'Alila Villas Uluwatu',
                    location: 'Bali, Indonesia',
                    price: 295,
                    rating: 4.9
                },
                {
                    id: 3,
                    image: '/images/bali/sec4-image3.png',
                    name: 'Viceroy Bali',
                    location: 'Bali, Indonesia',
                    price: 310,
                    rating: 4.9
                }
            ]
        },

        trek: {
            title: {
                line1: 'Enjoy Your',
                line2: 'Journey'
            },
            mapImage: '/images/bali/trek-locator.png',
            points: [
                { name: 'Mount Agung', height: 'MT +3031', top: '35%', left: '58%' },
                { name: 'Mount Batur', height: 'MT +1717', top: '55%', left: '42%' },
                { name: 'Uluwatu', height: 'Cliff Temple', top: '70%', left: '30%' },
                { name: 'Nusa Penida', height: 'Island Coast', top: '60%', left: '75%' }
            ]
        },

        blog: {
            title: {
                line1: 'Travel Blog',
                line2: 'Around Bali'
            },
            description:
                'This blog highlights captivating stories, cultural insights, and travel experiences that showcase Bali’s traditions, landscapes, and lifestyle, inspiring travelers to explore the island more deeply.',
            posts: [
                {
                    id: 1,
                    image: '/images/bali/blog-image1.png',
                    category: 'TRAVEL',
                    title: 'Exploring Balinese Culture and Traditions',
                    author: 'Pambudi Smith',
                    date: '10th May 2023',
                    authorImage: '/images/blogger1.png',
                    isLarge: true
                },
                {
                    id: 2,
                    image: '/images/bali/blog-image2.png',
                    category: 'TRAVEL',
                    title: 'The Charm of Bali’s Coastal Life',
                    author: 'Admin',
                    date: '12th May 2023'
                },
                {
                    id: 3,
                    image: '/images/bali/blog-image3.png',
                    category: 'TRAVEL',
                    title: 'Sunrise Hike at Mount Batur',
                    author: 'Admin',
                    date: '15th May 2023'
                }
            ]
        }
    },
    {
        id: 'Shimla',
        name: 'Shimla',
        hero: {
            backgroundImage: '/images/ladakh/hero-image.png',
            badgeText: 'Where Mountains, Monasteries, and Silence Converge',
            titlePart1: 'Discover the',
            titlePart2: 'Spirit ',
            titleAccent: 'of Ladakh',
            features: {
                map: 'Provides a visual guide to mountain passes, monasteries, lakes, and remote valleys.',
                user: 'Offers travelers a deeper understanding of high-altitude life, culture, and landscapes.'
            }
        },

        journey: {
            title: {
                line1: 'The Journey Of',
                line2: 'Ladakh Valley'
            },
            description:
                'This journey unfolds a breathtaking experience of rugged landscapes, ancient traditions, and peaceful solitude. Nestled in the Himalayas, Ladakh is known for its dramatic mountains, crystal-clear lakes, and centuries-old monasteries.',
            items: [
                {
                    image: '/images/ladakh/grid-image1.png',
                    badge: 'Most Interesting',
                    subtitle: 'HIMALAYAN LANDSCAPE',
                    title: 'Pangong Lake',
                    hasAvatars: true,
                },
                {
                    image: '/images/ladakh/grid-image2.png',
                    subtitle: 'HIGH ALTITUDE PASS',
                    title: 'Khardung La Drive',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image3.png',
                    subtitle: 'CULTURE AND SPIRITUALITY',
                    title: 'Hemis Monastery',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image4.png',
                    subtitle: 'ADVENTURE EXPERIENCE',
                    title: 'Nubra Valley Safari',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image5.png',
                    subtitle: 'UNFORGETTABLE EXPERIENCE',
                    title: 'Stargazing in Ladakh',
                    videoId: 'xZ774uoCkLw'
                }
            ]
        },

        beauty: {
            description:
                'The beauty of Ladakh Valley lies in its raw and untouched landscapes, where towering mountains meet vast deserts and serene lakes. The region’s clear skies, ancient monasteries, and minimal human interference create a sense of peace that feels timeless and profound.',
            mapImage: '/svgs/map.svg'
        },

        villas: {
            title: {
                line1: 'A Selection Of Exceptional',
                line2: 'Stays And Retreats'
            },
            hotels: [
                {
                    id: 1,
                    image: '/images/ladakh/sec4-image1.png',
                    name: 'The Grand Dragon Ladakh',
                    location: 'Leh, Ladakh, India',
                    price: 260,
                    rating: 4.8
                },
                {
                    id: 2,
                    image: '/images/ladakh/sec4-image2.png',
                    name: 'Nimmu House',
                    location: 'Leh, Ladakh, India',
                    price: 245,
                    rating: 4.9
                },
                {
                    id: 3,
                    image: '/images/ladakh/sec4-image3.png',
                    name: 'Lchang Nang Retreat',
                    location: 'Leh, Ladakh, India',
                    price: 230,
                    rating: 4.8
                }
            ]
        },

        trek: {
            title: {
                line1: 'Enjoy Your',
                line2: 'Adventure'
            },
            mapImage: '/images/ladakh/trek-locator.png',
            points: [
                { name: 'Khardung La', height: 'MT +5359', top: '25%', left: '50%' },
                { name: 'Pangong Lake', height: 'MT +4250', top: '55%', left: '65%' },
                { name: 'Nubra Valley', height: 'MT +3048', top: '70%', left: '40%' },
                { name: 'Hemis Monastery', height: 'Cultural Site', top: '45%', left: '30%' }
            ]
        },

        blog: {
            title: {
                line1: 'Travel Blog',
                line2: 'Around Ladakh'
            },
            description:
                'This blog shares inspiring travel stories, personal journeys, and cultural insights that highlight Ladakh’s rugged beauty, spiritual heritage, and unforgettable high-altitude experiences.',
            posts: [
                {
                    id: 1,
                    image: '/images/ladakh/blog-image1.png',
                    category: 'TRAVEL',
                    title: 'Life at High Altitude in Ladakh',
                    author: 'Pambudi Smith',
                    date: '10th June 2023',
                    authorImage: '/images/blogger1.png',
                    isLarge: true
                },
                {
                    id: 2,
                    image: '/images/ladakh/blog-image2.png',
                    category: 'TRAVEL',
                    title: 'Exploring the Serenity of Pangong Lake',
                    author: 'Admin',
                    date: '14th June 2023'
                },
                {
                    id: 3,
                    image: '/images/ladakh/blog-image3.png',
                    category: 'TRAVEL',
                    title: 'Monasteries and Traditions of Ladakh',
                    author: 'Admin',
                    date: '18th June 2023'
                }
            ]
        }
    },
    {
        id: 'Guwahati',
        name: 'Ladakh Valley',
        hero: {
            backgroundImage: '/images/ladakh/hero-image.png',
            badgeText: 'Where Mountains, Monasteries, and Silence Converge',
            titlePart1: 'Discover the',
            titlePart2: 'Spirit ',
            titleAccent: 'of Ladakh',
            features: {
                map: 'Provides a visual guide to mountain passes, monasteries, lakes, and remote valleys.',
                user: 'Offers travelers a deeper understanding of high-altitude life, culture, and landscapes.'
            }
        },

        journey: {
            title: {
                line1: 'The Journey Of',
                line2: 'Ladakh Valley'
            },
            description:
                'This journey unfolds a breathtaking experience of rugged landscapes, ancient traditions, and peaceful solitude. Nestled in the Himalayas, Ladakh is known for its dramatic mountains, crystal-clear lakes, and centuries-old monasteries.',
            items: [
                {
                    image: '/images/ladakh/grid-image1.png',
                    badge: 'Most Interesting',
                    subtitle: 'HIMALAYAN LANDSCAPE',
                    title: 'Pangong Lake',
                    hasAvatars: true,
                },
                {
                    image: '/images/ladakh/grid-image2.png',
                    subtitle: 'HIGH ALTITUDE PASS',
                    title: 'Khardung La Drive',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image3.png',
                    subtitle: 'CULTURE AND SPIRITUALITY',
                    title: 'Hemis Monastery',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image4.png',
                    subtitle: 'ADVENTURE EXPERIENCE',
                    title: 'Nubra Valley Safari',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/ladakh/grid-image5.png',
                    subtitle: 'UNFORGETTABLE EXPERIENCE',
                    title: 'Stargazing in Ladakh',
                    videoId: 'xZ774uoCkLw'
                }
            ]
        },

        beauty: {
            description:
                'The beauty of Ladakh Valley lies in its raw and untouched landscapes, where towering mountains meet vast deserts and serene lakes. The region’s clear skies, ancient monasteries, and minimal human interference create a sense of peace that feels timeless and profound.',
            mapImage: '/svgs/map.svg'
        },

        villas: {
            title: {
                line1: 'A Selection Of Exceptional',
                line2: 'Stays And Retreats'
            },
            hotels: [
                {
                    id: 1,
                    image: '/images/ladakh/sec4-image1.png',
                    name: 'The Grand Dragon Ladakh',
                    location: 'Leh, Ladakh, India',
                    price: 260,
                    rating: 4.8
                },
                {
                    id: 2,
                    image: '/images/ladakh/sec4-image2.png',
                    name: 'Nimmu House',
                    location: 'Leh, Ladakh, India',
                    price: 245,
                    rating: 4.9
                },
                {
                    id: 3,
                    image: '/images/ladakh/sec4-image3.png',
                    name: 'Lchang Nang Retreat',
                    location: 'Leh, Ladakh, India',
                    price: 230,
                    rating: 4.8
                }
            ]
        },

        trek: {
            title: {
                line1: 'Enjoy Your',
                line2: 'Adventure'
            },
            mapImage: '/images/ladakh/trek-locator.png',
            points: [
                { name: 'Khardung La', height: 'MT +5359', top: '25%', left: '50%' },
                { name: 'Pangong Lake', height: 'MT +4250', top: '55%', left: '65%' },
                { name: 'Nubra Valley', height: 'MT +3048', top: '70%', left: '40%' },
                { name: 'Hemis Monastery', height: 'Cultural Site', top: '45%', left: '30%' }
            ]
        },

        blog: {
            title: {
                line1: 'Travel Blog',
                line2: 'Around Ladakh'
            },
            description:
                'This blog shares inspiring travel stories, personal journeys, and cultural insights that highlight Ladakh’s rugged beauty, spiritual heritage, and unforgettable high-altitude experiences.',
            posts: [
                {
                    id: 1,
                    image: '/images/ladakh/blog-image1.png',
                    category: 'TRAVEL',
                    title: 'Life at High Altitude in Ladakh',
                    author: 'Pambudi Smith',
                    date: '10th June 2023',
                    authorImage: '/images/blogger1.png',
                    isLarge: true
                },
                {
                    id: 2,
                    image: '/images/ladakh/blog-image2.png',
                    category: 'TRAVEL',
                    title: 'Exploring the Serenity of Pangong Lake',
                    author: 'Admin',
                    date: '14th June 2023'
                },
                {
                    id: 3,
                    image: '/images/ladakh/blog-image3.png',
                    category: 'TRAVEL',
                    title: 'Monasteries and Traditions of Ladakh',
                    author: 'Admin',
                    date: '18th June 2023'
                }
            ]
        }
    },
    {
        id: 'Barote',
        name: 'Barote Valley',
        hero: {
            backgroundImage: '/images/barote/hero-image.png',
            badgeText: 'Where Mountains, Monasteries, and Silence Converge',
            titlePart1: 'Discover the',
            titlePart2: 'Spirit ',
            titleAccent: 'of Barote',
            features: {
                map: 'Provides a visual guide to mountain passes, monasteries, lakes, and remote valleys.',
                user: 'Offers travelers a deeper understanding of high-altitude life, culture, and landscapes.'
            }
        },

        journey: {
            title: {
                line1: 'The Journey Of',
                line2: 'Barote Valley'
            },
            description:
                'This journey unfolds a breathtaking experience of rugged landscapes, ancient traditions, and peaceful solitude. Nestled in the Himalayas, Ladakh is known for its dramatic mountains, crystal-clear lakes, and centuries-old monasteries.',
            items: [
                {
                    image: '/images/ladakh/grid-image1.png',
                    badge: 'Most Interesting',
                    subtitle: 'HIMALAYAN LANDSCAPE',
                    title: 'Pangong Lake',
                    hasAvatars: true,
                },
                {
                    image: '/images/barote/grid-image2.png',
                    subtitle: 'HIGH ALTITUDE PASS',
                    title: 'Khardung La Drive',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/barote/grid-image3.png',
                    subtitle: 'CULTURE AND SPIRITUALITY',
                    title: 'Hemis Monastery',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/barote/grid-image4.png',
                    subtitle: 'ADVENTURE EXPERIENCE',
                    title: 'Nubra Valley Safari',
                    videoId: 'xZ774uoCkLw'
                },
                {
                    image: '/images/barote/grid-image5.png',
                    subtitle: 'UNFORGETTABLE EXPERIENCE',
                    title: 'Stargazing in barote',
                    videoId: 'xZ774uoCkLw'
                }
            ]
        },

        beauty: {
            description:
                'The beauty of barote Valley lies in its raw and untouched landscapes, where towering mountains meet vast deserts and serene lakes. The region’s clear skies, ancient monasteries, and minimal human interference create a sense of peace that feels timeless and profound.',
            mapImage: '/svgs/map.svg'
        },

        villas: {
            title: {
                line1: 'A Selection Of Exceptional',
                line2: 'Stays And Retreats'
            },
            hotels: [
                {
                    id: 1,
                    image: '/images/barote/sec4-image1.png',
                    name: 'The Grand Dragon barote',
                    location: 'Leh, barote, India',
                    price: 260,
                    rating: 4.8
                },
                {
                    id: 2,
                    image: '/images/barote/sec4-image2.png',
                    name: 'Nimmu House',
                    location: 'Leh, barote, India',
                    price: 245,
                    rating: 4.9
                },
                {
                    id: 3,
                    image: '/images/barote/sec4-image3.png',
                    name: 'Lchang Nang Retreat',
                    location: 'Leh, barote, India',
                    price: 230,
                    rating: 4.8
                }
            ]
        },

        trek: {
            title: {
                line1: 'Enjoy Your',
                line2: 'Adventure'
            },
            mapImage: '/images/barote/trek-locator.png',
            points: [
                { name: 'Khardung La', height: 'MT +5359', top: '25%', left: '50%' },
                { name: 'Pangong Lake', height: 'MT +4250', top: '55%', left: '65%' },
                { name: 'Nubra Valley', height: 'MT +3048', top: '70%', left: '40%' },
                { name: 'Hemis Monastery', height: 'Cultural Site', top: '45%', left: '30%' }
            ]
        },

        blog: {
            title: {
                line1: 'Travel Blog',
                line2: 'Around barote'
            },
            description:
                'This blog shares inspiring travel stories, personal journeys, and cultural insights that highlight barote’s rugged beauty, spiritual heritage, and unforgettable high-altitude experiences.',
            posts: [
                {
                    id: 1,
                    image: '/images/barote/blog-image1.png',
                    category: 'TRAVEL',
                    title: 'Life at High Altitude in barote',
                    author: 'Pambudi Smith',
                    date: '10th June 2023',
                    authorImage: '/images/blogger1.png',
                    isLarge: true
                },
                {
                    id: 2,
                    image: '/images/barote/blog-image2.png',
                    category: 'TRAVEL',
                    title: 'Exploring the Serenity of Pangong Lake',
                    author: 'Admin',
                    date: '14th June 2023'
                },
                {
                    id: 3,
                    image: '/images/barote/blog-image3.png',
                    category: 'TRAVEL',
                    title: 'Monasteries and Traditions of barote',
                    author: 'Admin',
                    date: '18th June 2023'
                }
            ]
        }
    }
]
