import { Card } from '@/components/ui/card';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Director',
      description: 'Passionate about sustainable forestry with 20+ years of experience in green investments.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      description: 'Expert in plantation management and tissue culture technology implementation.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Arjun Patel',
      role: 'Head of Research',
      description: 'Leading our tissue culture lab with innovative approaches to sustainable teak cultivation.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Meera Reddy',
      role: 'Investment Relations Manager',
      description: 'Dedicated to helping investors achieve their financial and environmental goals.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold mb-4 text-foreground">Meet Our Team</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of experts is committed to making sustainable investments accessible and profitable for everyone.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
