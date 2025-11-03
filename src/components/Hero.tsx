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
          <div className="mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-montserrat font-bold flex flex-wrap items-center justify-center gap-3 sm:gap-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
              <span className="text-white">Find Your Future</span>
              <span 
                key={currentTextIndex}
                className="text-accent animate-fade-in"
              >
                {animatedTexts[currentTextIndex]}
              </span>
            </h1>
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
