import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search } from "lucide-react";
import ballBearing from "@/assets/ball-bearing.png";
import rollerBearing from "@/assets/roller-bearing.png";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Deep Groove Ball Bearing",
      category: "Ball Bearings",
      image: ballBearing,
      description: "Versatile bearing for radial and light axial loads in various applications.",
      specs: {
        innerDiameter: "20-100",
        outerDiameter: "42-215",
        width: "12-40",
        loadCapacity: "5.5-45",
        limitingSpeed: "8000-18000",
        material: "Chrome Steel"
      }
    },
    {
      id: 2,
      name: "Angular Contact Ball Bearing",
      category: "Ball Bearings",
      image: ballBearing,
      description: "Designed for high-speed applications with combined radial and axial loads.",
      specs: {
        innerDiameter: "15-95",
        outerDiameter: "35-200",
        width: "11-38",
        loadCapacity: "4.2-38",
        limitingSpeed: "9000-20000",
        material: "Chrome Steel"
      }
    },
    {
      id: 3,
      name: "Cylindrical Roller Bearing",
      category: "Roller Bearings",
      image: rollerBearing,
      description: "High radial load capacity with minimal friction for heavy-duty applications.",
      specs: {
        innerDiameter: "25-120",
        outerDiameter: "52-260",
        width: "15-55",
        loadCapacity: "12-85",
        limitingSpeed: "5000-12000",
        material: "Chrome Steel"
      }
    },
    {
      id: 4,
      name: "Tapered Roller Bearing",
      category: "Roller Bearings",
      image: rollerBearing,
      description: "Capable of handling large radial and axial loads simultaneously.",
      specs: {
        innerDiameter: "20-110",
        outerDiameter: "47-240",
        width: "15-50",
        loadCapacity: "15-95",
        limitingSpeed: "4500-11000",
        material: "Chrome Steel"
      }
    },
    {
      id: 5,
      name: "Spherical Roller Bearing",
      category: "Roller Bearings",
      image: rollerBearing,
      description: "Self-aligning design for heavy radial and axial loads with shaft misalignment.",
      specs: {
        innerDiameter: "30-130",
        outerDiameter: "62-280",
        width: "20-58",
        loadCapacity: "25-120",
        limitingSpeed: "3500-9000",
        material: "Chrome Steel"
      }
    },
    {
      id: 6,
      name: "Thrust Ball Bearing",
      category: "Thrust Bearings",
      image: ballBearing,
      description: "Designed specifically for pure axial load applications.",
      specs: {
        innerDiameter: "17-85",
        outerDiameter: "35-170",
        width: "12-39",
        loadCapacity: "8.5-55",
        limitingSpeed: "6000-15000",
        material: "Chrome Steel"
      }
    },
    {
      id: 7,
      name: "Needle Roller Bearing",
      category: "Needle Bearings",
      image: rollerBearing,
      description: "Compact design with high load capacity for limited radial space.",
      specs: {
        innerDiameter: "12-80",
        outerDiameter: "22-100",
        width: "10-30",
        loadCapacity: "6.5-35",
        limitingSpeed: "7000-16000",
        material: "Chrome Steel"
      }
    },
    {
      id: 8,
      name: "Self-Aligning Ball Bearing",
      category: "Ball Bearings",
      image: ballBearing,
      description: "Compensates for shaft deflection and misalignment automatically.",
      specs: {
        innerDiameter: "15-90",
        outerDiameter: "35-190",
        width: "11-38",
        loadCapacity: "4.8-42",
        limitingSpeed: "7500-17000",
        material: "Chrome Steel"
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">Our Products</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 animate-fade-in">
            Comprehensive range of precision bearings for industrial applications
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Ball Bearings">Ball Bearings</SelectItem>
                <SelectItem value="Roller Bearings">Roller Bearings</SelectItem>
                <SelectItem value="Thrust Bearings">Thrust Bearings</SelectItem>
                <SelectItem value="Needle Bearings">Needle Bearings</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="p-6 bg-muted/30">
                  <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mx-auto" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Inner Diameter:</span>
                      <span className="font-medium text-card-foreground">{product.specs.innerDiameter} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Outer Diameter:</span>
                      <span className="font-medium text-card-foreground">{product.specs.outerDiameter} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Width:</span>
                      <span className="font-medium text-card-foreground">{product.specs.width} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Load Capacity:</span>
                      <span className="font-medium text-card-foreground">{product.specs.loadCapacity} kN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Limiting Speed:</span>
                      <span className="font-medium text-card-foreground">{product.specs.limitingSpeed} rpm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium text-card-foreground">{product.specs.material}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1">
                      Get Quote
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Need a Custom Solution?</h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto px-4">
            Can't find what you're looking for? Our engineers can help design custom bearing solutions for your specific requirements.
          </p>
          <Button size="lg" variant="secondary">
            Contact Our Engineers
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
