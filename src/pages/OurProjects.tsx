import { Sprout, Users, Leaf, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-our-projects.jpg';

const OurProjects = () => {
  const projects = [
    {
      title: "Green Teakwood Initiative",
      description: "Promoting sustainable forestry through tissue culture technology. This flagship project combines cutting-edge agricultural science with traditional teakwood cultivation to create a sustainable and profitable investment opportunity.",
      icon: Sprout,
      color: "from-primary to-primary/70",
      status: "Active",
      features: ["15-18% Returns", "500 Acres", "Tissue Culture Tech"]
    },
    {
      title: "EcoGrowth Plantation Project",
      description: "Empowering local farmers through green investment. We partner with rural communities to establish sustainable plantations that provide long-term income while preserving local ecosystems and traditional knowledge.",
      icon: Users,
      color: "from-accent to-accent/70",
      status: "Expanding",
      features: ["Community-Driven", "300+ Farmers", "Organic Methods"]
    },
    {
      title: "RenewEarth Program",
      description: "Combining renewable energy and eco-friendly cultivation. This innovative program integrates solar power with teakwood farming to create carbon-negative agricultural operations that benefit both investors and the planet.",
      icon: Leaf,
      color: "from-primary to-primary/70",
      status: "Active",
      features: ["Solar Powered", "Zero Emissions", "12-15% Returns"]
    },
    {
      title: "Future Forest Initiative",
      description: "Pioneering next-generation sustainable agriculture. Our research-driven approach focuses on developing advanced cultivation techniques that maximize yield while minimizing environmental impact through smart technology and data analytics.",
      icon: Lightbulb,
      color: "from-accent to-accent/70",
      status: "Development",
      features: ["AI-Driven", "Smart Irrigation", "Research-Backed"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Sustainable Teakwood Plantation with Solar Integration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Building a sustainable future through innovative green investments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our diverse portfolio of green investment projects. Each project is a step 
              toward a more sustainable and financially secure future. From teakwood plantations 
              to renewable energy initiatives, every project combines innovation, transparency, 
              and long-term environmental benefits.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Invest in a Greener Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us in creating lasting environmental impact while securing your financial future. 
              Our projects offer transparent, sustainable returns with measurable positive outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/investments" 
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
