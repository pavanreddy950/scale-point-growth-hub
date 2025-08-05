import { ArrowRight, Target, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Customized growth strategies tailored to your business goals'
    },
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge automation and AI tools for maximum efficiency'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with proven track records'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h2 className="section-heading text-left">
              Who We Are
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Scale Point is a business growth consultancy that leverages the power of AI, automation, and smart SEO to help companies scale. We understand the evolving digital landscape and build customized solutions to meet our clients' goals.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experts combines deep industry knowledge with innovative technology to deliver results that matter. From small businesses to enterprises, we've helped hundreds of companies achieve sustainable growth.
            </p>
            
            <Button 
              size="lg" 
              className="btn-hero-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Features */}
          <div className="fade-in space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;