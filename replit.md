# Lift ChatGPT - Elevator Solutions Website

## Overview

Lift ChatGPT is a modern B2B website for an elevator solutions company, featuring a marketing site with product showcases, news articles, and contact functionality. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to present elevator products and services to commercial, residential, and industrial clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **UI Library:** Shadcn UI components built on Radix UI primitives
- **Styling:** Tailwind CSS with custom design system
- **State Management:** TanStack Query (React Query) for server state
- **Form Handling:** React Hook Form with Zod validation

**Design System:**
The application follows a professional B2B design approach inspired by Linear, Stripe, and Tesla:
- Typography: DM Sans/Inter fonts via Google Fonts
- Spacing: Consistent Tailwind units (4, 6, 8, 12, 16, 20)
- Color System: HSL-based with CSS custom properties for theming
- Components: Shadcn UI "new-york" style variant with custom elevation effects

**Key UI Components:**
- Hero Slider: Auto-advancing carousel showcasing elevator products with overlay gradients
- Product Cards: Grid-based layout with hover effects and category badges
- News Cards: Date-stamped articles with featured images
- Responsive Header: Fixed navigation with mobile sheet menu
- Multi-column Footer: Quick links, products, resources, and contact information

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express
- **Type Safety:** TypeScript with strict mode enabled
- **Database ORM:** Drizzle ORM configured for PostgreSQL
- **Validation:** Zod schemas for request/response validation
- **Development Server:** Vite dev server with HMR
- **Production Build:** ESBuild bundling

**Server Configuration:**
- Development mode uses Vite middleware for hot module replacement
- Production mode serves static assets from compiled dist directory
- JSON body parsing with raw body capture for webhook support
- Request logging middleware with timing and path tracking

**API Design:**
RESTful endpoints following convention:
- `GET /api/news` - Fetch all news articles
- `GET /api/news/:slug` - Fetch single article by slug
- `POST /api/news` - Create news article (with validation)
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `POST /api/products` - Create product (with validation)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Fetch contact submissions

**Data Layer:**
Currently using in-memory storage (`MemStorage` class) with interface-based design (`IStorage`) for easy database migration. Seed data includes sample news articles and products for demonstration.

### Database Schema

**Tables (Drizzle ORM):**

1. **news_articles**
   - id (UUID primary key, auto-generated)
   - title (text, required)
   - excerpt (text, required)
   - imageUrl (text, required)
   - date (timestamp, required)
   - slug (text, unique, required)

2. **products**
   - id (UUID primary key, auto-generated)
   - name (text, required)
   - description (text, required)
   - imageUrl (text, required)
   - category (text, required)

3. **contact_submissions**
   - id (UUID primary key, auto-generated)
   - name (text, required)
   - email (text, required, validated)
   - company (text, optional)
   - phone (text, optional)
   - message (text, required, min 10 chars)
   - submittedAt (timestamp, auto-generated)

**Validation Strategy:**
Using `drizzle-zod` to generate Zod schemas from Drizzle table definitions, ensuring type safety across the stack. Insert schemas omit auto-generated fields (id, timestamps).

### Build & Deployment

**Development Workflow:**
- `npm run dev` - Runs Vite dev server with Express backend
- Watches TypeScript files and provides HMR for frontend
- Backend runs with tsx for TypeScript execution

**Production Build:**
- `npm run build` - Compiles frontend with Vite and bundles backend with ESBuild
- Frontend assets output to `dist/public`
- Backend bundled to `dist/index.js` as ESM module
- `npm start` - Runs production server from compiled bundle

**Path Aliases:**
- `@/*` → `client/src/*` (frontend code)
- `@shared/*` → `shared/*` (shared types/schemas)
- `@assets/*` → `attached_assets/*` (images/media)

## External Dependencies

### Database
- **Neon Serverless PostgreSQL** - Cloud-hosted PostgreSQL database
- Connection via `@neondatabase/serverless` driver
- Drizzle ORM for schema management and queries
- Database URL expected via `DATABASE_URL` environment variable

### UI Component Libraries
- **Radix UI** - Unstyled, accessible component primitives (20+ components)
- **Shadcn UI** - Pre-styled components built on Radix
- **Embla Carousel** - Carousel/slider functionality
- **Lucide React** - Icon library

### Form & Data Management
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TanStack Query** - Server state caching and synchronization

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant management
- **clsx/tailwind-merge** - Conditional className utilities

### Development Tools
- **Vite** - Frontend build tool and dev server
- **ESBuild** - Fast JavaScript bundler for backend
- **TypeScript** - Type safety across the stack
- **Replit Plugins** - Runtime error overlay, cartographer, dev banner (dev only)

### Fonts
- **Google Fonts** - DM Sans, Inter, Architects Daughter, Fira Code, Geist Mono (loaded via CDN)

### Session Management
- **connect-pg-simple** - PostgreSQL session store for Express (configured but not actively used in current codebase)

**Note:** The application is structured to use PostgreSQL with Drizzle ORM, but currently operates with in-memory storage. Migration to persistent database storage requires minimal changes due to the interface-based storage layer.