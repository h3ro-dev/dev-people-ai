import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Award, Users } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Director of Human Resources",
      company: "TechFlow Solutions",
      testimonial: "Increased employee retention by 67% while spending 75% less time on administrative tasks through human-focused AI automation",
      metrics: ["67% Retention Increase", "75% Less Admin Time"],
      initials: "JM"
    },
    {
      name: "David Park", 
      role: "VP People Operations",
      company: "InnovateCorp",
      testimonial: "Transformed our performance review process from dreaded paperwork into career development conversations that employees actually request",
      metrics: ["95% Employee Satisfaction", "Zero Paperwork Reviews"],
      initials: "DP"
    },
    {
      name: "Sarah Kim",
      role: "Chief People Officer", 
      company: "GrowthTech Inc",
      testimonial: "Built award-winning workplace culture while eliminating administrative overtime through intelligent HR automation",
      metrics: ["Best Places to Work", "Zero Admin Overtime"],
      initials: "SK"
    }
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Technology Company HR",
      description: "Increased employee engagement scores by 89% while reducing HR administrative overhead by 72% through human-centered automation",
      results: ["89% Engagement Increase", "72% Admin Reduction"]
    },
    {
      icon: Award,
      title: "Healthcare Organization",
      description: "Implemented personalized career development for 500+ employees while achieving 100% compliance automation and zero administrative errors",
      results: ["500+ Development Plans", "100% Compliance Automation"]
    },
    {
      icon: Users,
      title: "Professional Services Firm", 
      description: "Achieved 'Best Places to Work' recognition through human-focused HR practices enabled by comprehensive administrative automation",
      results: ["Best Places Award", "Zero Manual Processing"]
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: 'var(--gradient-section)' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            HR Professionals Putting Humans First Again
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Human-centered success stories with passionate HR professional transformations
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="space-y-2">
                  {testimonial.metrics.map((metric, metricIndex) => (
                    <Badge 
                      key={metricIndex}
                      className="bg-primary/10 text-primary hover:bg-primary/20 mr-2"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Human Resource Transformation Case Studies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {study.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <Badge 
                          key={resultIndex}
                          className="bg-secondary/10 text-secondary hover:bg-secondary/20 block"
                        >
                          ✓ {result}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;