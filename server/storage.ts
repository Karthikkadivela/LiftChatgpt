import {
  type NewsArticle,
  type InsertNewsArticle,
  type Product,
  type InsertProduct,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // News Articles
  getAllNews(): Promise<NewsArticle[]>;
  getNewsBySlug(slug: string): Promise<NewsArticle | undefined>;
  createNews(article: InsertNewsArticle): Promise<NewsArticle>;

  // Products
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private newsArticles: Map<string, NewsArticle>;
  private products: Map<string, Product>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.newsArticles = new Map();
    this.products = new Map();
    this.contactSubmissions = new Map();
    this.seedInitialData();
  }

  private seedInitialData() {
    const sampleNews: InsertNewsArticle[] = [
      {
        title: "Lift ChatGPT Launches Next-Generation Smart Elevator System",
        excerpt:
          "Revolutionary AI-powered elevator technology promises to reduce wait times by 40% and improve energy efficiency in commercial buildings worldwide.",
        imageUrl: "/placeholder-news-1.jpg",
        date: new Date("2025-11-20"),
        slug: "next-generation-smart-elevator-system",
      },
      {
        title: "Global Expansion: New Manufacturing Facility Opens in Europe",
        excerpt:
          "State-of-the-art production facility in Germany will increase our manufacturing capacity by 30% to meet growing demand across European markets.",
        imageUrl: "/placeholder-news-2.jpg",
        date: new Date("2025-11-10"),
        slug: "global-expansion-europe-facility",
      },
      {
        title: "Industry Award: Best Innovation in Vertical Transportation 2025",
        excerpt:
          "Our sustainable elevator technology recognized at the International Building Technology Conference for exceptional innovation and environmental impact.",
        imageUrl: "/placeholder-news-3.jpg",
        date: new Date("2025-10-25"),
        slug: "industry-award-innovation-2025",
      },
      {
        title: "Partnership Announcement: Collaboration with Leading Architecture Firms",
        excerpt:
          "Strategic partnerships established with top global architecture firms to integrate smart elevator solutions in next-generation building designs.",
        imageUrl: "/placeholder-news-4.jpg",
        date: new Date("2025-10-15"),
        slug: "partnership-architecture-firms",
      },
    ];

    const sampleProducts: InsertProduct[] = [
      {
        name: "Premium Passenger Elevator",
        description:
          "High-performance passenger elevator with advanced safety features, smooth operation, and elegant cabin design. Perfect for commercial and residential buildings.",
        imageUrl: "/assets/generated_images/premium_passenger_elevator_cabin.png",
        category: "Commercial",
      },
      {
        name: "Commercial High-Speed",
        description:
          "Ultra-fast elevator system designed for high-rise buildings. Featuring cutting-edge control technology and superior ride comfort at speeds up to 10 m/s.",
        imageUrl: "/assets/generated_images/commercial_high-speed_elevator.png",
        category: "High-Rise",
      },
      {
        name: "Residential Compact",
        description:
          "Space-saving residential elevator with premium finishes and whisper-quiet operation. Ideal for modern homes and luxury apartments.",
        imageUrl: "/assets/generated_images/residential_compact_elevator.png",
        category: "Residential",
      },
      {
        name: "Industrial Freight",
        description:
          "Heavy-duty freight elevator engineered for demanding industrial applications. Robust construction with exceptional load capacity and durability.",
        imageUrl: "/assets/generated_images/industrial_freight_elevator.png",
        category: "Industrial",
      },
      {
        name: "Luxury Hotel Elevator",
        description:
          "Sophisticated elevator solution for premium hospitality environments. Combines elegant aesthetics with reliable performance and guest comfort.",
        imageUrl: "/assets/generated_images/luxury_hotel_elevator.png",
        category: "Hospitality",
      },
      {
        name: "Accessibility Elevator",
        description:
          "ADA-compliant elevator designed for universal accessibility. Features user-friendly controls, spacious cabin, and enhanced safety systems.",
        imageUrl: "/assets/generated_images/accessibility_elevator_ada_compliant.png",
        category: "Accessibility",
      },
    ];

    sampleNews.forEach((news) => this.createNews(news));
    sampleProducts.forEach((product) => this.createProduct(product));
  }

  async getAllNews(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getNewsBySlug(slug: string): Promise<NewsArticle | undefined> {
    return Array.from(this.newsArticles.values()).find((article) => article.slug === slug);
  }

  async createNews(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = randomUUID();
    const article: NewsArticle = { ...insertArticle, id };
    this.newsArticles.set(id, article);
    return article;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createContactSubmission(
    insertSubmission: InsertContactSubmission
  ): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  }
}

export const storage = new MemStorage();
