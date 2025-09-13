import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingUp, Users, MessageSquare, BarChart3, Heart } from "lucide-react";

const SolutionSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('conversion-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      icon: Bot,
      title: "Administrative Automation AI",
      description: "Handle all compliance, benefits administration, and paperwork automatically so you can focus 70% of your time on human development and employee advocacy",
      benefit: "15+ Hours Saved Weekly"
    },
    {
      icon: TrendingUp,
      title: "Employee Development Intelligence AI",
      description: "Track career aspirations, identify growth opportunities, create personalized development pathways, and suggest coaching interventions for every team member",
      benefit: "Personalized Growth Plans"
    },
    {
      icon: Users,
      title: "Workplace Culture AI",
      description: "Monitor employee engagement, identify culture issues before they become crises, and recommend interventions that improve human workplace experience",
      benefit: "Proactive Culture Building"
    },
    {
      icon: MessageSquare,
      title: "Communication Optimization AI",
      description: "Draft policies in human language instead of corporate speak, create empathetic employee communications, and facilitate difficult conversations with emotional intelligence",
      benefit: "Human-Centered Communication"
    },
    {
      icon: BarChart3,
      title: "Performance Management AI",
      description: "Transform performance reviews from administrative burden into meaningful career development conversations with data-driven insights and growth recommendations",
      benefit: "Meaningful Reviews"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Become the Human Resource Champion You Always Wanted to Be
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            People-first AI capabilities with human development focus
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {capability.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      ✨ {capability.benefit}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Human Transformation Promise
              </h3>
              <p className="text-xl leading-relaxed mb-6 opacity-95">
                Free up 15+ hours per week to do the human-centered work that drew you to HR - coaching, 
                developing talent, building inclusive culture, and being the employee advocate you always intended to be.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-12 py-4 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            Start My HR Transformation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;