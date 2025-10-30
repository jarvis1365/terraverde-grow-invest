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
    <Card className="hover-lift hover-zoom group bg-card border-2 border-border hover:border-accent transition-all duration-400 h-full flex flex-col">
      <CardHeader>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
          <i className={`${icon} text-white text-xl sm:text-2xl`}></i>
        </div>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center py-3 sm:py-4 bg-secondary/50 rounded-lg">
            <div>
              <div className="text-[0.65rem] sm:text-xs text-muted-foreground mb-1">Min. Investment</div>
              <div className="font-semibold text-primary text-xs sm:text-base">{minInvestment}</div>
            </div>
            <div>
              <div className="text-[0.65rem] sm:text-xs text-muted-foreground mb-1">Returns</div>
              <div className="font-semibold text-accent text-xs sm:text-base">{returns}</div>
            </div>
            <div>
              <div className="text-[0.65rem] sm:text-xs text-muted-foreground mb-1">Duration</div>
              <div className="font-semibold text-xs sm:text-base">{duration}</div>
            </div>
          </div>
          
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm">
                <i className="fas fa-check-circle text-primary mt-0.5 mr-2 flex-shrink-0"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            asChild
            className="w-full bg-gradient-to-r from-accent to-accent/90 text-foreground font-semibold hover:shadow-lg mt-auto"
          >
            <Link to="/apply">Invest Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
