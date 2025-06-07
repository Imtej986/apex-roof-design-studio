
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'w-[95%] max-w-6xl' 
        : 'w-[90%] max-w-7xl'
    }`}>
      <div className={`bg-slate-900/20 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-500 ${
        isScrolled ? 'shadow-2xl shadow-slate-900/20' : 'shadow-lg shadow-slate-900/10'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Elite<span className="text-amber-400">Roofing</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-amber-400 hover:text-amber-300 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-400 hover:text-amber-300 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">info@eliteroofing.com</span>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                Free Estimate
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-white/20 mt-4">
              <div className="px-2 pt-4 pb-6 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Free Estimate
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
