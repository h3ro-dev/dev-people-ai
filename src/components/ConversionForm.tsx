import { Card, CardContent } from "@/components/ui/card";
import { submitLead } from "@/lib/lead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Heart, Shield, Clock } from "lucide-react";

const ConversionForm = () => {
  const [adminTimePercentage, setAdminTimePercentage] = useState([70]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  
  const handleChallengeChange = (challenge: string, checked: boolean) => {
    if (checked) {
      setSelectedChallenges([...selectedChallenges, challenge]);
    } else {
      setSelectedChallenges(selectedChallenges.filter(c => c !== challenge));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(formData as any);
    // Form submission will be handled once Supabase is connected
    console.log("Form submitted - Supabase integration needed");
  };

  const challenges = [
    "Too little time for employee development",
    "Compliance and administrative burden", 
    "Employee engagement and retention",
    "Performance management effectiveness",
    "Workplace culture development",
    "Manager training and support"
  ];

  return (
    <section id="conversion-form" className="py-20 px-4" style={{ background: 'var(--gradient-section)' }}>
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Spend Tomorrow Coaching People, Not Processing Paperwork
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Human Resource transformation consultation focused on putting people development first while automating administrative burden
          </p>
        </div>
        
        <Card 
          className="border-0 bg-white/95 backdrop-blur-sm"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-heading font-semibold">
                    Full Name *
                  </Label>
                  <Input 
                    id="fullName" 
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-heading font-semibold">
                    Work Email *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-heading font-semibold">
                    Company Name *
                  </Label>
                  <Input 
                    id="company" 
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="font-heading font-semibold">
                    HR Role *
                  </Label>
                  <Select required>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select your HR role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hr-director">HR Director</SelectItem>
                      <SelectItem value="hr-manager">HR Manager</SelectItem>
                      <SelectItem value="hr-generalist">HR Generalist</SelectItem>
                      <SelectItem value="cpo">Chief People Officer</SelectItem>
                      <SelectItem value="vp-hr">VP Human Resources</SelectItem>
                      <SelectItem value="hr-bp">HR Business Partner</SelectItem>
                      <SelectItem value="people-ops">People Operations</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-heading font-semibold">
                    Company Size
                  </Label>
                  <Select>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-200">50-200 employees</SelectItem>
                      <SelectItem value="200-500">200-500 employees</SelectItem>
                      <SelectItem value="500-1500">500-1500 employees</SelectItem>
                      <SelectItem value="1500+">1500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="font-heading font-semibold">
                    Industry Focus
                  </Label>
                  <Select>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="nonprofit">Nonprofit</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Administrative Time Burden */}
              <div className="space-y-4">
                <Label className="font-heading font-semibold">
                  Administrative Time Burden
                </Label>
                <p className="text-sm text-muted-foreground">
                  What percentage of your week is spent on paperwork vs. human development?
                </p>
                <div className="space-y-3">
                  <Slider
                    value={adminTimePercentage}
                    onValueChange={setAdminTimePercentage}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0% Paperwork</span>
                    <span className="font-semibold text-primary">
                      {adminTimePercentage[0]}% Paperwork
                    </span>
                    <span>100% Paperwork</span>
                  </div>
                </div>
              </div>
              
              {/* Primary HR Challenges */}
              <div className="space-y-4">
                <Label className="font-heading font-semibold">
                  Primary HR Challenges
                </Label>
                <p className="text-sm text-muted-foreground">
                  Select all that apply to your current situation
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {challenges.map((challenge) => (
                    <div key={challenge} className="flex items-center space-x-3">
                      <Checkbox
                        id={challenge}
                        checked={selectedChallenges.includes(challenge)}
                        onCheckedChange={(checked) => 
                          handleChallengeChange(challenge, checked as boolean)
                        }
                        className="border-primary/20"
                      />
                      <Label htmlFor={challenge} className="text-sm leading-relaxed">
                        {challenge}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dream HR Day */}
              <div className="space-y-2">
                <Label htmlFor="dreamDay" className="font-heading font-semibold">
                  Dream HR Day
                </Label>
                <p className="text-sm text-muted-foreground">
                  If you had no administrative work tomorrow, how would you spend your time helping people grow and develop?
                </p>
                <Textarea
                  id="dreamDay"
                  rows={4}
                  className="border-primary/20 focus:border-primary resize-none"
                  placeholder="Describe your ideal day focused on human development and employee coaching..."
                />
              </div>
              
              {/* Employee Impact Vision */}
              <div className="space-y-2">
                <Label htmlFor="impactVision" className="font-heading font-semibold">
                  Employee Impact Vision
                </Label>
                <p className="text-sm text-muted-foreground">
                  What kind of career development and workplace experience would you create if you had unlimited time for human-centered work?
                </p>
                <Textarea
                  id="impactVision"
                  rows={4}
                  className="border-primary/20 focus:border-primary resize-none"
                  placeholder="Share your vision for transformative employee experiences and career development..."
                />
              </div>
              
              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-12 py-4 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4"
                  style={{ boxShadow: 'var(--shadow-button)' }}
                >
                  Reclaim My People-First Purpose
                </Button>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <p>
                    Your employee information, workplace culture data, and people development strategies remain completely confidential and are treated with the respect your employees deserve
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConversionForm;