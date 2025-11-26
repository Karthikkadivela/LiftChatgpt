import { useQuery } from "@tanstack/react-query";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ArrowRight, Download, Headphones, Building2 } from "lucide-react";
import type { Product, NewsArticle } from "@shared/schema";
import industriesImage from "@assets/generated_images/office_building_lobby_elevators.png";
import companyImage from "@assets/generated_images/engineering_team_professional_setting.png";
import supportImage from "@assets/generated_images/customer_support_center.png";

export default function Home() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: news } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div className="min-h-screen">
      <HeroSlider />

      <section id="industries" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={industriesImage}
                alt="Modern building lobby"
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Industries</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                We provide complete elevator and automation solutions for OEMs and end users across all
                industrial and commercial sectors, from residential buildings to commercial high-rises to
                industrial facilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our expertise spans healthcare, hospitality, retail, manufacturing, and infrastructure
                projects worldwide.
              </p>
              <Button size="lg" data-testid="button-industries-learn">
                Learn More About Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Company</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Lift ChatGPT is a leading global provider of advanced elevator solutions, founded with a
                vision to revolutionize vertical transportation through cutting-edge technology and
                exceptional service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of expert engineers brings decades of experience across all industrial sectors,
                delivering innovative solutions that prioritize safety, efficiency, and sustainability.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </div>
              </div>
              <Button size="lg" variant="outline" data-testid="button-company-about">
                About Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <img
                src={companyImage}
                alt="Engineering team"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Products"
            subtitle="Complete range of elevator solutions for every need"
            centered
          />
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  category={product.category}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[3/4] bg-muted animate-pulse" />
                  <CardHeader className="flex-none">
                    <div className="h-6 bg-muted rounded animate-pulse" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-10 bg-muted rounded animate-pulse w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="news" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title="Latest News"
              subtitle="Stay updated with our latest innovations and achievements"
            />
            <Button variant="outline" data-testid="button-news-all">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {news && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(0, 3).map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                  date={typeof article.date === 'string' ? new Date(article.date) : article.date}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/9] bg-muted animate-pulse" />
                  <CardHeader className="flex-none">
                    <div className="h-4 bg-muted rounded animate-pulse w-1/3 mb-3" />
                    <div className="h-6 bg-muted rounded animate-pulse" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-10 bg-muted rounded animate-pulse w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="downloads" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Product Brochures</h3>
                    <p className="text-sm text-muted-foreground">Technical specifications</p>
                  </div>
                </div>
                <Button className="w-full" data-testid="button-download-brochures">
                  Download Brochures
                </Button>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Downloads</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Access our comprehensive library of product brochures, technical documentation, user
                guides, and software updates.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Keep up-to-date with the latest content to ensure optimal performance of your elevator
                systems.
              </p>
              <Button variant="outline" size="lg" data-testid="button-downloads-all">
                View All Downloads
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="h-8 w-8 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Service & Support</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Our dedicated support teams are available 24/7 to assist you with technical questions,
                maintenance scheduling, and emergency repairs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With expert technicians stationed globally, we ensure rapid response times and
                exceptional service quality wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" data-testid="button-support-contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" data-testid="button-support-schedule">
                  Schedule Maintenance
                </Button>
              </div>
            </div>
            <div>
              <img
                src={supportImage}
                alt="Customer support center"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
