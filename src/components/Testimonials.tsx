import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ramesh S.',
      role: 'Hotel Owner',
      content: 'Scale Point transformed our online visibility and brought in 5X more leads in 3 months. Their SEO strategies are simply outstanding.',
      rating: 5,
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Sneha M.',
      role: 'Agency Founder',
      content: 'The automation tools helped us cut 60% of our manual work. Our team can now focus on strategic growth instead of repetitive tasks.',
      rating: 5,
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Arjun K.',
      role: 'Restaurant Chain Owner',
      content: 'Their OTA management services increased our bookings by 300%. The revenue optimization strategies are game-changing.',
      rating: 5,
      image: '/api/placeholder/64/64'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-heading">
            What Our Clients Say
          </h2>
          <p className="section-subheading">
            Real results from real businesses. See how we've helped companies achieve remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 fade-in relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '5X', label: 'Average Growth' },
            { number: '300%', label: 'Revenue Increase' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;