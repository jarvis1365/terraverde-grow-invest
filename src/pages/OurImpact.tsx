import { Leaf, Users, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-our-impact.jpg';
import sustainabilityIcon from '@/assets/sustainability-icon.jpg';
import communityIcon from '@/assets/community-icon.jpg';
import environmentalIcon from '@/assets/environmental-balance-icon.jpg';

const OurImpact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Environmental Impact - Planting for a better future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Making a difference through sustainable practices and community empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At TerraVerde, our impact goes beyond financial growth. We're dedicated to 
              environmental restoration, sustainable teakwood cultivation, and empowering rural 
              communities through green employment. Our initiatives reduce carbon footprints, 
              promote biodiversity, and inspire a global movement toward conscious investing.
            </p>
          </div>

          {/* Three Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sustainability Card */}
            <Card className="p-6 hover-lift text-center">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={sustainabilityIcon}
                  alt="Sustainability"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Leaf className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">🌱 Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our tissue culture technology ensures efficient resource use while maintaining 
                ecological balance. We prioritize renewable practices that benefit both 
                investors and the environment.
              </p>
            </Card>

            {/* Community Development Card */}
            <Card className="p-6 hover-lift text-center">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={communityIcon}
                  alt="Community Development"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">🌍 Community Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower local communities by creating green jobs, providing training, and 
                fostering economic development that uplifts entire regions through sustainable 
                practices.
              </p>
            </Card>

            {/* Environmental Balance Card */}
            <Card className="p-6 hover-lift text-center">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={environmentalIcon}
                  alt="Environmental Balance"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">🌾 Environmental Balance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through careful planning and execution, we maintain the delicate balance 
                between development and conservation, ensuring biodiversity and ecosystem 
                health thrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact by Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Trees Planted</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Jobs Created</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2">5,000</div>
              <p className="text-muted-foreground">Tons CO₂ Offset</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Communities Served</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
