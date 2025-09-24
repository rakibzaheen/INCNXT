// ArticlePage.tsx
import React from 'react';
import { Linkedin, Facebook, Twitter, Link, Bookmark, Clock, Mic } from 'lucide-react';

// SECTION: TypeScript Interfaces
// Defining types for our data structures for type safety.

interface Author {
  name: string;
  title: string;
}

interface FeaturedArticle {
  imageUrl: string;
  title: string;
  category: string;
  readTime: number;
}

interface PodcastEpisode {
  imageUrl: string;
  title: string;
  guest: string;
  duration: number;
}


// SECTION: Mock Data
// Using placeholder data to populate the component.

const authorData: Author = {
  name: 'Stormi. Harvey, J.D.',
  title: 'Author',
};

const featuredArticlesData: FeaturedArticle[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=80',
    title: 'How to Get Started as a Consultant',
    category: 'CAREER ADVICE',
    readTime: 12,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1573496774435-5387425531a2?w=300&q=80',
    title: 'How Austin Became a Startup Powerhouse',
    category: 'BUSINESS GROWTH',
    readTime: 9,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80',
    title: 'Can a CPA Start an LLC for a Client?',
    category: 'LEGAL',
    readTime: 14,
  },
];

const podcastEpisodesData: PodcastEpisode[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    title: 'John Diamonon',
    guest: 'w/ special guest',
    duration: 59,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    title: 'Hon-Gni & Rubyana',
    guest: 'Founders of...',
    duration: 62,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80',
    title: 'Chris Garza',
    guest: 'w/ MKG founders',
    duration: 48,
  },
];


// SECTION: Reusable Sub-components

const ShareButton = ({ children }: { children: React.ReactNode }) => (
  <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
    {children}
  </button>
);

const SidebarSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-center mb-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <h3 className="mx-4 text-xs font-semibold tracking-widest text-gray-500 uppercase">{title}</h3>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const FeaturedArticleCard = ({ article }: { article: FeaturedArticle }) => (
  <a href="#" className="group flex items-center gap-4">
    <img src={article.imageUrl} alt={article.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
    <div>
      <h4 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200 leading-tight">
        {article.title}
      </h4>
      <p className="text-xs text-gray-500 mt-1">
        {article.category} • <span className="inline-flex items-center gap-1"><Clock size={12} /> {article.readTime} min read</span>
      </p>
    </div>
  </a>
);

const PodcastEpisodeCard = ({ episode }: { episode: PodcastEpisode }) => (
  <a href="#" className="group flex items-center gap-4">
    <img src={episode.imageUrl} alt={episode.title} className="w-16 h-16 object-cover rounded-full flex-shrink-0" />
    <div>
      <h4 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
        {episode.title}
      </h4>
      <p className="text-sm text-gray-500 mt-1">
        {episode.guest} • <span className="inline-flex items-center gap-1"><Mic size={12} /> {episode.duration} mins</span>
      </p>
    </div>
  </a>
);

// SECTION: Main Component

export const ArticlePage = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">

          {/* Left Column: Article Content */}
          <main className="lg:col-span-2">
            
            {/* Article Header */}
            <header className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">Business Formation</p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 !leading-tight mb-4">
                Choosing the Right Business Structure for Your New Business Idea
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                It's crucial to align your business's legal framework with its goals from the very start.
              </p>
            </header>

            {/* Author & Share section */}
            <div className="flex flex-wrap items-center justify-between border-y border-gray-200 py-4 mb-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{authorData.name}</p>
                  <p className="text-xs text-gray-500">Published: March 04, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <ShareButton><Linkedin size={18} /></ShareButton>
                <ShareButton><Facebook size={18} /></ShareButton>
                <ShareButton><Twitter size={18} /></ShareButton>
                <ShareButton><Link size={18} /></ShareButton>
                <div className="w-px h-6 bg-gray-200 mx-2"></div>
                <button className="flex items-center space-x-2 text-sm font-medium p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
                  <Bookmark size={18} />
                  <span>1</span>
                </button>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none text-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" 
                alt="Business meeting around a table"
                className="rounded-lg mb-8 w-full"
              />
              <p>
                <span className="float-left text-7xl font-bold mr-3 mt-1 text-gray-900">C</span>ongratulations on your new business idea! Now comes the exciting part: Turning your vision into reality. But before you dive into raising capital or creating an organizational chart, one critical decision is choosing the right business structure.
              </p>
              <p>
                Creating a business structure may sound complex, but the guide below will help you navigate the process. While you may not realize it yet, the structure you choose for your business will affect how you pay taxes, liability exposure, and manage your day-to-day ops. Let's break down the different business entity types to help you pick the best business structure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Is a Business Structure?</h2>
              <p>
                Think of a business structure as a house. While it isn’t a physical object, it does provide the framework for your business's legal and financial operations. Additionally, there are different types of structures, each with its own set of rules and benefits.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=1200&q=80" 
                alt="Two people in a casual business meeting"
                className="rounded-lg my-8 w-full"
              />
              <p>
                Choosing the right business structure is like choosing the right kind of house for your needs. A small bakery might not need the same structure as a tech startup planning to go public. The bakery may be best as a sole proprietorship if its owner is small, has few liabilities, and focuses on local customers. However, the tech company might need a structure for rapid growth, liability protection for its founders, and easier access to venture capital. The choice of structure affects almost everything. It influences how you're taxed, your personal liability, and the paperwork you need to file. So, it's crucial to align your business's legal framework with its goals from the very start.
              </p>
            </article>
             <article className="prose prose-lg max-w-none text-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" 
                alt="Business meeting around a table"
                className="rounded-lg mb-8 w-full"
              />
              <p>
                <span className="float-left text-7xl font-bold mr-3 mt-1 text-gray-900">C</span>ongratulations on your new business idea! Now comes the exciting part: Turning your vision into reality. But before you dive into raising capital or creating an organizational chart, one critical decision is choosing the right business structure.
              </p>
              <p>
                Creating a business structure may sound complex, but the guide below will help you navigate the process. While you may not realize it yet, the structure you choose for your business will affect how you pay taxes, liability exposure, and manage your day-to-day ops. Let's break down the different business entity types to help you pick the best business structure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Is a Business Structure?</h2>
              <p>
                Think of a business structure as a house. While it isn’t a physical object, it does provide the framework for your business's legal and financial operations. Additionally, there are different types of structures, each with its own set of rules and benefits.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=1200&q=80" 
                alt="Two people in a casual business meeting"
                className="rounded-lg my-8 w-full"
              />
              <p>
                Choosing the right business structure is like choosing the right kind of house for your needs. A small bakery might not need the same structure as a tech startup planning to go public. The bakery may be best as a sole proprietorship if its owner is small, has few liabilities, and focuses on local customers. However, the tech company might need a structure for rapid growth, liability protection for its founders, and easier access to venture capital. The choice of structure affects almost everything. It influences how you're taxed, your personal liability, and the paperwork you need to file. So, it's crucial to align your business's legal framework with its goals from the very start.
              </p>
            </article>
          </main>

          {/* Right Column: Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-8">
              <SidebarSection title="Featured Articles">
                {featuredArticlesData.map((article, index) => (
                  <FeaturedArticleCard key={index} article={article} />
                ))}
              </SidebarSection>
              
              <SidebarSection title="Featured Podcast Episodes">
                {podcastEpisodesData.map((episode, index) => (
                  <PodcastEpisodeCard key={index} episode={episode} />
                ))}
              </SidebarSection>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};