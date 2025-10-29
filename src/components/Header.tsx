import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/investments', label: 'Investments' },
    { to: '/projects', label: 'Projects' },
    { to: '/impact', label: 'Impact' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg transition-all duration-400"
    >
      <nav className="container mx-auto px-4 py-5 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <i className="fas fa-leaf text-white text-xl"></i>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">TerraVerde</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold hover:shadow-lg pulse-glow"
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              asChild
              size="sm"
              className="bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold text-xs transition-none hover:bg-gradient-to-r hover:from-accent hover:to-accent/90"
            >
              <Link to="/investments">View Opportunities</Link>
            </Button>
            <Button 
              asChild
              size="sm"
              variant="outline"
              className="text-xs transition-none hover:bg-background hover:text-foreground"
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold"
            >
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
