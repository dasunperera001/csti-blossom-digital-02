import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const UpcomingIntakesSection = () => {
  const upcomingIntakes = [
    { date: "Jan 15, 2025", course: "Construction Skills", status: "Open" },
    { date: "Feb 1, 2025", course: "Hospitality Training", status: "Open" },
    { date: "Feb 20, 2025", course: "Agricultural Skills", status: "Limited" }
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Intakes & Events</h2>
          <p className="text-xl text-muted-foreground">Register for upcoming training programs</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {upcomingIntakes.map((intake, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">{intake.course}</p>
                      <p className="text-sm text-muted-foreground">{intake.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      intake.status === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {intake.status}
                    </span>
                    <Button size="sm">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingIntakesSection;