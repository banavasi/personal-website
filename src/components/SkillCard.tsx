import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  icon?: string;
}

export function SkillCard({ title, description, skills, icon }: SkillCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/50">
      <CardHeader>
        {icon && <div className="text-4xl mb-2">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
