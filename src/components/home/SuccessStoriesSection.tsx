import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      name: "Ahmed Hassan",
      role: "Construction Supervisor - Israel",
      quote: "CSTI Bureau changed my life. Now I support my family and gained valuable experience.",
      employer: "Binyan Construction Ltd",
      image: "https://media.istockphoto.com/id/660150716/photo/young-businessman-with-beard-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=bmOLrjsgfJziLXsfquG87i_tvjD4GsPj41HAvzRcflQ="
    },
    {
      name: "Priya Sharma", 
      role: "Hotel Manager - UAE",
      quote: "The training was excellent and deployment was smooth. Highly recommend CSTI Bureau.",
      employer: "Emirates Hotel Group",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVQ9Pwsa_RzUP6wgp_BsEhhggmkSNKs6IfA&s"
    },
    {
      name: "Kamal Perera",
      role: "Agricultural Technician - Netherlands", 
      quote: "Professional training and great support throughout the entire process.",
      employer: "Dutch AgriTech BV",
      image: "https://media.istockphoto.com/id/646378724/photo/portrait-of-mid-adult-man-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=ve-ZgzDmVlotwF-z0hs4G5659jXVCuqErNdRk_SHpFI="
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Candidate Success Stories</h2>
          <p className="text-xl text-muted-foreground">Real success stories from our candidates worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="hover-lift h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <CardDescription className="text-sm">{story.role}</CardDescription>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{story.quote}"
                </blockquote>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">@ {story.employer}</span>
                  <Button variant="ghost" size="sm">
                    See full case study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStoriesSection;