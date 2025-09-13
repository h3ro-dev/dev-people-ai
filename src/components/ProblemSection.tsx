import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Users, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Sarah from Marketing asks for career development advice.",
      description: "You schedule her for next week because benefits enrollment deadlines are consuming your entire day.",
      impact: "Career growth delayed"
    },
    {
      icon: Users,
      title: "You see incredible potential in team members.",
      description: "But have no time to create development plans because compliance reporting takes priority over human potential.",
      impact: "Talent wasted"
    },
    {
      icon: ClipboardList,
      title: "You became HR to champion employee growth and workplace culture.",
      description: "Now you spend 80% of your time on administrative tasks that a robot could handle better.",
      impact: "Purpose lost"
    },
    {
      icon: TrendingDown,
      title: "Performance review season becomes a paperwork nightmare.",
      description: "Instead of meaningful conversations about employee aspirations and career growth.",
      impact: "Relationships damaged"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: 'var(--gradient-section)' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            The Human Resource Professional's Heartbreaking Reality
          </h2>
          
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 max-w-4xl mx-auto mb-8">
            <p className="text-xl font-heading font-semibold text-primary mb-2">
              Research Truth Bomb
            </p>
            <p className="text-lg text-foreground">
              47% of HR professionals report their administrative workload has negatively impacted their mental health and job satisfaction
            </p>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            People-first pain points that break your heart every single day
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {point.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                        ⚠️ {point.impact}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-xl font-heading font-semibold text-secondary mb-4">
              Emotional Validation with Statistics
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              "This isn't what you signed up for when you chose human resources. You're not failing at your job - 
              the system is failing you and the humans you want to serve."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;