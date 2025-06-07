
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get{" "}
              <span className="text-amber-400">Started?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Take the first step toward protecting your investment. Get a comprehensive 
              assessment and free estimate from our roofing experts today.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-4" />
                <span className="text-slate-300">Free comprehensive roof inspection</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-4" />
                <span className="text-slate-300">Detailed written estimate within 24 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-4" />
                <span className="text-slate-300">No obligation consultation</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <Phone className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Call Now</div>
                <div className="text-slate-300 text-sm">(555) 123-4567</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <Mail className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Email Us</div>
                <div className="text-slate-300 text-sm">info@eliteroofing.com</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <Calendar className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Schedule</div>
                <div className="text-slate-300 text-sm">Free Inspection</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Estimate</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Property Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>
              
              <div>
                <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-amber-400 focus:outline-none">
                  <option value="" className="text-slate-900">Select Service</option>
                  <option value="residential" className="text-slate-900">Residential Roofing</option>
                  <option value="commercial" className="text-slate-900">Commercial Roofing</option>
                  <option value="repair" className="text-slate-900">Emergency Repair</option>
                  <option value="gutter" className="text-slate-900">Gutter Systems</option>
                </select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-4"
              >
                Get My Free Estimate
              </Button>
            </form>

            <p className="text-slate-400 text-sm mt-4 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
