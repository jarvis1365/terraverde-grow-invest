import { Card } from '@/components/ui/card';
import teakwoodInvestment from '@/assets/teakwood-investment.jpg';

const Investments = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section 
        className="py-16 sm:py-20 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(162 76% 16.5% / 0.9), hsl(162 70% 25% / 0.85)), url(${teakwoodInvestment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up text-white px-4">Services That We Offer For You</h1>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">
          
          {/* Prathama Plan */}
          <Card className="p-8 sm:p-12 hover-lift">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Prathama Plan</h2>
            <h3 className="text-2xl font-semibold mb-6">Financial Freedom with Prathama Plan</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Aranya Krishi offers a unique wealth creation program designed for individuals in their mid-20s who wish to build a secure and stress-free retirement fund through tissue culture teak wood farming. Our scientifically managed plantation model helps you transform a modest investment into a substantial corpus of ₹11 crore — blending nature's growth with smart financial planning.
            </p>
            
            <h4 className="text-xl font-bold mb-6">How It Works</h4>
            
            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Investment Phase (Age 25–35):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Begin your journey by investing ₹7,500 per month for 10 years, totaling ₹9 lakh. Each monthly contribution represents the purchase of a teakwood plant that matures into a valuable green asset.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Earning Phase (Age 35–45):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Starting in the 11th year, you receive ₹50,000 per month for 10 years, building a steady stream of passive income while nurturing your retirement corpus.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Growth Phase (Age 45–60):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Reinvest the returns from your teakwood plan into Systematic Investment Plans (SIPs) for compound growth.
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>By age 45, your reinvestment can grow to ₹1.39 crore.</li>
                  <li>Investing this amount as a lump sum for the next 15 years can potentially create a retirement fund of ₹11.33 crore.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h5 className="text-lg font-bold mb-2">The Result</h5>
              <p className="text-muted-foreground leading-relaxed">
                By age 60, your investment in nature will have evolved into a sustainable and rewarding retirement plan, providing monthly returns from a corpus designed to offer lifelong financial comfort.
              </p>
            </div>
          </Card>

          {/* Madhyama Plan */}
          <Card className="p-8 sm:p-12 hover-lift">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Madhyama Plan</h2>
            <h3 className="text-2xl font-semibold mb-6">Financial Freedom with Madhyama Plan</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This plan is specially designed for individuals around the age of 40, who are looking to secure their retirement funds and ensure a stress-free financial future. At Aranya Krishi, we believe it's never too late to start — and with our sustainable teakwood investment model, your retirement can be both profitable and planet-friendly.
            </p>
            
            <h4 className="text-xl font-bold mb-6">How It Works</h4>
            
            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 1 – Investment Phase (Age 40–50):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Invest in 200 teak plants valued at ₹15 lakh. If a one-time payment feels challenging, we offer flexible installment options to make your investment journey smooth and accessible.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 2 – Return Phase (After 10 Years):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  At the end of 10 years, you'll receive ₹1 crore, generated from your teakwood plantation. Since this income is derived from agriculture, it is fully tax-exempt under current regulations — offering you a clean, compliant, and profitable return.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 3 – Growth Phase (Age 50–60):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Reinvest your ₹1 crore in a Lumpsum SIP for another 10 years, with an estimated 15% annual return. By age 60, your wealth can potentially grow to ₹4.04 crore, creating a robust foundation for your golden years.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 4 – Retirement Income Phase (Post 60):</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Direct your ₹4.04 crore corpus into monthly return schemes with approximately 12% ROI, generating a monthly income of ₹4 lakh — ideal for maintaining your lifestyle comfortably even after inflation adjustments.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h5 className="text-lg font-bold mb-3">Why Choose This Plan</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tailored for mid-career professionals seeking secure, accelerated retirement growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Combines eco-friendly investments with strategic financial planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Offers tax-free agricultural income and high long-term returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible options to suit different financial capacities</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Vishesha Plan */}
          <Card className="p-8 sm:p-12 hover-lift">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Vishesha Plan</h2>
            <h3 className="text-2xl font-semibold mb-6">Smart Investment Options with Vishesha Plan</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Visesha Plan is designed for individuals who currently have funds locked in low-yield investment schemes and wish to transition to high-growth, land-backed assets. This plan is ideal for those who aspire to achieve early retirement, enjoy superior returns, and experience the satisfaction of owning land that appreciates in both value and purpose.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Through this unique program, investors gain the dual advantage of land appreciation and sustainable income from tissue culture teak wood farming — creating a secure, eco-positive path to wealth and lifestyle freedom.
            </p>
            
            <h4 className="text-xl font-bold mb-6">How It Works</h4>
            
            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 1 – Invest in Land and Plantation:</h5>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Start by investing ₹30 lakh per acre, divided as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>₹15 lakh for land ownership, registered directly in your name</li>
                  <li>₹15 lakh for plantation development and maintenance</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  (Land value may vary depending on the project's location and associated costs.)
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 2 – Full-Service Management:</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Aranya Krishi manages the entire process — from plantation establishment to growth maintenance and final timber sale — ensuring a completely hands-off experience for the investor.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary">Step 3 – Transparency and Tracking:</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Every teak plant is tagged with a unique ID, and investors receive quarterly digital updates through our web and mobile application, ensuring complete transparency throughout the 12-year term.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg mb-8">
              <h5 className="text-lg font-bold mb-3">Expected Returns</h5>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This plan operates on a 12-year model with a 50:50 revenue-sharing structure based on the teakwood market rate per CFT and timber quality.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>After 8 years:</strong> Approximate payout of ₹0.80 crore per acre</li>
                <li><strong>After 12 years:</strong> Approximate payout of ₹1.60 crore per acre</li>
                <li><strong>Total potential return:</strong> Up to ₹2.4 crore per acre</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h5 className="text-lg font-bold mb-3">Why Choose the Vishesha Plan</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full land ownership and asset-backed investment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Professionally managed end-to-end plantation operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transparent digital tracking of every plant</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dual benefit of land appreciation and timber income</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ideal for early retirement and stress-free wealth creation</span>
                </li>
              </ul>
            </div>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Investments;
