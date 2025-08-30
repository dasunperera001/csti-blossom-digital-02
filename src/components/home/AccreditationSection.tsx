import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Download } from "lucide-react";

const AccreditationSection = () => {
  return (
    <motion.section 
      className="py-16 bg-muted/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Accreditation & Compliance</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Fully licensed and compliant with international labor standards
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Government certified training programs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>International labor compliance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>ISO 9001:2015 quality certification</span>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="mr-4">
                View Full Accreditation
              </Button>
              <Button variant="ghost" data-analytics="download-certificate">
                <Download className="h-4 w-4 mr-2" />
                Download Certificate
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5e70cb07bf0b402af6386e53/b0a806eb-ce45-4ac3-a729-b698229d1866/ISO+9001+-+Quality+Certificate.png" 
              alt="CSTI Bureau Accreditation Certificate"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AccreditationSection;