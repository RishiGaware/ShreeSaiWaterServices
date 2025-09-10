import { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'water-treatment', name: 'Water Treatment', count: 8 },
    { id: 'facilities', name: 'Facilities', count: 6 },
    { id: 'team', name: 'Our Team', count: 5 },
    { id: 'awards', name: 'Awards & Recognition', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Municipal Water Treatment Plant',
      category: 'water-treatment',
      location: 'City Center, Metro Area',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'State-of-the-art municipal water treatment facility serving 500,000 residents.'
    },
    {
      id: 2,
      title: 'Industrial Filtration System',
      category: 'water-treatment',
      location: 'Manufacturing District',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Advanced filtration system for chemical manufacturing plant.'
    },
    {
      id: 3,
      title: 'Main Production Facility',
      category: 'facilities',
      location: 'SSWS Headquarters',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Our main manufacturing and assembly facility.'
    },
    {
      id: 4,
      title: 'R&D Laboratory',
      category: 'facilities',
      location: 'Innovation Center',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Cutting-edge research and development laboratory.'
    },
    {
      id: 5,
      title: 'Engineering Team',
      category: 'team',
      location: 'SSWS Office',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      description: 'Our core engineering team working on new projects.'
    },
    {
      id: 6,
      title: 'Excellence Award 2023',
      category: 'awards',
      location: 'Industry Conference',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Recognized for outstanding contribution to water treatment technology.'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PageTemplate
      title="Gallery"
      description="Explore our projects, facilities, and achievements through images."
    >
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-corporate-blue text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-corporate-blue dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-corporate-blue dark:text-blue-400 mb-3 font-medium">
                  📍 {project.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Our Project Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">1M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your water treatment goals with our 
            proven solutions and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-primary"
            >
              Get Started
            </a>
            <a 
              href="/products" 
              className="btn-secondary"
            >
              View Solutions
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Gallery;
