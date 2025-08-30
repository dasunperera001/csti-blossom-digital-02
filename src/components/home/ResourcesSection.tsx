import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Employer Pack",
      description: "Complete guide for hiring international candidates",
      size: "2.5 MB",
      type: "PDF"
    },
    {
      title: "Sample Employment Contract",
      description: "Template contracts for different sectors",
      size: "1.8 MB", 
      type: "PDF"
    },
    {
      title: "Candidate Profiles Template",
      description: "Standard format for candidate information",
      size: "800 KB",
      type: "PDF"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Resources & Downloads</h2>
          <p className="text-xl text-muted-foreground">Essential documents for employers and candidates</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{resource.type} • {resource.size}</span>
                </div>
                <Button className="w-full" data-analytics={`download-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;