import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface InvestmentCardProps {
  title: string;
  description: string;
  icon: string;
  minInvestment: string;
  returns: string;
  duration: string;
  features: string[];
}

const InvestmentCard = ({ 
  title, 
  description, 
  icon, 
  minInvestment, 
  returns, 
  duration,
  features 
}: InvestmentCardProps) => {
  return (
    <Card className="hover-lift hover-zoom group bg-card border-2 border-border hover:border-accent transition-all duration-400">
      <CardHeader>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-center py-4 bg-secondary/50 rounded-lg">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Min. Investment</div>
              <div className="font-semibold text-primary">{minInvestment}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Returns</div>
              <div className="font-semibold text-accent">{returns}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Duration</div>
              <div className="font-semibold">{duration}</div>
            </div>
          </div>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <i className="fas fa-check-circle text-primary mt-0.5 mr-2"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            asChild
            className="w-full bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold hover:shadow-lg"
          >
            <Link to="/apply">Invest Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
