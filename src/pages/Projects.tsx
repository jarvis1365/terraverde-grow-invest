import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import solarProject from '@/assets/solar-energy-farm.jpg';
import forestProject from '@/assets/project-forest.jpg';
import waterProject from '@/assets/project-water.jpg';
import realEstateProject from '@/assets/project-real-estate.jpg';
import windEnergy from '@/assets/wind-energy-turbines.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'SolarVista Farm - Rajasthan',
      category: 'Solar Energy',
      image: solarProject,
      capacity: '50 MW',
      investment: '₹75 Crores',
      status: 'Operational',
      impact: '65,000 tons CO₂ reduced annually',
      description: 'Large-scale solar farm providing clean energy to 40,000+ households in Rajasthan'
    },
    {
      title: 'GreenHaven Agroforestry',
      category: 'Sustainable Agriculture',
      image: forestProject,
      capacity: '500 acres',
      investment: '₹12 Crores',
      status: 'Growing',
      impact: '15,000 trees planted',
      description: 'Integrated farming model combining timber, fruits, and organic vegetables'
    },
    {
      title: 'AquaPure Water Conservation',
      category: 'Water Management',
      image: waterProject,
      capacity: '20 Million Liters',
      investment: '₹8 Crores',
      status: 'Operational',
      impact: '500 farmers benefited',
      description: 'Rainwater harvesting and drip irrigation systems for sustainable farming'
    },
    {
      title: 'EcoHomes Green Residences',
      category: 'Sustainable Real Estate',
      image: realEstateProject,
      capacity: '200 Units',
      investment: '₹45 Crores',
      status: 'Under Construction',
      impact: 'LEED Gold Certified',
      description: 'Net-zero energy residential complex with solar roofs and waste recycling'
    },
    {
      title: 'WindFlow Energy Park',
      category: 'Wind Energy',
      image: windEnergy,
      capacity: '30 MW',
      investment: '₹55 Crores',
      status: 'Operational',
      impact: '48,000 tons CO₂ reduced annually',
      description: 'Coastal wind farm with 15 turbines generating clean electricity'
    },
    {
      title: 'BioWaste-to-Energy Plant',
      category: 'Biomass Energy',
      image: waterProject,
      capacity: '5 MW',
      investment: '₹18 Crores',
      status: 'Operational',
      impact: '10,000 tons waste processed',
      description: 'Converting agricultural waste into electricity and organic fertilizer'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up px-4">Our Projects</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Discover the sustainable projects we've funded and the positive impact they're creating
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover-lift hover-zoom overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white text-sm font-semibold">{project.category}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="font-semibold">{project.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Investment</span>
                      <span className="font-semibold text-accent">{project.investment}</span>
                    </div>
                    <div className="flex items-start text-sm pt-2 border-t">
                      <i className="fas fa-leaf text-primary mt-0.5 mr-2"></i>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center px-4">Portfolio Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '15+', label: 'Active Projects', icon: 'fas fa-project-diagram' },
              { number: '₹250 Cr', label: 'Total Investment', icon: 'fas fa-rupee-sign' },
              { number: '150 MW', label: 'Energy Capacity', icon: 'fas fa-bolt' },
              { number: '200K+', label: 'Tons CO₂ Reduced', icon: 'fas fa-leaf' }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <i className={`${stat.icon} text-4xl text-primary mb-4`}></i>
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
