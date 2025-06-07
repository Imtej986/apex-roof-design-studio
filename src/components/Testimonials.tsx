
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Property Manager",
      company: "Premier Properties",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Elite Roofing transformed our commercial property with exceptional craftsmanship. Their attention to detail and professional approach exceeded all expectations. The project was completed on time and within budget."
    },
    {
      name: "Sarah Martinez",
      role: "Homeowner",
      company: "Beverly Hills",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "After storm damage, Elite Roofing responded within hours and provided a comprehensive solution. Their emergency team was professional, efficient, and restored our peace of mind. Highly recommended!"
    },
    {
      name: "David Chen",
      role: "Architect",
      company: "Modern Design Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working with Elite Roofing on luxury residential projects is always a pleasure. They understand architectural vision and execute with precision. Their expertise in premium materials is unmatched."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our{" "}
            <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry professionals and 
            homeowners say about their experience with Elite Roofing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-sm text-amber-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600">Referral Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">A+</div>
                <div className="text-sm text-slate-600">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
