
import { Users, Target, Leaf, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project executed with meticulous attention to detail and craftsmanship."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Honest assessments, transparent pricing, and standing behind our work."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly materials and practices that protect your home and the environment."
    },
    {
      icon: Users,
      title: "Excellence",
      description: "Four decades of roofing mastery serving the metropolitan area."
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-24 bg-slate-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Built on a Foundation of{" "}
              <span className="text-amber-500">Trust</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For over four decades, Elite Roofing has been the premier choice for discerning 
              homeowners, commercial property managers, and architects who demand nothing less 
              than perfection. We don't just install roofs—we create protective masterpieces 
              that stand the test of time.
            </p>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Our mission is simple: to provide uncompromising quality, innovative solutions, 
              and service that exceeds expectations. Every project is a testament to our 
              commitment to excellence and your peace of mind.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`group hover:bg-white/80 p-4 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mr-3 group-hover:bg-amber-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/30">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Elite Roofing team"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">40+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">5,000+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
