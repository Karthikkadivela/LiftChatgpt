# Design Guidelines for Lift ChatGPT Website

## Design Approach
**Reference-Based Design** inspired by modern industrial B2B sites with emphasis on Linear's clean typography, Stripe's professional restraint, and Tesla's product-focused layouts. The design should convey reliability, innovation, and cutting-edge elevator technology.

## Typography
- **Primary Font**: Inter or DM Sans via Google Fonts - clean, modern sans-serif
- **Headings**: Bold (700), sizes ranging from 3xl to 6xl for hero, xl-3xl for sections
- **Body Text**: Regular (400), text-base to text-lg for optimal readability
- **Accents**: Medium (500) for buttons and subtle emphasis

## Layout System
Use Tailwind spacing units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container max-width: max-w-7xl with px-6 to px-8
- Grid gaps: gap-6 to gap-8 for card layouts
- Content max-width for text: max-w-4xl

## Component Library

### Hero Slider Carousel
- Full-width (w-full) carousel with 3-5 slides showcasing elevator products
- Each slide: high-quality product photography with overlay gradient for text readability
- Slide content: Large headline (text-5xl to text-6xl), descriptive text (text-xl), CTA button with blurred background
- Auto-advance every 6 seconds with manual navigation dots
- Height: 80vh on desktop, 60vh on mobile

### Content Sections (Repeating Pattern)
- Two-column layout on desktop (grid-cols-2), single column on mobile
- Image + text combinations, alternating sides for visual rhythm
- Each section: heading (text-3xl to text-4xl), body text, CTA link/button
- Section spacing: py-20 between major sections

### Product Showcase Grid
- 4-column grid on desktop (grid-cols-4), 2 on tablet, 1 on mobile
- Product cards with image, title, brief description, "Learn more" link
- Cards with subtle border, hover state with slight elevation
- Equal height cards using flex

### News Section
- 3-column grid for news items (grid-cols-3 on desktop)
- Each item: thumbnail image, date, headline, excerpt, "Read more" link
- Latest 3-4 articles displayed prominently

### Footer
- Multi-column layout (4 columns on desktop): Quick Links, Products, Resources, Contact
- Social media icons
- Newsletter signup field
- Copyright and legal links

## Images

### Hero Slider Images (5 slides):
1. **Modern Glass Elevator in Luxury Building Lobby** - sleek, contemporary elevator with glass panels in upscale commercial setting
2. **Elevator Control Panel Close-up** - high-tech touchscreen interface, futuristic control system
3. **Industrial Elevator Shaft** - dramatic upward angle showing precision engineering and mechanical components
4. **Residential Elevator Installation** - elegant home elevator in modern interior
5. **Service Technician with Tablet** - professional maintenance team member with digital diagnostic tools

### Section Images:
- **Industries Section**: Modern office building lobby with multiple elevators
- **Company Section**: Team of engineers/technicians in professional setting
- **News Section**: Each news item has relevant thumbnail (events, products, press releases)
- **Downloads Section**: Product catalog mockup or technical documentation visual
- **Service & Support Section**: 24/7 support center or customer service representative
- **Product Grid**: Individual product images for each elevator model (4-6 products)

All images should convey professionalism, safety, and technological advancement in elevator systems.

## Navigation
- Fixed header with logo left, navigation center, CTA button right
- Navigation items: Products, Industries, Company, News, Downloads, Service & Support, Contact
- Mobile: Hamburger menu with slide-out drawer
- Height: h-20, background with slight transparency on scroll

## Animations
Minimal, purposeful animations:
- Smooth carousel transitions (fade or slide)
- Subtle hover states on cards and buttons
- Gentle parallax on hero images (optional enhancement)
- Fade-in on scroll for section reveals

## Key Differentiators
- Professional, trustworthy aesthetic emphasizing safety and reliability
- High-quality product photography throughout
- Clean, uncluttered layouts with generous whitespace
- Clear information hierarchy prioritizing product features and technical expertise
- Strong CTAs for lead generation (contact, download specs, schedule consultation)