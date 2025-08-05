import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Why Every Business Needs Automation in 2025',
      excerpt: 'Discover how automation is transforming businesses and why early adoption gives you a competitive edge.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Automation',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Top 5 SEO Mistakes Businesses Make',
      excerpt: 'Learn about the most common SEO pitfalls and how to avoid them to improve your search rankings.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'SEO',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Maximizing Revenue on OTA Platforms',
      excerpt: 'Strategic insights on how to optimize your OTA listings and pricing for maximum profitability.',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Revenue',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-heading">
            Learn & Grow with Us
          </h2>
          <p className="section-subheading">
            Stay ahead with the latest insights on business growth, automation, and digital marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 fade-in group cursor-pointer">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Read More */}
                <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in">
          <div className="bg-accent/30 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on business growth, automation, and digital marketing delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-hero-primary py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;