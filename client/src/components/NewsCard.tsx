import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: Date;
  slug: string;
}

export function NewsCard({ title, excerpt, imageUrl, date, slug }: NewsCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="flex-none">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>{format(date, "MMMM d, yyyy")}</span>
        </div>
        <h3 className="text-xl font-bold line-clamp-2" data-testid={`text-news-title-${slug}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="group/btn w-full" data-testid={`button-news-read-${slug}`}>
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
