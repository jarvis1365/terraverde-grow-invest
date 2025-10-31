import { Card } from '@/components/ui/card';

const AboutTeakwood = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold mb-4 text-foreground">About Tissue Culture Teakwood</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the revolutionary approach to sustainable teakwood farming through advanced tissue culture technology.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 sm:p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-4 text-primary">What is Tissue Culture Teak?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tissue culture teak farming represents a breakthrough in sustainable forestry. Unlike traditional propagation methods, tissue culture involves growing teak plants from small tissue samples in controlled laboratory environments. This ensures superior genetic quality, faster growth rates, and disease-free saplings that mature into premium-grade timber.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our tissue culture teakwood plantations produce trees that grow 20-30% faster than conventional teak, with more consistent wood grain patterns and enhanced durability. This makes them highly sought after in international markets for high-end furniture, boat building, and architectural applications.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-4 text-primary">Sustainability Benefits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tissue culture teak farming is environmentally responsible and sustainable. Each tree planted captures significant amounts of carbon dioxide, helping combat climate change. Our plantations are managed using eco-friendly practices that preserve biodiversity and protect natural ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By investing in tissue culture teakwood, you're not just building wealth—you're contributing to a greener planet. These plantations create oxygen-rich environments, improve soil quality, and provide habitats for wildlife, all while generating strong financial returns for investors.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-4 text-primary">Investment Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Teakwood is often called "green gold" due to its exceptional value and consistent market demand. Our tissue culture teak investments offer attractive long-term returns, with harvest cycles ranging from 10 to 15 years. The global demand for premium teak continues to rise, making this a stable and profitable investment avenue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With TerraVerde, you gain access to expertly managed plantations, transparent monitoring systems, and comprehensive support throughout your investment journey. We handle all aspects of cultivation, maintenance, and harvesting, allowing you to enjoy passive income while supporting sustainable forestry.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeakwood;
