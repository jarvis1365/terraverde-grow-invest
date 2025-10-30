import Hero from '@/components/Hero';
import InvestmentCard from '@/components/InvestmentCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import moneyPlantCoins from '@/assets/money-plant-coins.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';

const Index = () => {
  const investments = [
    {
      title: 'Green Bonds',
      description: 'Fixed-income investments funding renewable energy and sustainable infrastructure projects',
      icon: 'fas fa-seedling',
      minInvestment: '₹5 Lakhs',
      returns: '8-10% p.a.',
      duration: '3-5 years',
      features: [
        'Government-backed securities',
        'Tax benefits under Section 80CCF',
        'Quarterly interest payouts',
        'Low to medium risk profile'
      ]
    },
    {
      title: 'Agriculture Funds',
      description: 'Invest in sustainable farming, organic agriculture, and agroforestry initiatives',
      icon: 'fas fa-tractor',
      minInvestment: '₹10 Lakhs',
      returns: '12-15% p.a.',
      duration: '2-4 years',
      features: [
        'Direct farm partnerships',
        'Crop insurance included',
        'Transparent supply chain',
        'Regular harvest-based returns'
      ]
    },
    {
      title: 'Renewable Energy Portfolio',
      description: 'Diversified investment in solar, wind, and biogas energy projects',
      icon: 'fas fa-solar-panel',
      minInvestment: '₹15 Lakhs',
      returns: '10-14% p.a.',
      duration: '5-7 years',
      features: [
        'Long-term power purchase agreements',
        'Carbon credit benefits',
        'Government subsidies',
        'Stable cash flows'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Real Estate Investor',
      image: testimonial1,
      quote: 'TerraVerde helped me diversify into sustainable investments. The returns are excellent and I feel good about the environmental impact.'
    },
    {
      name: 'Priya Sharma',
      role: 'Entrepreneur',
      image: testimonial2,
      quote: 'The agriculture fund has been a game-changer for my portfolio. Professional management and transparent reporting make it hassle-free.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose AranyaKrishi?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining financial growth with environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift text-center p-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Regulated</h3>
              <p className="text-muted-foreground">
                SEBI-registered investments with complete compliance and investor protection
              </p>
            </Card>

            <Card className="hover-lift text-center p-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Returns</h3>
              <p className="text-muted-foreground">
                Track record of consistent 10-15% annual returns across our portfolios
              </p>
            </Card>

            <Card className="hover-lift text-center p-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-leaf text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Impact</h3>
              <p className="text-muted-foreground">
                Every investment contributes to carbon reduction and environmental restoration
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Investment Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our curated portfolio of sustainable investment products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {investments.map((investment, index) => (
              <InvestmentCard key={index} {...investment} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
            >
              <Link to="/investments">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={120} prefix="₹" suffix=" Cr+" />
              </div>
              <div className="text-lg">Assets Under Management</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={5200} suffix="+" />
              </div>
              <div className="text-lg">Active Investors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <div className="text-lg">Trees Planted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={15} suffix="%" />
              </div>
              <div className="text-lg">Average Annual Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Investors Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied investors building wealth sustainably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex mt-4 text-accent">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star ml-1"></i>
                  <i className="fas fa-star ml-1"></i>
                  <i className="fas fa-star ml-1"></i>
                  <i className="fas fa-star ml-1"></i>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Sustainable Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join TerraVerde today and be part of the green finance revolution
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
