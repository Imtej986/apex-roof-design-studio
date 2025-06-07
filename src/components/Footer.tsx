
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Residential Roofing",
    "Commercial Roofing",
    "Emergency Repairs",
    "Gutter Systems",
    "Roof Inspection",
    "Maintenance Plans"
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Project Gallery",
    "Testimonials",
    "Free Estimate",
    "Contact Us"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              Elite<span className="text-amber-400">Roofing</span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              For over 40 years, Elite Roofing has been the trusted choice for 
              premium roofing solutions. Protecting what matters most with 
              uncompromising quality and service excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-slate-300">info@eliteroofing.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1" />
                <div className="text-slate-300">
                  <div>123 Elite Roofing Plaza</div>
                  <div>Metropolitan Area, CA 90210</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Certifications</h4>
            <div className="space-y-3 mb-8">
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-amber-400 font-semibold text-sm">GAF Master Elite</div>
                <div className="text-slate-400 text-xs">Certified Contractor</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-amber-400 font-semibold text-sm">BBB A+ Rating</div>
                <div className="text-slate-400 text-xs">Accredited Business</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-amber-400 font-semibold text-sm">NRCA Member</div>
                <div className="text-slate-400 text-xs">Industry Association</div>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Elite Roofing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Warranty Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
