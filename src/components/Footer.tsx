import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <i className="fas fa-leaf text-primary text-xl"></i>
              </div>
              <span className="text-2xl font-bold">TerraVerde</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Invest Smart. Grow Green. Sustainable investments for a better tomorrow.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/investments" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Investments</Link></li>
              <li><Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/impact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Impact Report</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/apply" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Apply Now</Link></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to get updates on sustainable investments
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-foreground px-6 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-semibold hover:bg-accent/90 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 TerraVerde. All rights reserved. | Bangalore, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
