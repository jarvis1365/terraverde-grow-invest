import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroGreenInvestment from '@/assets/hero-green-investment.jpg';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = ['Passive Investment', 'Retirement Life'];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold mb-6 fade-in-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.2', animationDelay: '0.2s' }}>
            Find Your Future
          </h1>
          <div className="h-20 flex items-center justify-center overflow-hidden mb-8">
            <p 
              key={currentTextIndex}
              className="font-poppins font-semibold text-accent animate-fade-in" 
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {animatedTexts[currentTextIndex]}
            </p>
          </div>
          <p className="font-poppins fade-in-up px-4" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: '#E3E3E3', animationDelay: '0.4s' }}>
            Empowering individuals and families to achieve financial freedom through sustainable teakwood plantations backed by modern tissue culture technology.
          </p>
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
