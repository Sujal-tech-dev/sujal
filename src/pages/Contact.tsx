import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      interest: "",
      message: ""
    });
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 animate-fade-in">
            Get in touch with our team for quotes, technical support, or inquiries
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-6 text-card-foreground">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" type="text" required value={formData.name} onChange={e => handleChange("name", e.target.value)} placeholder="John Doe" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={e => handleChange("email", e.target.value)} placeholder="john@company.com" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" type="text" value={formData.company} onChange={e => handleChange("company", e.target.value)} placeholder="Your Company" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+91 98765 43210" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest">Product Interest</Label>
                    <Select value={formData.interest} onValueChange={value => handleChange("interest", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ball-bearings">Ball Bearings</SelectItem>
                        <SelectItem value="roller-bearings">Roller Bearings</SelectItem>
                        <SelectItem value="thrust-bearings">Thrust Bearings</SelectItem>
                        <SelectItem value="needle-bearings">Needle Bearings</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" required value={formData.message} onChange={e => handleChange("message", e.target.value)} placeholder="Tell us about your requirements or questions..." rows={6} className="mt-2" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-card-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Industrial Estate<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 9322279696</p>
                      <p className="text-sm text-muted-foreground">+91 9987078296</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">cp.sujal@gmail.com</p>
                      <p className="text-sm text-muted-foreground">sujalmohite35@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-card-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Saturday: 11:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">
                    </p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="text-primary" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="text-primary" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="text-primary" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <Youtube className="text-primary" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-foreground">Visit Our Office</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border h-[300px] md:h-[450px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571374244!2d72.74109853750706!3d19.082197833687463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sujal Services & Solutions Location" />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;