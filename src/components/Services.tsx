import { Search, Bot, Globe, MapPin, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'GMB & Website SEO',
      description: 'Optimize your Google Business Profile and website to rank higher and drive local traffic.',
      features: ['Local SEO optimization', 'Google Business Profile management', 'Keyword research & strategy', 'Technical SEO audits']
    },
    {
      icon: Bot,
      title: 'AI Automation Tools',
      description: 'Automate daily operations, customer interactions, and workflows to save time and boost efficiency.',
      features: ['Workflow automation', 'Chatbot development', 'Customer service automation', 'Data processing tools']
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Build responsive, fast, and SEO-friendly websites tailored to your brand.',
      features: ['Responsive design', 'Performance optimization', 'SEO-friendly structure', 'Custom functionality']
    },
    {
      icon: MapPin,
      title: 'OTA Listings',
      description: 'List and manage your business on Online Travel Agencies for better reach and booking rates.',
      features: ['Multi-platform listings', 'Profile optimization', 'Review management', 'Booking integration']
    },
    {
      icon: TrendingUp,
      title: 'OTA Revenue Management',
      description: 'Smart pricing strategies and automation to maximize profits from OTA platforms.',
      features: ['Dynamic pricing', 'Revenue optimization', 'Performance analytics', 'Automated reporting']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-heading">
            What We Do
          </h2>
          <p className="section-subheading">
            Comprehensive solutions to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-accent/30 rounded-2xl p-8 lg:p-12 fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose <span className="gradient-text">Scale Point</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Proven Strategies that Deliver Results',
              'Dedicated Support Team',
              'Custom Automation Solutions',
              'End-to-End Business Growth Packages',
              'Transparent Pricing',
              '24/7 Customer Support'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;