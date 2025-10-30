import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroGreenInvestment from '@/assets/hero-green-investment.jpg';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background - Background image: hero-green-investment.jpg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          backgroundImage: `linear-gradient(135deg, hsl(150 70% 25% / 0.92), hsl(155 65% 30% / 0.88)), url(${heroGreenInvestment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold mb-6 fade-in-up" style={{ fontSize: '2.2rem', lineHeight: '1.3', animationDelay: '0.2s' }}>
            Grow Wealth. Live Free. <span className="text-accent">Build Your Retirement with Tissue Culture Teak Farming.</span>
          </h1>
          <p className="font-poppins mb-8 fade-in-up" style={{ fontSize: '1.1rem', color: '#E3E3E3', animationDelay: '0.4s' }}>
            Empowering individuals and families to achieve financial freedom through sustainable teakwood plantations backed by modern tissue culture technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">₹120Cr+</div>
              <div className="text-sm md:text-base text-white/80">Assets Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5,200+</div>
              <div className="text-sm md:text-base text-white/80">Investors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25,000+</div>
              <div className="text-sm md:text-base text-white/80">Trees Planted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl opacity-50"></i>
      </div>
    </section>
  );
};

export default Hero;
