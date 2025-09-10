import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';
import { getThemeClasses } from '../theme/themeUtils';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Water Treatment', 'Sustainability', 'Technology', 'Industry News', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Water Treatment: AI-Powered Solutions',
      excerpt: 'Discover how artificial intelligence is revolutionizing water treatment processes, improving efficiency and reducing costs while maintaining water quality standards.',
      category: 'Technology',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Sustainable Water Management in Urban Areas',
      excerpt: 'Learn about innovative approaches to managing water resources in growing cities, including rainwater harvesting and greywater recycling systems.',
      category: 'Sustainability',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Case Study: Industrial Water Treatment Success Story',
      excerpt: 'How we helped a major manufacturing facility reduce water consumption by 40% while improving product quality and compliance.',
      category: 'Case Studies',
      author: 'Engineering Team',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'New Regulations in Water Treatment: What You Need to Know',
      excerpt: 'Stay updated on the latest regulatory changes affecting water treatment facilities and how to ensure compliance.',
      category: 'Industry News',
      author: 'Legal Team',
      date: '2024-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Advanced Filtration Technologies: A Comprehensive Guide',
      excerpt: 'Explore the latest developments in water filtration technology, from membrane systems to biological treatment methods.',
      category: 'Water Treatment',
      author: 'Dr. Robert Martinez',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Green Water Treatment: Eco-Friendly Solutions for Tomorrow',
      excerpt: 'Discover sustainable water treatment methods that protect the environment while delivering clean, safe water.',
      category: 'Sustainability',
      author: 'Environmental Team',
      date: '2024-01-03',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 7,
      title: 'Smart Monitoring Systems in Water Treatment Plants',
      excerpt: 'How IoT and real-time monitoring are transforming water treatment operations and improving efficiency.',
      category: 'Technology',
      author: 'Tech Team',
      date: '2024-01-01',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 8,
      title: 'Water Scarcity Solutions: Global Approaches and Success Stories',
      excerpt: 'Learn from successful water management projects around the world and how they can be adapted locally.',
      category: 'Sustainability',
      author: 'Global Team',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <PageTemplate
      title="Blog"
      description="Stay updated with the latest insights, trends, and innovations in water treatment technology and sustainability."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.background.gradient} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-16">
              Water Treatment Insights
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto pt-4 pb-16">
              Expert knowledge, industry trends, and innovative solutions for water management
            </p>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-16`}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
                Featured Article
              </h2>
              <div className={`${getThemeClasses.card} overflow-hidden`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className={`text-sm ${getThemeClasses.text.tertiary}`}>
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                      {featuredPost.title}
                    </h3>
                    <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className={`font-medium ${getThemeClasses.text.primary}`}>
                            {featuredPost.author}
                          </div>
                          <div className={`text-sm ${getThemeClasses.text.tertiary}`}>
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <button className={getThemeClasses.button.primary}>
                        Read Full Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl font-bold text-center mb-8 ${getThemeClasses.text.primary}`}>
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : `${getThemeClasses.buttonSecondary}`
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-2xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className={`${getThemeClasses.card} overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300`}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-sm ${getThemeClasses.text.tertiary}`}>
                        {post.readTime}
                      </span>
                      <span className={`text-sm ${getThemeClasses.text.tertiary}`}>
                        •
                      </span>
                      <span className={`text-sm ${getThemeClasses.text.tertiary}`}>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${getThemeClasses.text.primary}`}>
                      {post.title}
                    </h3>
                    <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className={`text-sm ${getThemeClasses.text.secondary}`}>
                          {post.author}
                        </span>
                      </div>
                      <button className={`${getThemeClasses.button.secondary} text-sm px-4 py-2`}>
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Stay Updated
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Get the latest water treatment insights, industry news, and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className={`${getThemeClasses.form.input} flex-1`}
              />
              <button className={getThemeClasses.button.primary}>
                Subscribe
              </button>
            </div>
            <p className={`text-sm mt-4 ${getThemeClasses.text.tertiary}`}>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Have a Story to Share?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              We're always looking for industry experts and thought leaders to contribute to our blog. 
              Share your insights and help shape the future of water treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Submit Article
              </button>
              <button className={getThemeClasses.button.secondary}>
                Become a Contributor
              </button>
              <button className={getThemeClasses.button.success}>
                Contact Editorial Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Blog;
