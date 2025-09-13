import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, GraduationCap, UserCheck, BarChart3, Heart } from "lucide-react";

const IntegrationSection = () => {
  const integrationCategories = [
    {
      icon: Users,
      title: "HRIS Systems",
      description: "Seamless integration with your existing HR information systems",
      platforms: ["BambooHR", "Workday", "ADP", "Paycom", "Namely", "Gusto"]
    },
    {
      icon: BarChart3,
      title: "Performance Management", 
      description: "Connect with performance and feedback management tools",
      platforms: ["15Five", "Lattice", "Culture Amp", "Bonusly", "TINYpulse"]
    },
    {
      icon: GraduationCap,
      title: "Learning and Development",
      description: "Integrate with learning management and development platforms",
      platforms: ["Cornerstone OnDemand", "Docebo", "LinkedIn Learning", "Coursera Business"]
    },
    {
      icon: UserCheck,
      title: "Recruitment",
      description: "Streamline recruiting and talent acquisition processes",
      platforms: ["Greenhouse", "Lever", "JazzHR", "SmartRecruiters", "Workable"]
    },
    {
      icon: Heart,
      title: "Employee Engagement",
      description: "Monitor and improve employee satisfaction and engagement",
      platforms: ["Officevibe", "Glint", "Peakon", "Surveys.com", "Pulse Surveys"]
    },
    {
      icon: Zap,
      title: "Benefits Administration",
      description: "Automate benefits management and employee services", 
      platforms: ["Zenefits", "Justworks", "TriNet", "Paychex", "Human Interest"]
    }
  ];

  const professionalDevelopment = [
    {
      title: "Strategic People Operations",
      description: "Organizational development leadership and strategic HR planning"
    },
    {
      title: "Employee Experience Design",
      description: "Workplace culture transformation and experience optimization"
    },
    {
      title: "Inclusive Leadership Development",
      description: "Diversity, equity, and inclusion advancement strategies"
    },
    {
      title: "Change Management",
      description: "Organizational transformation through people-centered approaches"
    }
  ];

  const growthAreas = [
    {
      title: "Advanced People Analytics",
      description: "Employee development optimization and data-driven HR decisions"
    },
    {
      title: "Workplace Psychology", 
      description: "Human behavior understanding for effective HR leadership"
    },
    {
      title: "Employment Law & Compliance",
      description: "Legal compliance balanced with employee advocacy"
    },
    {
      title: "Executive Coaching",
      description: "Leadership development for HR career advancement"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Integration Ecosystem */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Human Resource Integration Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              HR platform integrations with human-centered technology stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {category.platforms.map((platform, platformIndex) => (
                        <Badge 
                          key={platformIndex}
                          variant="outline"
                          className="text-xs mr-2 mb-2 border-primary/20 text-primary hover:bg-primary/5"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Professional Development */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Lead Human Development Like the People Champion You Are
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              HR leadership framework with human development focus
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Leadership Framework */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
                HR Leadership Framework
              </h3>
              <div className="space-y-6">
                {professionalDevelopment.map((item, index) => (
                  <Card key={index} className="border-0 bg-primary/5">
                    <CardContent className="p-6">
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Professional Growth */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
                HR Professional Growth & Development
              </h3>
              <div className="space-y-6">
                {growthAreas.map((item, index) => (
                  <Card key={index} className="border-0 bg-secondary/5">
                    <CardContent className="p-6">
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;