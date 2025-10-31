import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import blogTeakFarming from '@/assets/blog-teak-farming.jpg';
import blogSustainableForestry from '@/assets/blog-sustainable-forestry.jpg';
import blogEcoInvestment from '@/assets/blog-eco-investment.jpg';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Top 5 Benefits of Investing in Tissue Culture Teak Farming',
      description: 'Learn how teakwood farming can grow your wealth while supporting sustainability.',
      image: blogTeakFarming,
      slug: 'benefits-tissue-culture-teak-farming'
    },
    {
      title: 'How Sustainable Forestry is Shaping the Future of Green Wealth',
      description: 'Discover why eco-friendly investments like teakwood are revolutionizing wealth building.',
      image: blogSustainableForestry,
      slug: 'sustainable-forestry-green-wealth'
    },
    {
      title: "Beginner's Guide to Eco-Friendly Investments",
      description: 'A simple guide for first-time investors who want both profits and positive environmental impact.',
      image: blogEcoInvestment,
      slug: 'beginners-guide-eco-investments'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold mb-4 text-foreground">Our Blog</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights on sustainable investments, teakwood farming, and green wealth building strategies.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our sustainable investment opportunities and build your green wealth today.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
