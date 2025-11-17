import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  isCurrent?: boolean;
  achievements?: string[];
}

export function TimelineItem({
  title,
  organization,
  date,
  description,
  isCurrent = false,
  achievements
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300"></div>

      {/* Timeline line */}
      <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-border group-hover:bg-primary/50 transition-colors duration-300"></div>

      <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <CardTitle className="text-xl mb-1">{title}</CardTitle>
              <CardDescription className="text-base font-medium">{organization}</CardDescription>
            </div>
            <div className="flex gap-2 items-center">
              {isCurrent && <Badge className="bg-primary">Current</Badge>}
              <span className="text-sm text-muted-foreground whitespace-nowrap">{date}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          {achievements && achievements.length > 0 && (
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
