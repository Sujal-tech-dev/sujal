import { Award, Target, Users, TrendingUp } from "lucide-react";
import factory from "@/assets/factory.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${factory})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-fade-in">About Us</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 animate-fade-in">
            Building trust through precision engineering since 2013
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2013, Sujal Services & Solutions has established itself as a trusted name in the industrial bearings and mechanical components industry. What began as a small bearing supply business has grown into a comprehensive engineering solutions provider serving clients across the globe.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our success. We specialize in supplying precision bearings from leading manufacturers while offering technical expertise and customized solutions for diverse industrial applications.
              </p>
              <p>
                Today, we serve over 500 clients across manufacturing, automotive, mining, steel, cement, and energy sectors in more than 50 countries. Our ISO 9001:2015 certification reflects our dedication to maintaining the highest quality standards in every aspect of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To provide world-class bearing solutions and engineering services that enable our clients to achieve operational excellence, reduce downtime, and maximize productivity through precision, innovation, and reliability.
              </p>
            </div>

            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the preferred global partner for industrial bearing solutions, recognized for our technical expertise, quality assurance, and commitment to customer success in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground">Core Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <Award className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                ISO 9001:2015 certified operations ensuring every product meets international quality standards. Rigorous testing and inspection protocols.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Expert Team</h3>
              <p className="text-muted-foreground">
                Experienced engineers and technical consultants providing expert guidance on bearing selection, installation, and maintenance.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="text-primary mb-4 text-4xl">🌐</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Global Sourcing</h3>
              <p className="text-muted-foreground">
                Direct partnerships with leading bearing manufacturers worldwide, ensuring authentic products and competitive pricing.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="text-primary mb-4 text-4xl">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Efficient logistics and inventory management enabling quick turnaround times for urgent requirements and standard orders.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="text-primary mb-4 text-4xl">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Technical Support</h3>
              <p className="text-muted-foreground">
                Comprehensive after-sales support including bearing maintenance, reconditioning services, and troubleshooting assistance.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border animate-fade-in">
              <div className="text-primary mb-4 text-4xl">💎</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored bearing solutions for unique industrial applications, including special sizes, materials, and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2013
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Company Founded</h3>
                <p className="text-muted-foreground">
                  Sujal Services & Solutions established with a vision to provide quality bearing solutions to Indian industries.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2016
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">ISO Certification</h3>
                <p className="text-muted-foreground">
                  Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2019
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Global Expansion</h3>
                <p className="text-muted-foreground">
                  Expanded operations internationally, serving clients across Asia, Middle East, Africa, and Europe.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2022
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Technical Center</h3>
                <p className="text-muted-foreground">
                  Launched dedicated technical support center providing bearing analysis and engineering consultation services.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2025
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Continued Growth</h3>
                <p className="text-muted-foreground">
                  Serving 500+ clients globally with enhanced product range and comprehensive engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
