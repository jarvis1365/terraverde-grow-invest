import InvestmentCard from '@/components/InvestmentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import solarEnergyFarm from '@/assets/solar-energy-farm.jpg';
import windEnergy from '@/assets/wind-energy-turbines.jpg';
import agricultureField from '@/assets/agriculture-field.jpg';

const Investments = () => {
  const greenBonds = [
    {
      title: 'Solar Infrastructure Bond',
      description: 'Fund large-scale solar power projects with government backing',
      icon: 'fas fa-sun',
      minInvestment: '₹5 Lakhs',
      returns: '8.5% p.a.',
      duration: '5 years',
      features: [
        'AAA-rated securities',
        'Bi-annual interest payments',
        'Tax benefits u/s 80CCF',
        'Early redemption option after 3 years'
      ]
    },
    {
      title: 'Green Building Bond',
      description: 'Investment in LEED-certified commercial real estate',
      icon: 'fas fa-building',
      minInvestment: '₹10 Lakhs',
      returns: '9.2% p.a.',
      duration: '4 years',
      features: [
        'Premium grade office spaces',
        'Rental income backed',
        'Inflation-indexed returns',
        'Quarterly updates'
      ]
    }
  ];

  const agricultureFunds = [
    {
      title: 'Organic Farming Fund',
      description: 'Invest in certified organic farm operations and supply chains',
      icon: 'fas fa-apple-alt',
      minInvestment: '₹10 Lakhs',
      returns: '14% p.a.',
      duration: '3 years',
      features: [
        'Direct farm partnerships',
        'Crop diversification',
        'Export quality standards',
        'Harvest-linked payouts'
      ]
    },
    {
      title: 'Agroforestry Fund',
      description: 'Combined investment in timber, fruits, and sustainable farming',
      icon: 'fas fa-tree',
      minInvestment: '₹15 Lakhs',
      returns: '12% p.a.',
      duration: '4 years',
      features: [
        'Long-term timber value',
        'Annual crop income',
        'Carbon credit benefits',
        'Forest department approved'
      ]
    }
  ];

  const renewableEnergy = [
    {
      title: 'Solar Power Portfolio',
      description: 'Diversified investment across multiple solar plants',
      icon: 'fas fa-solar-panel',
      minInvestment: '₹15 Lakhs',
      returns: '11% p.a.',
      duration: '7 years',
      features: [
        '25-year PPA agreements',
        'Government subsidies',
        'Low maintenance',
        'Fixed tariff contracts'
      ]
    },
    {
      title: 'Wind Energy Fund',
      description: 'Investment in operational wind farms with stable returns',
      icon: 'fas fa-wind',
      minInvestment: '₹20 Lakhs',
      returns: '13% p.a.',
      duration: '6 years',
      features: [
        'Established projects',
        'Insurance covered',
        'State electricity board contracts',
        'Quarterly distributions'
      ]
    },
    {
      title: 'Biogas & Biomass Fund',
      description: 'Waste-to-energy projects converting agricultural waste',
      icon: 'fas fa-recycle',
      minInvestment: '₹12 Lakhs',
      returns: '10.5% p.a.',
      duration: '5 years',
      features: [
        'Waste management contracts',
        'Government incentives',
        'Dual revenue streams',
        'Environmental credits'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Background image: solar-energy-farm.jpg */}
      <section 
        className="py-16 sm:py-20 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(162 76% 16.5% / 0.9), hsl(162 70% 25% / 0.85)), url(${solarEnergyFarm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up text-white px-4">Investment Opportunities</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 fade-in-up text-white px-4" style={{ animationDelay: '0.2s' }}>
            Explore our curated portfolio of sustainable investment products designed for both financial growth and environmental impact
          </p>
        </div>
      </section>

      {/* Investment Categories */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 sm:grid-cols-4 mb-8 sm:mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="bonds">Green Bonds</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="renewable">Renewable Energy</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-16">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4">Green Bonds</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {greenBonds.map((investment, index) => (
                    <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <InvestmentCard {...investment} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4">Agriculture Funds</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {agricultureFunds.map((investment, index) => (
                    <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <InvestmentCard {...investment} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4">Renewable Energy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {renewableEnergy.map((investment, index) => (
                    <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <InvestmentCard {...investment} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bonds">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {greenBonds.map((investment, index) => (
                  <InvestmentCard key={index} {...investment} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="agriculture">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {agricultureFunds.map((investment, index) => (
                  <InvestmentCard key={index} {...investment} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="renewable">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {renewableEnergy.map((investment, index) => (
                  <InvestmentCard key={index} {...investment} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center px-4">Eligibility Criteria</h2>
          <div className="max-w-3xl mx-auto space-y-4 px-4">
            {[
              'Indian citizen or NRI with valid PAN card',
              'Minimum age: 18 years',
              'Bank account with Indian bank for transactions',
              'KYC compliant (Aadhaar, PAN, address proof)',
              'Risk acknowledgment and investment agreement signature'
            ].map((criterion, index) => (
              <div key={index} className="flex items-start p-4 bg-card rounded-lg hover-lift">
                <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                <p className="text-lg">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;
