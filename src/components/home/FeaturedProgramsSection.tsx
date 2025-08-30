import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Award } from "lucide-react";

const FeaturedProgramsSection = () => {
  const programs = [
    {
      category: "Construction",
      courses: ["Mason", "Carpenter"],
      duration: "3-6 months",
      certification: "Government Certified"
    },
    {
      category: "Hospitality", 
      courses: ["Hotel Staff", "Restaurant Service"],
      duration: "2-4 months",
      certification: "Industry Certified"
    },
    {
      category: "Agriculture",
      courses: ["Farm Worker", "Greenhouse Specialist"],
      duration: "2-3 months", 
      certification: "Skills Certified"
    },
    {
      category: "Technical",
      courses: ["Welder", "Electrician"],
      duration: "4-8 months",
      certification: "Trade Certified"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Training Programs</h2>
          <p className="text-xl text-muted-foreground">Comprehensive training across key industries</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{program.category}</CardTitle>
                <div className="space-y-1">
                  {program.courses.map((course, idx) => (
                    <CardDescription key={idx} className="font-medium">{course}</CardDescription>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="h-4 w-4 mr-2" />
                    {program.certification}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Programs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProgramsSection;