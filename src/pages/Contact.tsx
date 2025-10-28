import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import mapBangalore from '@/assets/map-bangalore.png';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', investmentType: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in-up">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have questions? We're here to help you start your sustainable investment journey
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Investment Interest</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, investmentType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="green-bonds">Green Bonds</SelectItem>
                      <SelectItem value="agriculture">Agriculture Funds</SelectItem>
                      <SelectItem value="renewable">Renewable Energy</SelectItem>
                      <SelectItem value="other">Other/General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your investment goals..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold hover:shadow-lg"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                    <p className="text-muted-foreground">
                      TerraVerde Investments Pvt. Ltd.<br />
                      3rd Floor, Green Tower,<br />
                      MG Road, Bangalore - 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 80 1234 5678<br />
                      +91 98765 43210 (WhatsApp)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@terraverde.in<br />
                      investments@terraverde.in
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>

              {/* Map - Static image: map-bangalore.png */}
              <Card className="overflow-hidden hover-zoom">
                <img 
                  src={mapBangalore} 
                  alt="Bangalore office location map"
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
