// BusinessGuideArticle.tsx
import type { FC } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Facebook, Heart, Mic, Clock } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface FeaturedItemProps {
  type: 'article' | 'podcast';
  imageUrl: string;
  title: string;
  description: string;
  duration: number;
}

// --- MOCK DATA ---
const featuredArticles: Omit<FeaturedItemProps, 'type'>[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=80',
    title: 'How to Get Started as a Solopreneur',
    description: 'Taking (and loving) the plunge into self-employment.',
    duration: 10,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=300&q=80',
    title: 'How Austin Became a Startup Powerhouse',
    description: 'The inside story of the city\'s rise in the tech world.',
    duration: 12,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80',
    title: 'Can a CPA Start an LLC for a Client?',
    description: 'Everything you need to know before you file.',
    duration: 8,
  },
];

const featuredPodcasts: Omit<FeaturedItemProps, 'type'>[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    title: 'John Diamonon',
    description: 'On building a brand that lasts.',
    duration: 45,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
    title: 'Hera Coe & Rubyana Hernandez',
    description: 'The power of partnership.',
    duration: 52,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    title: 'Chris Garza',
    description: 'Scaling your business from day one.',
    duration: 38,
  },
];


// --- REUSABLE COMPONENTS ---

const FeaturedItem: FC<FeaturedItemProps> = ({ type, imageUrl, title, description, duration }) => (
  <a href="#" className="group flex items-start gap-4">
    <Image
      src={imageUrl}
      alt={title}
      width={type === 'podcast' ? 64 : 96}
      height={type === 'podcast' ? 64 : 80}
      className={`object-cover ${type === 'podcast' ? 'w-16 h-16 rounded-full' : 'w-24 h-20 rounded-md'}`}
    />
    <div className="flex-1">
      <h4 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="flex items-center mt-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
        {type === 'article' ? <Clock size={12} className="mr-1.5" /> : <Mic size={12} className="mr-1.5" />}
        <span>{duration} Min {type === 'article' ? 'Read' : 'Listen'}</span>
      </div>
    </div>
  </a>
);

const Sidebar: FC = () => (
  <aside className="mt-12 lg:mt-0">
    <div className="space-y-12">
      {/* Featured Articles Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 pb-3 border-b-2 border-gray-200 mb-6">
          FEATURED ARTICLES
        </h3>
        <div className="space-y-6">
          {featuredArticles.map((item) => (
            <FeaturedItem key={item.title} {...item} type="article" />
          ))}
        </div>
      </div>
      
      {/* Featured Podcast Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 pb-3 border-b-2 border-gray-200 mb-6">
          FEATURED PODCAST EPISODES
        </h3>
        <div className="space-y-6">
          {featuredPodcasts.map((item) => (
            <FeaturedItem key={item.title} {...item} type="podcast" />
          ))}
        </div>
      </div>
    </div>
  </aside>
);

// --- MAIN COMPONENT ---

const BusinessGuideArticle: FC = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">

          {/* Main Article Content */}
          <main className="lg:col-span-2">
            <article>
              {/* Article Header */}
              <header className="text-center">
                <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                  Business Formation
                </p>
                <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  A Step-by-Step Guide to Starting Your Own Business
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  A one-stop shop for aspiring entrepreneurs.
                </p>
              </header>

              {/* Meta Info & Actions */}
              <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm border-y border-gray-200 py-4">
                <div>
                  <p className="font-bold text-gray-800">WORDS BY BRYANNA FIORI, J.D.</p>
                  <p className="text-gray-500">PUBLISHED AUGUST 25, 2024</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">Share:</span>
                  <a href="#" aria-label="Share by email" className="text-gray-400 hover:text-gray-700">
                    <Mail size={20} />
                  </a>
                  <a href="#" aria-label="Share on LinkedIn" className="text-gray-400 hover:text-gray-700">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" aria-label="Share on Facebook" className="text-gray-400 hover:text-gray-700">
                    <Facebook size={20} />
                  </a>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors ml-4">
                    <Heart size={20} />
                    <span className="font-semibold">107</span>
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <figure className="my-8">
                  <Image
                    className="w-full h-auto rounded-lg shadow-md"
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
                    alt="A team of entrepreneurs in a business meeting"
                    width={1200}
                    height={800}
                  />
              </figure>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl">
                  <span className="float-left mr-3 mt-1 text-7xl font-bold text-gray-900">S</span>
                  tarting your own business is an exciting journey that requires careful planning, preparation, and execution. This comprehensive guide will take you through the essential steps, from conceptualizing an idea and in-depth brainstorming and market research to legal requirements and funding, we&#39;ve got you covered.
                </p>

                <h2 className="mt-12">How To Start A Business: Proper Planning and Preparation</h2>
                <p>
                  Starting your own business is not just about having a great idea; it&#39;s about turning that idea into a sustainable and profitable venture. Proper planning and preparation are the cornerstones of a strong business and the foundation for success. Planning helps you foresee potential challenges and prepare solutions in advance. Additionally, it ensures that you have a clear roadmap to guide your business decisions and actions.
                </p>

                <h2 className="mt-12">Brief Overview of Key Steps Involved in Starting a Business</h2>
                <p>
                  We&#39;ll walk you through all the steps required to start a business, so you can feel confident understanding the key components of getting your company off the ground, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Conceptualizing your idea</li>
                  <li>Conducting market research</li>
                  <li>Creating a business plan</li>
                  <li>Handling legal requirements</li>
                  <li>Securing funding</li>
                  <li>Launching your business</li>
                </ul>
                <p>
                  Each of these steps is critical, builds upon the previous one, and synergistically helps to ensure that your business is well-prepared for success. There are a lot of questions to ask when starting a business, and we&#39;re here to help you answer them.
                </p>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <Sidebar />

        </div>
      </div>
    </div>
  );
};

export default BusinessGuideArticle;