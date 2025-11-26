import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Passenger Elevators", href: "#", isRoute: false },
    { label: "Freight Elevators", href: "#", isRoute: false },
    { label: "Residential Elevators", href: "#", isRoute: false },
    { label: "Commercial Solutions", href: "#", isRoute: false },
  ],
  resources: [
    { label: "Downloads", href: "#downloads", isRoute: false },
    { label: "Technical Docs", href: "#", isRoute: false },
    { label: "Case Studies", href: "#", isRoute: false },
    { label: "News & Updates", href: "#news", isRoute: false },
  ],
  company: [
    { label: "About Us", href: "#company", isRoute: false },
    { label: "Industries", href: "#industries", isRoute: false },
    { label: "Careers", href: "#", isRoute: false },
    { label: "Contact", href: "/contact", isRoute: true },
  ],
  support: [
    { label: "Service & Support", href: "#support", isRoute: false },
    { label: "Maintenance", href: "#", isRoute: false },
    { label: "Training", href: "#", isRoute: false },
    { label: "FAQ", href: "#", isRoute: false },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Lift<span className="text-primary">ChatGPT</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Leading provider of advanced elevator solutions and industrial automation for all sectors.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@liftchatgpt.com" className="hover:text-primary transition-colors">
                  info@liftchatgpt.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Global Offices Worldwide</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lift ChatGPT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
