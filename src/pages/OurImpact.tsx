import { Leaf, Users, TreePine, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const OurImpact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At TerraVerde, our impact extends beyond profits — we focus on sustainability, 
              community development, and environmental restoration through innovative tissue 
              culture teakwood plantations.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Areas of Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                  <Leaf className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Environmental Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through our tissue culture teakwood plantations, we contribute to carbon sequestration, 
                  biodiversity preservation, and sustainable forest management practices that protect our planet 
                  for future generations.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our projects create employment opportunities, support local economies, and empower 
                  communities through education and sustainable livelihood programs that promote long-term 
                  social development.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                  <TreePine className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reforestation & Conservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We actively participate in reforestation efforts, planting thousands of trees annually 
                  and implementing conservation strategies that restore degraded lands and protect natural 
                  ecosystems.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Investor Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver sustainable financial returns to our investors while maintaining our commitment 
                  to environmental and social responsibility, proving that profit and purpose can coexist 
                  harmoniously.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
