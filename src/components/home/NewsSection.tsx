import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "New Partnership with European Agricultural Consortium",
      date: "Dec 15, 2024",
      excerpt: "Expanding opportunities for agricultural workers in 5 EU countries...",
      image: "https://www.pv-magazine.com/wp-content/uploads/2024/05/glint-project-2-1200x900.jpg"
    },
    {
      title: "Record Placement Numbers in Q4 2024",
      date: "Dec 10, 2024", 
      excerpt: "Over 500 candidates successfully deployed across partner countries...",
      image: "https://pbs.twimg.com/media/DboIP3JWAAAOIyQ.jpg"
    },
    {
      title: "New Training Facility Opens in Colombo",
      date: "Dec 5, 2024",
      excerpt: "State-of-the-art facility to accommodate growing demand...",
      image: "https://lh3.googleusercontent.com/p/AF1QipM1Sy3wHBNuJlYRfmgeFqirPss5S9gl3ohZbcap=s680-w680-h510-rw"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest News & Announcements</h2>
          <p className="text-xl text-muted-foreground">Stay updated with our latest developments</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="hover-lift">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                <Button variant="ghost" size="sm">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSection;