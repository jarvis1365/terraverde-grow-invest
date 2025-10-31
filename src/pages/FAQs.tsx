import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  const faqs = [
    {
      question: 'What is Tissue Culture Teak Farming?',
      answer: 'Tissue culture teak farming is an advanced method of growing teak trees using plant tissue samples in controlled laboratory conditions. This technique produces superior quality saplings with consistent genetic traits, faster growth rates, and better disease resistance compared to traditional propagation methods. The resulting teakwood is of premium quality and highly valued in international markets.'
    },
    {
      question: 'Is it a long-term investment?',
      answer: 'Yes, tissue culture teak farming is typically a long-term investment with harvest cycles ranging from 10 to 15 years. However, the wait is worth it—teakwood values appreciate significantly over time, and the trees require minimal maintenance once established. This makes it an excellent retirement planning tool and generational wealth builder.'
    },
    {
      question: 'What returns can investors expect?',
      answer: 'While returns can vary based on market conditions and plantation management, tissue culture teak investments typically offer attractive returns ranging from 12% to 18% annually over the investment period. The global demand for premium teak continues to grow, driven by its use in high-end furniture, boat building, and luxury construction projects, ensuring strong market value at harvest time.'
    },
    {
      question: 'How does TerraVerde ensure sustainability?',
      answer: 'TerraVerde is committed to sustainable forestry practices. Our plantations are managed using eco-friendly methods that protect biodiversity, conserve water, and enhance soil quality. We follow international environmental standards, conduct regular ecological assessments, and ensure that our operations contribute positively to carbon sequestration and climate action goals. Every tree planted helps combat climate change while generating returns for investors.'
    },
    {
      question: 'How do I monitor my investment?',
      answer: 'We provide investors with transparent monitoring systems including regular updates, plantation visit opportunities, and detailed reports on tree growth and health. You can track your investment through our online portal, which offers real-time information about your plantation, scheduled maintenance activities, and projected harvest timelines. Our team is also available to answer any questions and provide personalized support throughout your investment journey.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about tissue culture teak farming and sustainable investments.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
