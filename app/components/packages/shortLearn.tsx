const ShortLearn = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-2">Resources, Guides, and Articles</h3>
            <p>Access guides, FAQs, and resources to educate yourself about business formation, compliance, and growth strategies.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                {
                    title: 'How to Choose the Right Business Structure',
                    excerpt: 'Understand the differences between LLCs, S-Corps, C-Corps, and Nonprofits to make an informed decision for your business.',
                },
                {
                    title: 'Step-by-Step Guide to Forming an LLC',
                    excerpt: 'Learn the essential steps to legally form your LLC and get your business up and running smoothly.',
                },
                {
                    title: 'Top 10 Tips for New Entrepreneurs',
                    excerpt: 'Discover practical tips and strategies to help you succeed as a new business owner.',
                },
                ].map((article, index) => (
                <div key={index} className="border border-orange-300 rounded-lg p-6 flex flex-col hover:shadow-md transition">
                    <h4 className="text-lg font-bold mb-2">{article.title}</h4>
                    <p className="text-gray-  600 flex-grow">{article.excerpt}</p>
                    <a href="#" className="mt-4 text-[#D51F27] font-semibold hover:underline">Read More</a>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ShortLearn;