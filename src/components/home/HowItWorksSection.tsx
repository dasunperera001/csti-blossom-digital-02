import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, UserCheck, Shield, Settings, Download, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    { 
      icon: FileText, 
      title: "Submit Vacancy", 
      description: "Share your requirements and specifications",
      cta: "Download Employer Pack"
    },
    { 
      icon: UserCheck, 
      title: "Screening & Training", 
      description: "We select and train the best candidates",
      cta: "Download Employer Pack"
    },
    { 
      icon: Shield, 
      title: "Documentation & Compliance", 
      description: "Complete legal and regulatory paperwork",
      cta: "Download Employer Pack"
    },
    { 
      icon: Settings, 
      title: "Deployment & Follow-up", 
      description: "Smooth deployment with ongoing support",
      cta: "Download Employer Pack"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works for Employers</h2>
          <p className="text-xl text-muted-foreground">Four simple steps to get certified candidates</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{step.description}</CardDescription>
                  <Button variant="outline" size="sm" data-analytics="download-employer-pack">
                    <Download className="h-4 w-4 mr-2" />
                    {step.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="btn-hero" data-analytics="request-quota-click">
            Request Job Quota
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;