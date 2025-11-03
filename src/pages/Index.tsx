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

      {/* Why Choose AranyaKrishi Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Why Choose AranyaKrishi?</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Founded with a vision to unite nature and financial freedom, AranyaKrishi empowers individuals to create sustainable passive income and retirement stability through tissue culture teak wood farming. We believe true wealth grows naturally — in the soil, not the stock market. With every teak sapling, you're planting a future of financial independence, green prosperity, and a lasting legacy.
            </p>
            <Link to="/about">
              <Button size="lg" className="hover-lift">
                Read More →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Services That We Offer For You</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              At Aranya Krishi, we empower individuals at every stage of life to achieve financial freedom and retirement security through sustainable tissue culture teak wood farming. Our nature-backed investment programs — Prathama Plan for young earners, Madhyama Plan for mid-career professionals, and Visesha Plan for high-value investors — are designed to turn simple, strategic investments into long-term wealth. Whether you're building a corpus for retirement, seeking tax-free agricultural income, or investing in appreciating land assets, Aranya Krishi offers scientifically managed teakwood plantations that deliver passive income, capital growth, and a greener future.
            </p>
            <Link to="/investments">
              <Button size="lg" className="hover-lift">
                Read More →
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="py-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={120} prefix="₹" suffix=" Cr+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-primary-foreground/90">Assets Under Management</div>
            </div>
            <div className="py-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={5200} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-primary-foreground/90">Active Investors</div>
            </div>
            <div className="py-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-primary-foreground/90">Trees Planted</div>
            </div>
            <div className="py-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={15} suffix="%" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-primary-foreground/90">Average Annual Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">What Our Investors Say</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied investors building wealth sustainably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
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
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Sustainable Investment Journey?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Join TerraVerde today and be part of the green finance revolution
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
