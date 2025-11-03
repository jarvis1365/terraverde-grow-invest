import { Card } from '@/components/ui/card';
import plantHandGrowth from '@/assets/plant-hand-growth.jpg';
import ecoTeam from '@/assets/eco-investment-team.jpg';
import philosophyPlanting from '@/assets/philosophy-planting.jpg';

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

      {/* Company Overview */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Image - Background image: eco-investment-team.jpg */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 rounded-xl overflow-hidden hover-zoom">
            <img 
              src={ecoTeam} 
              alt="Eco investment team working together"
              className="w-full h-96 object-cover"
            />
          </div>

      {/* Company Story - Feature image: plant-hand-growth.jpg */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="hover-zoom rounded-xl overflow-hidden shadow-lg mb-8 md:mb-0">
            <img 
              src={plantHandGrowth} 
              alt="Hand planting sapling representing growth"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
          <div className="text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 mt-8 md:mt-0">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to merge nature and financial independence, AranyaKrishi empowers individuals to achieve long-term passive income and retirement stability through tissue culture teakwood farming.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe true wealth grows over time — not in volatile markets, but in the soil beneath your feet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By investing in tissue culture teak, you plant more than a tree — you plant your future freedom.
            </p>
          </div>
        </div>
      </div>

          {/* Philosophy */}
          <div className="max-w-6xl mx-auto px-4 mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <div className="hover-zoom rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={philosophyPlanting} 
                  alt="Hands planting sapling"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="text-left space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At AranyaKrishi, we believe wealth should be sustainable, stress-free, and purposeful.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach helps individuals:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Generate passive income that supports a relaxed lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Build a secure retirement corpus through natural growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Leave behind a legacy of green wealth for the next generation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
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
