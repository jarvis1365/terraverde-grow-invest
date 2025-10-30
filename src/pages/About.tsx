import { Card } from '@/components/ui/card';
import plantHandGrowth from '@/assets/plant-hand-growth.jpg';
import ecoTeam from '@/assets/eco-investment-team.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up px-4">About TerraVerde</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Pioneering sustainable investment solutions that deliver financial returns while creating positive environmental impact
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To become India's most trusted partner in sustainable teakwood investments, transforming how people plan their financial future through eco-positive assets.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To enable 1 lakh individuals to achieve financial freedom and retirement security through scientifically managed teakwood plantations by 2030.
              </p>
            </Card>
          </div>

      {/* Team Image - Background image: eco-investment-team.jpg */}
      <div className="max-w-6xl mx-auto mb-16 rounded-xl overflow-hidden hover-zoom">
        <img 
          src={ecoTeam} 
          alt="Eco investment team working together"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Company Story - Feature image: plant-hand-growth.jpg */}
      <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="hover-zoom rounded-xl overflow-hidden">
            <img 
              src={plantHandGrowth} 
              alt="Hand planting sapling representing growth"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a vision to merge nature and financial independence, AranyaKrishi empowers individuals to achieve long-term passive income and retirement stability through tissue culture teakwood farming.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe true wealth grows over time — not in volatile markets, but in the soil beneath your feet.
            </p>
            <p className="text-lg text-muted-foreground">
              By investing in tissue culture teak, you plant more than a tree — you plant your future freedom.
            </p>
          </div>
        </div>
      </div>

          {/* Philosophy */}
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Our Philosophy</h2>
            <div className="space-y-6">
              <p className="text-xl text-center text-foreground font-semibold">
                At AranyaKrishi, we believe wealth should be sustainable, stress-free, and purposeful.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                Our approach helps individuals:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="p-6 text-center hover-lift">
                  <i className="fas fa-coins text-4xl text-accent mb-4"></i>
                  <h3 className="text-lg font-semibold mb-2">Passive Income</h3>
                  <p className="text-muted-foreground">Generate passive income that supports a relaxed lifestyle</p>
                </Card>
                <Card className="p-6 text-center hover-lift">
                  <i className="fas fa-umbrella text-4xl text-accent mb-4"></i>
                  <h3 className="text-lg font-semibold mb-2">Secure Retirement</h3>
                  <p className="text-muted-foreground">Build a secure retirement corpus through natural growth</p>
                </Card>
                <Card className="p-6 text-center hover-lift">
                  <i className="fas fa-tree text-4xl text-accent mb-4"></i>
                  <h3 className="text-lg font-semibold mb-2">Green Legacy</h3>
                  <p className="text-muted-foreground">Leave behind a legacy of green wealth for the next generation</p>
                </Card>
              </div>
              <p className="text-xl text-center text-foreground font-semibold mt-8">
                Your journey to financial freedom starts with one sapling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center px-4">Accreditations & Certifications</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { name: 'SEBI Registered', icon: 'fas fa-certificate' },
              { name: 'ISO 14001 Certified', icon: 'fas fa-award' },
              { name: 'Green Finance Member', icon: 'fas fa-leaf' },
              { name: 'ESG Compliant', icon: 'fas fa-check-circle' }
            ].map((cert, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <i className={`${cert.icon} text-4xl text-primary mb-4`}></i>
                <p className="font-semibold">{cert.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center px-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'fas fa-handshake',
                title: 'Transparency',
                description: 'Complete disclosure of all investments, returns, and impact metrics'
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Integrity',
                description: 'Ethical business practices and investor-first approach in everything we do'
              },
              {
                icon: 'fas fa-lightbulb',
                title: 'Innovation',
                description: 'Continuously exploring new sustainable investment opportunities'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
