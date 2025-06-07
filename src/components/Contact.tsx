
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Elite Roofing Plaza", "Metropolitan Area, CA 90210"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "24/7 Emergency Line"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@eliteroofing.com", "estimates@eliteroofing.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 7:00 PM", "Emergency: 24/7"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In{" "}
            <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your roofing project? Our expert team is here to help 
            with personalized solutions and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Call Out */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-900 mb-2">Emergency Service</h4>
                <p className="text-red-700 text-sm mb-3">
                  Storm damage? Leaks? We respond immediately to protect your property.
                </p>
                <Button 
                  size="sm" 
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  Call Emergency Line
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h3>
            <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Interactive map would be integrated here</p>
                <p className="text-slate-500 text-sm">123 Elite Roofing Plaza, Metropolitan Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
