import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    // Step 2: Investment Preferences
    investmentType: '',
    investmentAmount: '',
    investmentDuration: '',
    riskProfile: '',
    // Step 3: Documents & Declaration
    kycStatus: false,
    bankAccount: false,
    termsAccepted: false
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you within 48 hours.",
    });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-background">
        <Card className="max-w-2xl w-full p-12 text-center">
          <div className="mb-8 animate-bounce">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
              <i className="fas fa-check-circle text-6xl text-accent"></i>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Application Submitted Successfully!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your interest in TerraVerde. Our investment team will review your application and contact you within 48 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center text-left">
              <i className="fas fa-envelope text-primary text-2xl mr-4"></i>
              <div>
                <p className="font-semibold">Confirmation email sent</p>
                <p className="text-sm text-muted-foreground">Check your inbox at {formData.email}</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-left">
              <i className="fas fa-phone text-accent text-2xl mr-4"></i>
              <div>
                <p className="font-semibold">We'll call you soon</p>
                <p className="text-sm text-muted-foreground">Our team will reach out at {formData.phone}</p>
              </div>
            </div>
          </div>
          <Button 
            className="mt-8 bg-gradient-to-r from-accent to-accent/90 text-foreground"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up px-4">Apply for Investment</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Complete your application in 3 simple steps
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step}
                    className={`flex-1 text-center ${step <= currentStep ? 'text-accent' : 'text-muted-foreground'}`}
                  >
                    <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-semibold ${
                      step <= currentStep ? 'bg-accent text-foreground' : 'bg-muted'
                    }`}>
                      {step}
                    </div>
                    <p className="text-sm font-medium">
                      {step === 1 && 'Personal Info'}
                      {step === 2 && 'Investment Preferences'}
                      {step === 3 && 'Documents'}
                    </p>
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 fade-in-up">
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="As per PAN card"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">PAN Number</label>
                      <Input
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Residential Address</label>
                      <Textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Complete address with pincode"
                        rows={3}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Investment Preferences */}
                {currentStep === 2 && (
                  <div className="space-y-6 fade-in-up">
                    <h2 className="text-2xl font-bold mb-6">Investment Preferences</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Investment Type</label>
                      <Select onValueChange={(value) => setFormData({ ...formData, investmentType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="green-bonds">Green Bonds</SelectItem>
                          <SelectItem value="agriculture">Agriculture Funds</SelectItem>
                          <SelectItem value="renewable">Renewable Energy Portfolio</SelectItem>
                          <SelectItem value="mixed">Mixed Portfolio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Investment Amount (₹)</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, investmentAmount: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-10">₹5 - 10 Lakhs</SelectItem>
                            <SelectItem value="10-25">₹10 - 25 Lakhs</SelectItem>
                            <SelectItem value="25-50">₹25 - 50 Lakhs</SelectItem>
                            <SelectItem value="50+">₹50 Lakhs+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Investment Duration</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, investmentDuration: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-3">2-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-7">5-7 years</SelectItem>
                            <SelectItem value="7+">7+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Risk Profile</label>
                      <Select onValueChange={(value) => setFormData({ ...formData, riskProfile: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select risk profile" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative (Low Risk, Stable Returns)</SelectItem>
                          <SelectItem value="moderate">Moderate (Balanced Risk & Returns)</SelectItem>
                          <SelectItem value="aggressive">Aggressive (Higher Risk, Higher Returns)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Documents & Declaration */}
                {currentStep === 3 && (
                  <div className="space-y-6 fade-in-up">
                    <h2 className="text-2xl font-bold mb-6">Documents & Declaration</h2>
                    
                    <Card className="p-6 bg-secondary/30">
                      <h3 className="font-semibold mb-4">Required Documents Checklist</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox 
                            id="kyc"
                            checked={formData.kycStatus}
                            onCheckedChange={(checked) => setFormData({ ...formData, kycStatus: checked as boolean })}
                          />
                          <label htmlFor="kyc" className="text-sm cursor-pointer">
                            KYC Documents (PAN, Aadhaar, Address Proof)
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Checkbox 
                            id="bank"
                            checked={formData.bankAccount}
                            onCheckedChange={(checked) => setFormData({ ...formData, bankAccount: checked as boolean })}
                          />
                          <label htmlFor="bank" className="text-sm cursor-pointer">
                            Bank Account Statement (Last 6 months)
                          </label>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-secondary/30">
                      <h3 className="font-semibold mb-4">Declaration</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="terms"
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                          />
                          <label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                            I hereby declare that the information provided is true and accurate. I understand the risks associated with investment and have read the terms & conditions.
                          </label>
                        </div>
                      </div>
                    </Card>

                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                      <p className="text-sm">
                        <i className="fas fa-info-circle text-accent mr-2"></i>
                        Our team will contact you within 48 hours to complete document verification and onboarding.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    <i className="fas fa-arrow-left mr-2"></i> Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-accent to-accent/90 text-foreground"
                    >
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-accent to-accent/90 text-foreground pulse-glow"
                      disabled={!formData.kycStatus || !formData.bankAccount || !formData.termsAccepted}
                    >
                      Submit Application <i className="fas fa-check ml-2"></i>
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
