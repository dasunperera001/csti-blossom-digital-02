import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Settings, UserCheck, HeadphonesIcon, CheckCircle, ArrowRight } from "lucide-react";

const EmployerBenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Compliance & Legal",
      points: ["Full regulatory compliance", "Legal documentation", "Work permit support"]
    },
    {
      icon: Settings,
      title: "Tailored Training", 
      points: ["Job-specific skills", "Language training", "Cultural orientation"]
    },
    {
      icon: UserCheck,
      title: "Robust Screening",
      points: ["Background checks", "Skills assessment", "Medical clearance"]
    },
    {
      icon: HeadphonesIcon,
      title: "Aftercare & Replacement",
      points: ["24/7 support", "Performance monitoring", "Free replacements"]
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Employer Benefits & Services</h2>
          <p className="text-xl text-muted-foreground">Complete support from recruitment to deployment</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="btn-hero">
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default EmployerBenefitsSection;