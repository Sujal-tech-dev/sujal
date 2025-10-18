import { Factory, Car, Zap, Building2, Ship, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "High-precision bearings for machine tools, production equipment, and automated systems requiring reliability and accuracy.",
      applications: [
        "CNC machines",
        "Production lines",
        "Robotic systems",
        "Assembly equipment"
      ],
      solutions: "Ball bearings, roller bearings, precision bearings"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Specialized bearings for automotive manufacturing, testing equipment, and aftermarket applications.",
      applications: [
        "Engine components",
        "Transmission systems",
        "Wheel bearings",
        "Testing equipment"
      ],
      solutions: "Deep groove ball bearings, tapered roller bearings"
    },
    {
      icon: Building2,
      title: "Heavy Engineering",
      description: "Robust bearing solutions for construction equipment, mining machinery, and heavy industrial applications.",
      applications: [
        "Excavators",
        "Cranes",
        "Crushers",
        "Conveyors"
      ],
      solutions: "Spherical roller bearings, cylindrical roller bearings"
    },
    {
      icon: Zap,
      title: "Energy & Power",
      description: "Reliable bearings for power generation, renewable energy, and electrical equipment.",
      applications: [
        "Wind turbines",
        "Generators",
        "Motors",
        "Pumps"
      ],
      solutions: "Cylindrical roller bearings, spherical roller bearings"
    },
    {
      icon: Ship,
      title: "Marine & Shipping",
      description: "Corrosion-resistant bearings for marine applications, shipbuilding, and port equipment.",
      applications: [
        "Ship engines",
        "Propulsion systems",
        "Deck equipment",
        "Port cranes"
      ],
      solutions: "Stainless steel bearings, sealed bearings"
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "High-performance bearings meeting stringent aerospace standards for aviation and space applications.",
      applications: [
        "Aircraft components",
        "Landing gear",
        "Control systems",
        "Ground support"
      ],
      solutions: "Angular contact bearings, precision ball bearings"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Industries We Serve</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Specialized bearing solutions for diverse industrial sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="bg-primary/5 p-8 border-b border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <industry.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">{industry.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-card-foreground mb-3">Typical Applications:</h4>
                    <ul className="space-y-2">
                      {industry.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-primary mr-2">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Recommended Solutions:</p>
                    <p className="text-sm font-medium text-card-foreground">{industry.solutions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Global Industrial Presence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our bearing solutions power industries across 50+ countries, from manufacturing hubs in Asia to heavy engineering operations in Europe and mining facilities in Africa and Australia.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Industry Sectors</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Industry Certifications</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">ISO</span>
                  </div>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">CE</span>
                  </div>
                  <p className="text-sm text-muted-foreground">CE Certified</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">RoHS</span>
                  </div>
                  <p className="text-sm text-muted-foreground">RoHS Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our engineers understand the unique challenges of your industry. Let us help you find the perfect bearing solution.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
