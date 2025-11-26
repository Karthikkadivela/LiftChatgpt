import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export function ProductCard({ name, description, imageUrl, category }: ProductCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="flex-none">
        <h3 className="text-xl font-bold" data-testid={`text-product-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>
          {name}
        </h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="group/btn w-full" data-testid={`button-product-learn-${name.toLowerCase().replace(/\s+/g, "-")}`}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
