import { Linkedin, MessageCircle, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'GMB & Website SEO',
    'AI Automation Tools',
    'Website Development',
    'OTA Listings',
    'Revenue Management'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/scalepoint', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/917719756319', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://instagram.com/scalepoint', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-medium"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">
              Scale Point
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Accelerating business growth through smart automation, strategic SEO, and innovative digital solutions. Your partner in scaling success.
            </p>
            <div className="flex items-center space-x-2 text-secondary-foreground/80">
              <span className="font-medium">📞 +91 77197 56319</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-secondary-foreground/80 font-medium">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-secondary-foreground/80 font-medium">Stay Updated:</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-2 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/80 text-sm">
              © 2025 Scale Point. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#contact"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;