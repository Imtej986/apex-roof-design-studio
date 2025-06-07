
import { Home, Building, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete roofing solutions for luxury homes, from new installations to premium renovations.",
      features: ["Premium materials", "Custom designs", "25-year warranty", "Expert installation"],
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Large-scale commercial roofing with advanced materials and proven performance.",
      features: ["Industrial-grade systems", "Minimal disruption", "Maintenance plans", "Code compliance"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Wrench,
      title: "Gutter Systems",
      description: "Seamless gutters and comprehensive water management solutions for complete protection.",
      features: ["Seamless installation", "Leaf protection", "Custom colors", "Professional design"],
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "24/7 emergency response team ready to protect your property when disaster strikes.",
      features: ["24/7 availability", "Rapid response", "Insurance assistance", "Temporary solutions"],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-24 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive{" "}
            <span className="text-amber-500">Roofing Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From residential masterpieces to commercial complexes, we deliver 
            exceptional results across every project type and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/50">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
