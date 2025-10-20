import { Wrench, BookOpen, Package, HeadsetIcon, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Bearing Maintenance & Reconditioning",
      description: "Comprehensive maintenance services to extend bearing life and optimize performance. Our reconditioning services restore bearings to near-original specifications.",
      features: [
        "Inspection and diagnosis",
        "Cleaning and lubrication",
        "Component replacement",
        "Performance testing"
      ]
    },
    {
      icon: BookOpen,
      title: "Technical Consulting",
      description: "Expert guidance on bearing selection, application engineering, and system optimization from our experienced technical team.",
      features: [
        "Bearing selection assistance",
        "Load and speed analysis",
        "Failure analysis",
        "Technical training"
      ]
    },
    {
      icon: Package,
      title: "Custom Product Sourcing",
      description: "Specialized sourcing services for hard-to-find bearings and custom specifications through our global supplier network.",
      features: [
        "Global supplier network",
        "Custom specifications",
        "Competitive pricing",
        "Quality assurance"
      ]
    },
    {
      icon: Settings,
      title: "Installation Support",
      description: "On-site installation assistance and guidance to ensure proper bearing mounting and alignment for optimal performance.",
      features: [
        "Installation planning",
        "On-site support",
        "Alignment services",
        "Documentation"
      ]
    },
    {
      icon: HeadsetIcon,
      title: "After-Sales Support",
      description: "Dedicated support team available for troubleshooting, warranty claims, and technical assistance throughout product lifecycle.",
      features: [
        "24/7 support availability",
        "Warranty management",
        "Technical troubleshooting",
        "Replacement coordination"
      ]
    },
    {
      icon: TrendingUp,
      title: "Inventory Management",
      description: "Customized inventory solutions to reduce downtime and optimize stock levels for your critical bearing requirements.",
      features: [
        "Consignment programs",
        "Just-in-time delivery",
        "Stock monitoring",
        "Predictive maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">Our Services</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 animate-fade-in">
            Comprehensive support services for all your bearing needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-3">
                  AS
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Amit Sharma</div>
                  <div className="text-sm text-muted-foreground">Manufacturing Manager</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Exceptional service and product quality. Their technical team helped us select the perfect bearings for our high-speed applications. Downtime reduced significantly."
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-3">
                  RP
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Rajesh Patel</div>
                  <div className="text-sm text-muted-foreground">Operations Director</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The reconditioning service saved us thousands in replacement costs. Fast turnaround and the bearings perform like new. Highly recommend!"
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-3">
                  MK
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Meera Krishnan</div>
                  <div className="text-sm text-muted-foreground">Maintenance Engineer</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Outstanding after-sales support. Their team responds quickly and provides excellent technical guidance. A reliable partner for our operations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Need Expert Assistance?</h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto px-4">
            Our technical team is ready to help you with bearing selection, maintenance, or any technical challenge.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
