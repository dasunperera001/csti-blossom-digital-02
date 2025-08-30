import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const employerFAQs = [
    {
      question: "How long does the recruitment process take?",
      answer: "Typically 4-8 weeks from vacancy submission to candidate deployment, depending on role complexity and documentation requirements."
    },
    {
      question: "What are the costs involved?",
      answer: "Transparent fee structure with no hidden costs. Includes training, documentation, and deployment support."
    },
    {
      question: "Do you provide replacement guarantees?",
      answer: "Yes, we offer free replacement within the first 90 days if a candidate doesn't meet expectations."
    }
  ];

  const candidateFAQs = [
    {
      question: "What training do you provide?",
      answer: "Comprehensive job-specific training, language classes, cultural orientation, and soft skills development."
    },
    {
      question: "How much does the training cost?",
      answer: "Many programs are government-subsidized. Contact us for specific program costs and financing options."
    },
    {
      question: "What support do you provide abroad?",
      answer: "24/7 support hotline, local representatives, regular check-ins, and assistance with workplace issues."
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-muted/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">For Employers</h3>
            <Accordion type="single" collapsible>
              {employerFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`employer-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">For Candidates</h3>
            <Accordion type="single" collapsible>
              {candidateFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`candidate-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;