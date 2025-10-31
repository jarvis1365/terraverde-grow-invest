import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import articleTeakWood from '@/assets/article-teak-wood.jpg';
import articlePlantationTech from '@/assets/article-plantation-tech.jpg';
import articleEnvironmentalImpact from '@/assets/article-environmental-impact.jpg';

const Articles = () => {
  const articles = [
    {
      title: 'Why Teakwood is Called the Green Gold',
      description: "Teakwood's strength, durability, and high demand make it one of the most valuable green investments.",
      image: articleTeakWood,
      slug: 'teakwood-green-gold'
    },
    {
      title: 'How Modern Plantation Technology Boosts Growth',
      description: 'Explore how advanced tissue culture techniques enhance teak growth and quality.',
      image: articlePlantationTech,
      slug: 'modern-plantation-technology'
    },
    {
      title: 'The Environmental Impact of Tree-Based Investments',
      description: 'Tree plantations not only offer financial benefits but also contribute to carbon reduction and biodiversity.',
      image: articleEnvironmentalImpact,
      slug: 'environmental-impact-tree-investments'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold mb-4 text-foreground">Expert Articles</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            In-depth articles exploring sustainable investments, eco-friendly farming, and the future of green wealth.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                  <Button variant="default" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Want to Learn More?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how AranyaKrishi can help you achieve financial freedom through sustainable teakwood investments.
          </p>
          <Link to="/investments">
            <Button size="lg" variant="default">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Articles;
