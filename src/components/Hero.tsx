
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl mt-[100px] font-bold text-white mb-6 leading-tight">
            Protecting What{" "}
            <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Matters
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light">
            Roofing Done Right.
          </p>
          
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Elite craftsmanship meets innovative solutions. We protect your most valuable investment 
            with precision, integrity, and 40 years of roofing excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg group">
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-300 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Shield className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">40+ Years</h3>
              <p className="text-slate-300 text-sm">Of Trusted Excellence</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">5-Star Rated</h3>
              <p className="text-slate-300 text-sm">Customer Satisfaction</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-slate-300 text-sm">Rapid Response Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
