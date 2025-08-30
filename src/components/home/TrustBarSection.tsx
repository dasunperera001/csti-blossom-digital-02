import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const TrustBarSection = () => {
  return (
    <motion.section 
      className="py-6 bg-muted"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Licensed by Ministry of Labour — 
              <a href="/accreditation" className="text-primary hover:underline ml-1">
                License No: ML/2024/12345
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustBarSection;