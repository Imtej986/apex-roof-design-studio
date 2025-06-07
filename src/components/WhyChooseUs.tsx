
import { Shield, Clock, Award, Users, Leaf, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Shield,
      number: "25",
      label: "Year Warranty",
      description: "Comprehensive coverage on all installations"
    },
    {
      icon: Clock,
      number: "< 2",
      label: "Hour Response",
      description: "Emergency repairs and assessments"
    },
    {
      icon: Award,
      number: "5.0",
      label: "Star Rating",
      description: "Consistent customer satisfaction"
    },
    {
      icon: Users,
      number: "50+",
      label: "Expert Team",
      description: "Certified roofing professionals"
    },
    {
      icon: Leaf,
      number: "100%",
      label: "Eco-Friendly",
      description: "Sustainable materials and practices"
    },
    {
      icon: Wrench,
      number: "40+",
      label: "Years Experience",
      description: "Proven track record of excellence"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-slate-900 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="text-amber-400">Elite Roofing?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Four decades of excellence, innovation, and unwavering commitment to 
            protecting what matters most to you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/50">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-amber-400 font-semibold">{stat.label}</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8">Certified & Trusted</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
              <span className="text-white font-semibold">GAF Master Elite</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
              <span className="text-white font-semibold">CertainTeed SELECT</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
              <span className="text-white font-semibold">NRCA Member</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
              <span className="text-white font-semibold">BBB A+ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
