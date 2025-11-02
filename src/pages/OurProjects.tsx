import { MapPin, Calendar, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const OurProjects = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our diverse range of green investment projects, each designed to promote 
              environmental balance and long-term value for investors and local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Active Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Karnataka Teakwood Initiative</h3>
                    <p className="text-sm text-muted-foreground">Location: Bangalore Region</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A flagship tissue culture teakwood plantation spanning 500 acres, utilizing advanced 
                  agricultural techniques to maximize growth and sustainability while providing strong 
                  returns for investors.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>Est. 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    <span>15-18% Returns</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Community Forestry Program</h3>
                    <p className="text-sm text-muted-foreground">Location: Rural Karnataka</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Empowering local communities through participatory forestry programs that combine 
                  environmental conservation with economic development, creating sustainable livelihoods 
                  for hundreds of families.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    <span>Est. 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    <span>300+ Families</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Tamil Nadu Expansion</h3>
                    <p className="text-sm text-muted-foreground">Location: Western Ghats</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our newest initiative focusing on reforestation of degraded lands in the Western Ghats, 
                  combining teakwood cultivation with biodiversity conservation to restore critical 
                  ecological corridors.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>Est. 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    <span>12-15% Returns</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Research & Development Hub</h3>
                    <p className="text-sm text-muted-foreground">Location: Bangalore</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our state-of-the-art R&D facility dedicated to advancing tissue culture technology, 
                  improving plantation efficiency, and developing sustainable forestry practices for 
                  future projects.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    <span>Est. 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    <span>50+ Scientists</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
