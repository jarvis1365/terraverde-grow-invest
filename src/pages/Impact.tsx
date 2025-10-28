import AnimatedCounter from '@/components/AnimatedCounter';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Impact = () => {
  const impactMetrics = [
    {
      title: 'Carbon Emissions Reduced',
      value: 200000,
      unit: 'Tons',
      icon: 'fas fa-cloud',
      color: 'text-primary',
      description: 'Equivalent to removing 43,000 cars from roads for a year'
    },
    {
      title: 'Trees Planted',
      value: 25000,
      unit: '',
      icon: 'fas fa-tree',
      color: 'text-green-600',
      description: 'Creating carbon sinks and restoring biodiversity'
    },
    {
      title: 'Clean Energy Generated',
      value: 350,
      unit: 'Million kWh',
      icon: 'fas fa-bolt',
      color: 'text-accent',
      description: 'Powering 85,000+ homes with renewable energy'
    },
    {
      title: 'Water Conserved',
      value: 500,
      unit: 'Million Liters',
      icon: 'fas fa-tint',
      color: 'text-blue-600',
      description: 'Through efficient irrigation and rainwater harvesting'
    },
    {
      title: 'Farmers Supported',
      value: 1200,
      unit: '',
      icon: 'fas fa-users',
      color: 'text-orange-600',
      description: 'Direct livelihood support through sustainable farming'
    },
    {
      title: 'Organic Land Converted',
      value: 3500,
      unit: 'Acres',
      icon: 'fas fa-seedling',
      color: 'text-green-700',
      description: 'From conventional to certified organic farming'
    }
  ];

  const sdgGoals = [
    { goal: 'SDG 7: Affordable Clean Energy', progress: 85 },
    { goal: 'SDG 13: Climate Action', progress: 90 },
    { goal: 'SDG 15: Life on Land', progress: 75 },
    { goal: 'SDG 12: Responsible Consumption', progress: 70 }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in-up">Our Environmental Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Measuring the positive change we're creating for our planet and communities
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift text-center"
              >
                <i className={`${metric.icon} text-5xl ${metric.color} mb-4`}></i>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={metric.value} />
                  {metric.unit && <span className="text-2xl ml-2">{metric.unit}</span>}
                </div>
                <h3 className="text-xl font-semibold mb-3">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">UN Sustainable Development Goals Alignment</h2>
            <div className="space-y-6">
              {sdgGoals.map((sdg, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{sdg.goal}</span>
                    <span className="text-accent font-bold">{sdg.progress}%</span>
                  </div>
                  <Progress value={sdg.progress} className="h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Real Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover-lift">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-leaf text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Village Electrification</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our solar farm in Rajasthan brought electricity to 12 remote villages, enabling 3,000+ students to study after dark and 500+ businesses to extend operating hours.
                  </p>
                  <div className="text-accent font-semibold">
                    <i className="fas fa-users mr-2"></i>15,000 Lives Impacted
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center mr-4">
                  <i className="fas fa-tractor text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Farmer Income Doubled</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Through our organic farming fund, 200+ farmers in Maharashtra transitioned to organic methods, doubling their income while eliminating harmful pesticides.
                  </p>
                  <div className="text-accent font-semibold">
                    <i className="fas fa-arrow-up mr-2"></i>₹12 Crore Additional Income
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mr-4">
                  <i className="fas fa-tint text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Water Crisis Averted</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our water conservation project saved 500 million liters annually, ensuring sustainable irrigation for 800+ farmers during drought seasons.
                  </p>
                  <div className="text-accent font-semibold">
                    <i className="fas fa-check-circle mr-2"></i>Zero Crop Failures
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <i className="fas fa-home text-accent text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Green Living Spaces</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our LEED-certified residential project reduced energy consumption by 60% for 200 families, cutting electricity bills by ₹8,000/month per household.
                  </p>
                  <div className="text-accent font-semibold">
                    <i className="fas fa-rupee-sign mr-2"></i>₹1.9 Cr Annual Savings
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Environmental Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Carbon Neutral Verified', icon: 'fas fa-leaf' },
              { name: 'ISO 14001 Certified', icon: 'fas fa-certificate' },
              { name: 'ESG Excellence Award', icon: 'fas fa-award' },
              { name: 'Green Finance Certified', icon: 'fas fa-check-circle' }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <i className={`${cert.icon} text-5xl text-accent mb-4`}></i>
                <p className="font-semibold">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
