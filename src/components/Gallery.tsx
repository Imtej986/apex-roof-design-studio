
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, isVisible } = useScrollAnimation();

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "materials", label: "Premium Materials" }
  ];

  const projects = [
    {
      id: 1,
      category: "residential",
      title: "Luxury Estate Renovation",
      location: "Beverly Hills",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=600&q=80",
      description: "Complete roof renovation with premium slate tiles"
    },
    {
      id: 2,
      category: "commercial",
      title: "Corporate Headquarters",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
      description: "Modern commercial roofing system with solar integration"
    },
    {
      id: 3,
      category: "residential",
      title: "Modern Family Home",
      location: "Westside",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
      description: "Contemporary design with energy-efficient materials"
    },
    {
      id: 4,
      category: "materials",
      title: "Premium Copper Roofing",
      location: "Historic District",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&q=80",
      description: "Hand-crafted copper installation with custom detailing"
    },
    {
      id: 5,
      category: "commercial",
      title: "Retail Complex",
      location: "Shopping District",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
      description: "Large-scale commercial project with weather-resistant systems"
    },
    {
      id: 6,
      category: "residential",
      title: "Coastal Villa",
      location: "Malibu",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=600&q=80",
      description: "Salt-resistant roofing for oceanfront property"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="gallery" 
      ref={ref}
      className={`py-24 bg-slate-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our{" "}
            <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Discover the artistry and precision that defines our work. Each project 
            represents our commitment to excellence and innovation.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.id
                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30"
                    : "text-slate-600 hover:text-slate-900 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-amber-400 text-sm font-medium mb-1">{project.location}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
