import { SectionHeader } from './SectionHeader';
import type { PlaceData } from '../../data/places';

interface BlogSectionProps {
    data: PlaceData['blog'];
}

export const BlogSection = ({ data }: BlogSectionProps) => {
    // Helper to find posts
    const largePost = data.posts.find(p => p.isLarge) || data.posts[0];
    const smallPosts = data.posts.filter(p => p.id !== largePost?.id).slice(0, 2);

    return (
        <section className="bg-white py-20 px-8 md:px-24">
            <div className="container mx-auto">
                <SectionHeader
                    title={<>{data.title.line1}<br />{data.title.line2}</>}
                    description={data.description}
                    primaryAction={{ label: 'Reminder me' }}
                    secondaryAction={{ label: 'Learn More' }}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Column - Large Card */}
                    {largePost && (
                        <div className="col-span-1 md:col-span-8 flex flex-col gap-4 group cursor-pointer">
                            <div className="rounded-3xl overflow-hidden aspect-4/3 w-full relative">
                                <img
                                    src={largePost.image}
                                    alt={largePost.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="mt-2">
                                <span className="text-xl font-semibold tracking-widest text-gray-500 uppercase">{largePost.category}</span>
                                <h3 className="text-4xl font-semibold text-gray-900 mt-2 leading-tight">
                                    {largePost.title}
                                </h3>
                                <div className="flex items-center gap-3 mt-4">
                                    {largePost.authorImage && (
                                        <img
                                            src={largePost.authorImage}
                                            alt={largePost.author}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    )}
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">{largePost.author}</p>
                                        <p className="text-xl text-gray-500">{largePost.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Right Column - Two Stacked Cards */}
                    <div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-10 h-full">
                        {smallPosts.map((post) => (
                            <div key={post.id} className="flex flex-col gap-4 group cursor-pointer h-full">
                                <div className="rounded-3xl overflow-hidden w-full h-full relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-xl font-semibold tracking-widest text-gray-500 uppercase">
                                        {post.category}
                                    </span>
                                    <h3 className="text-4xl font-semibold text-gray-900 mt-2 leading-tight">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
