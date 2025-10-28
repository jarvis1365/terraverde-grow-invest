import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in-up">About TerraVerde</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Pioneering sustainable investment solutions that deliver financial returns while creating positive environmental impact
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To democratize sustainable investing by providing accessible, transparent, and profitable investment opportunities that contribute to environmental restoration and social welfare.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To become India's leading sustainable investment platform, managing ₹1000 Crores by 2028 while planting 1 million trees and reducing 100,000 tons of CO₂ emissions.
              </p>
            </Card>
          </div>

          {/* Company Story */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019, TerraVerde emerged from a simple belief: financial growth and environmental sustainability are not mutually exclusive. Our founders, veterans of the real estate and renewable energy sectors, recognized the untapped potential in eco-conscious investments.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we manage over ₹120 Crores across diverse sustainable portfolios, serving 5,200+ investors who believe in the power of green finance. Every investment made through TerraVerde contributes to a healthier planet while generating competitive returns.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: '2019', title: 'Foundation', description: 'TerraVerde established with initial ₹5 Crore fund' },
                { year: '2020', title: 'First Green Bond', description: 'Launched our first green bond offering, raising ₹20 Crores' },
                { year: '2021', title: 'Agriculture Expansion', description: 'Entered sustainable agriculture with 50+ farm partnerships' },
                { year: '2022', title: 'Renewable Energy', description: 'Launched renewable energy portfolio with solar and wind projects' },
                { year: '2023', title: 'Major Milestone', description: 'Crossed ₹100 Crore AUM and 5,000 investors' },
                { year: '2024', title: 'Impact Recognition', description: 'Awarded "Best Sustainable Investment Platform" by ESG India' }
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex items-start fade-in-left" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 flex-shrink-0">
                    <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                  </div>
                  <div className="flex-1 ml-8 pb-8 border-l-2 border-accent pl-8">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Accreditations & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
