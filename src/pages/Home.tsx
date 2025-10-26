import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Globe } from "lucide-react";
import heroBearings from "@/assets/hero-bearings.jpg";
import ballBearing from "@/assets/ball-bearing.png";
import rollerBearing from "@/assets/roller-bearing.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBearings})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Precision Bearings & Engineering Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Trusted by industries worldwide for over a decade
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">12+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">10000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Products Delivered</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Premium Bearing Solutions</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive range of industrial bearings for every application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-fade-in">
              <div className="mb-4">
                <img src={ballBearing} alt="Ball Bearings" className="w-32 h-32 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Ball Bearings</h3>
              <p className="text-muted-foreground mb-4">
                Deep groove, angular contact, and self-aligning ball bearings for diverse applications.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link to="/products">Learn More <ArrowRight className="ml-1" size={16} /></Link>
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-fade-in">
              <div className="mb-4">
                <img src={rollerBearing} alt="Roller Bearings" className="w-32 h-32 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Roller Bearings</h3>
              <p className="text-muted-foreground mb-4">
                Cylindrical, tapered, and spherical roller bearings for heavy-load applications.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link to="/products">Learn More <ArrowRight className="ml-1" size={16} /></Link>
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-fade-in">
              <div className="mb-4 flex items-center justify-center h-32">
                <div className="text-6xl text-primary">⚡</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Specialty Bearings</h3>
              <p className="text-muted-foreground mb-4">
                Thrust, needle roller, and custom-engineered bearings for unique requirements.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link to="/products">Learn More <ArrowRight className="ml-1" size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Why Choose Sujal Services?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Committed to quality, reliability, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                ISO 9001:2015 certified products meeting international standards
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Fast processing and reliable shipping to meet your deadlines
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Support</h3>
              <p className="text-muted-foreground">
                Technical consultation and after-sales support from industry experts
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving clients across 50+ countries with worldwide shipping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-primary-foreground/90 max-w-2xl mx-auto px-4">
            Contact us today for a quote or technical consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
              <Link to="/resources">Download Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
