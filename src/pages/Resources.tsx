import { FileText, Download, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const catalogs = [
    {
      title: "Complete Product Catalog 2025",
      description: "Comprehensive catalog featuring our entire range of ball bearings, roller bearings, and specialty products.",
      pages: "124 pages",
      size: "12.5 MB",
      format: "PDF"
    },
    {
      title: "Technical Specification Guide",
      description: "Detailed technical specifications, load ratings, and dimensional data for all bearing types.",
      pages: "86 pages",
      size: "8.2 MB",
      format: "PDF"
    },
    {
      title: "Maintenance Best Practices",
      description: "Professional guide to bearing maintenance, lubrication schedules, and troubleshooting.",
      pages: "42 pages",
      size: "3.8 MB",
      format: "PDF"
    },
    {
      title: "Installation Manual",
      description: "Step-by-step installation procedures, mounting techniques, and alignment guidelines.",
      pages: "56 pages",
      size: "5.4 MB",
      format: "PDF"
    }
  ];

  const articles = [
    {
      title: "Understanding Bearing Load Ratings",
      category: "Technical Guide",
      readTime: "8 min read",
      description: "Learn how to interpret dynamic and static load ratings for optimal bearing selection."
    },
    {
      title: "Common Bearing Failure Modes",
      category: "Maintenance",
      readTime: "12 min read",
      description: "Identify and prevent common bearing failures through proper maintenance and monitoring."
    },
    {
      title: "Lubrication Systems for Industrial Bearings",
      category: "Best Practices",
      readTime: "10 min read",
      description: "Comprehensive guide to bearing lubrication methods, intervals, and best practices."
    },
    {
      title: "High-Temperature Bearing Applications",
      category: "Technical Guide",
      readTime: "6 min read",
      description: "Special considerations for bearings operating in extreme temperature environments."
    },
    {
      title: "Bearing Selection for High-Speed Applications",
      category: "Application Engineering",
      readTime: "15 min read",
      description: "Critical factors in selecting bearings for high-speed rotating equipment."
    },
    {
      title: "Predictive Maintenance Strategies",
      category: "Maintenance",
      readTime: "11 min read",
      description: "Implement condition monitoring and predictive maintenance to minimize downtime."
    }
  ];

  const glossary = [
    { term: "Radial Load", definition: "Force acting perpendicular to the bearing axis" },
    { term: "Axial Load", definition: "Force acting parallel to the bearing axis" },
    { term: "Dynamic Load Rating", definition: "Load a bearing can handle for one million revolutions" },
    { term: "Static Load Rating", definition: "Maximum load when bearing is stationary or slow-moving" },
    { term: "Limiting Speed", definition: "Maximum rotational speed for continuous operation" },
    { term: "Cage", definition: "Component that maintains spacing between rolling elements" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">Resources</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 animate-fade-in">
            Technical documentation, guides, and learning materials
          </p>
        </div>
      </section>

      {/* Downloadable Catalogs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Downloadable Catalogs</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Access our comprehensive product catalogs and technical documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {catalogs.map((catalog, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-muted rounded">{catalog.pages}</span>
                    <span className="px-2 py-1 bg-muted rounded">{catalog.size}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{catalog.title}</h3>
                <p className="text-muted-foreground mb-4">{catalog.description}</p>
                
                <Button variant="default" className="w-full">
                  <Download className="mr-2" size={18} />
                  Download {catalog.format}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Articles */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Technical Insights</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Expert articles and guides on bearing technology and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                
                <Button variant="link" className="p-0">
                  Read Article →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Video Tutorials</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Visual guides for bearing installation, maintenance, and troubleshooting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="bg-muted h-48 flex items-center justify-center">
                <Video className="text-primary" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Proper Bearing Installation</h3>
                <p className="text-sm text-muted-foreground mb-4">Step-by-step guide to mounting bearings correctly</p>
                <span className="text-xs text-muted-foreground">Duration: 12:45</span>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="bg-muted h-48 flex items-center justify-center">
                <Video className="text-primary" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Lubrication Best Practices</h3>
                <p className="text-sm text-muted-foreground mb-4">Choosing and applying the right lubricant</p>
                <span className="text-xs text-muted-foreground">Duration: 8:30</span>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="bg-muted h-48 flex items-center justify-center">
                <Video className="text-primary" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Bearing Failure Analysis</h3>
                <p className="text-sm text-muted-foreground mb-4">Identifying common failure modes and causes</p>
                <span className="text-xs text-muted-foreground">Duration: 15:20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bearing Glossary */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Bearing Terminology</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Quick reference guide to common bearing terms and definitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {glossary.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow border border-border animate-fade-in">
                <dt className="font-semibold text-card-foreground mb-1">{item.term}</dt>
                <dd className="text-sm text-muted-foreground">{item.definition}</dd>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <BookOpen className="mr-2" size={18} />
              View Complete Glossary
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Need More Information?</h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto px-4">
            Can't find what you're looking for? Our technical team is here to help.
          </p>
          <Button size="lg" variant="secondary">
            Contact Technical Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
