# Fig Tim Tam Marketing Website - Project Plan

## Executive Summary
A professional, interactive marketing website for the Fig Tim Tam product targeting the Australian market. Built with React, featuring Apple-inspired minimalist design with sophisticated animations and interactive data visualizations.

---

## 1. Technical Stack

### Core Technologies
- **Frontend Framework**: React (with Next.js for optimal performance)
- **Styling**: Tailwind CSS + Framer Motion (for animations)
- **3D/Maps**: Three.js or Mapbox GL JS for 3D terrain
- **Charts**: Recharts or Chart.js for data visualization
- **Hosting**: GitHub Pages (via gh-pages package)
- **Deployment**: Automated via GitHub Actions

### Key Libraries
```json
{
  "react": "^18.x",
  "next": "^14.x",
  "framer-motion": "^11.x",
  "mapbox-gl": "^3.x",
  "recharts": "^2.x",
  "tailwindcss": "^3.x",
  "react-spring": "^9.x"
}
```

---

## 2. Design System

### Color Palette (Fig-Inspired)
```css
--primary-purple: #5D3A6B      /* Deep fig purple */
--secondary-green: #7C9885     /* Natural sage green */
--accent-gold: #D4AF37         /* Australian gold */
--earth-brown: #8B6F47         /* Earthy brown */
--light-cream: #F5F3EF         /* Background cream */
--dark-charcoal: #2C2C2C       /* Text/contrast */
--soft-pink: #D4A5A5           /* Fig interior accent */
```

### Typography
- **Headings**: SF Pro Display (Apple-style) or Inter
- **Body**: SF Pro Text or System UI
- **Accent**: Playfair Display (for elegant headers)

### Design Principles
- Minimalist, clean layouts with generous white space
- Subtle, purposeful animations (no generic "AI effects")
- Apple-inspired: large typography, full-bleed images, elegant transitions
- Professional yet approachable

---

## 3. Site Architecture

### Navigation Structure (Multi-Page)

```
┌─────────────────────────────────────────┐
│            NAVIGATION BAR               │
│  Home | Country | Product | Market | PDF│
└─────────────────────────────────────────┘

PAGE 1: HOME / LANDING
├── Hero Section (Apple-style intro)
├── Product Teaser
└── Quick Stats

PAGE 2: COUNTRY ANALYSIS
├── Geography (3D Interactive Map)
├── Climate & Terrain (Interactive Weather)
├── History Timeline
├── Demographics (Slider Visualizations)
└── Current Events

PAGE 3: CULTURAL INSIGHTS
├── Hofstede Radar Chart (Interactive)
└── Six Dimensions Deep Dive

PAGE 4: PRODUCT
├── Product Development Story
├── Indigenous Ingredients Map
├── Pricing Strategy
├── Packaging Design
└── Distribution Network

PAGE 5: MARKETING STRATEGY
├── Marketing Tips Timeline
├── Business Protocol
├── Language Guide
└── Download Full Report (PDF)
```

---

## 4. Detailed Page Breakdowns

### PAGE 1: HOME (Landing Page)

#### Section 1.1: Hero - Apple-Style Introduction
**Layout**: Full viewport height, centered content

**Content**:
```
[Fade in large text]
"Introducing the"

[Pause, then larger]
"Fig Tim Tam"

[Smaller subtitle fades in]
"The first Tim Tam to celebrate Indigenous Australian heritage.
Native figs meet iconic Australian tradition."

[CTA Button]: "Discover the Story"
```

**Animation**:
- Staggered text fade-in
- Background: Subtle parallax scroll with fig/Australian landscape
- Smooth scroll indicator

**Visual**:
- Hero image: Tim Tam product on natural Australian background
- OR: Video loop of Australian outback/fig trees

#### Section 1.2: Product Teaser
**Layout**: 3-column grid

```
┌──────────────┬──────────────┬──────────────┐
│   AUTHENTIC  │   PREMIUM    │  SUSTAINABLE │
│              │              │              │
│ 65,000 years │  AUD $4.50   │  100%        │
│ of heritage  │  per pack    │  recyclable  │
└──────────────┴──────────────┴──────────────┘
```

**Animation**: Count-up numbers on scroll into view

#### Section 1.3: Quick Stats
**Layout**: Full-width stats bar with icons

```
30M Population | $1.83T GDP | 71% Indulgence Score | 18% Market Growth
```

---

### PAGE 2: COUNTRY ANALYSIS

#### Section 2.1: Geography - 3D Interactive Map
**Component**: 3D Terrain Map of Australia

**Features**:
- Rotate, zoom, pan controls
- Highlighted regions where native figs grow:
  - Northern Territory (Kakadu National Park)
  - Queensland (Tropical rainforests)
  - New South Wales (Coastal regions)
  - Victoria (Temperate zones)

**Interaction**:
```
User clicks highlighted region → Info card pops up

┌─────────────────────────────────────┐
│  📍 Kakadu National Park, NT        │
│                                     │
│  [Fig variety image]                │
│                                     │
│  Ficus racemosa (Cluster Fig)       │
│  - Traditional food source          │
│  - Sweet, honey-like flavor         │
│  - Used for 40,000+ years           │
│                                     │
│  [Close X]                          │
└─────────────────────────────────────┘
```

**Data to Include**:
1. **Kakadu NP, Northern Territory**: Cluster Fig (Ficus racemosa)
2. **Daintree, Queensland**: Strangler Fig (Ficus watkinsiana)
3. **Byron Bay, NSW**: Moreton Bay Fig (Ficus macrophylla)
4. **Grampians, Victoria**: Rock Fig (Ficus platypoda)
5. **Kimberley, WA**: Desert Fig (Ficus brachypoda)

**Tech**: Mapbox GL JS with 3D terrain, custom markers

#### Section 2.2: Climate & Geography
**Component**: Interactive Weather Visualization

**Layout**: Split screen
```
┌──────────────────────┬──────────────────────┐
│  Climate Selector    │   Live Visualization │
│                      │                      │
│  ○ Tropical North    │   [Animated weather  │
│  ● Temperate Coast   │    icons, temp       │
│  ○ Arid Interior     │    gauges, rainfall  │
│                      │    meters]           │
└──────────────────────┴──────────────────────┘
```

**Interactions**:
- Select climate zone
- Temperature gauge animates
- Rainfall meter fills/empties
- Weather icons animate (sun, rain, clouds)
- Product insight: "Temperate coast ideal for fig cultivation"

#### Section 2.3: History
**Component**: Horizontal Timeline

**Layout**: Scroll-triggered animation
```
65,000 BCE ──→ 1788 ──→ 1945 ──→ 2025
Indigenous    British   Post-   Indigenous
fig use       colonize  WWII    renaissance
```

**Each node**: Click to expand with images and details

#### Section 2.4: Demographics - Interactive Data
**Component**: Sliding Data Visualizations

**GDP Slider**:
```
Drag slider across years: 2023 → 2024 → 2025 → 2026 → 2027
Graph animates to show growth rates
```

**Employment Data**: Interactive pie chart
**Population**: Animated counter with breakdown

---

### PAGE 3: CULTURAL INSIGHTS

#### Section 3.1: Hofstede Radar Chart
**Component**: Interactive Spider/Radar Chart

**Layout**: Center chart with surrounding details
```
        Indulgence (71)
              ↑
    LTO  ←   ●   → Power Distance
   (21)      │        (36)
             │
    UAI ←────●────→ Masculinity
   (51)             (61)
             │
        Individualism (90)
```

**Interactions**:
- Hover over each point → highlights that dimension
- Click point → opens detailed explanation panel
- Color-coded by score range:
  - Low (0-33): Blue
  - Medium (34-66): Yellow
  - High (67-100): Red

**Detail Panel** (slides in from right):
```
┌─────────────────────────────────────────┐
│  Indulgence: 71 (High)                  │
│                                         │
│  What it means:                         │
│  Australians give themselves permission │
│  to indulge guilt-free...               │
│                                         │
│  Marketing Implications:                │
│  • Use bright, joyful visuals           │
│  • Outdoor lifestyle imagery            │
│  • Frame as uncomplicated reward        │
└─────────────────────────────────────────┘
```

#### Section 3.2: Six Dimensions Deep Dive
**Component**: Scrollable cards with hover effects

**Layout**: 2x3 grid
- Each card has subtle shadow
- Hover: lifts up, glows slightly
- Click: flips to show detailed content

---

### PAGE 4: PRODUCT

#### Section 4.1: Product Hero
**Apple-Style Big Text Intro**:

```
[Full screen, centered]

"Made from the land.
Loved across the nation."

[Scroll down]

"For 65,000 years, Indigenous Australians
have known the secret of native figs.

Now, we're bringing that heritage
to Australia's most iconic biscuit."

[Product image fades in]

THE FIG TIM TAM
```

**Animation**:
- Text fades in line by line
- Background: Slow zoom on Australian landscape
- Product image appears with subtle rotation

#### Section 4.2: Local Ingredients
**Component**: Ingredient Showcase

**Layout**: Horizontal scroll cards
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   FIG    │  │  WHEAT   │  │ CHOCOLATE│  │  DAIRY   │
│  PASTE   │  │          │  │          │  │          │
│ [image]  │  │ [image]  │  │ [image]  │  │ [image]  │
│          │  │          │  │          │  │          │
│ Native   │  │ Locally  │  │ Premium  │  │ Australian│
│ sourced  │  │ sourced  │  │ quality  │  │ dairy    │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**Image Placeholders** (I'll source):
- Native Australian figs (cross-section, tree)
- Wheat fields
- Chocolate/cocoa
- Dairy products

#### Section 4.3: Pricing Strategy
**Component**: Price Comparison Visual

**Layout**:
```
┌─────────────────────────────────────────┐
│  Standard Tim Tam:  AUD $3.50-$4.00     │
│  ───────────────────────────────────    │
│                                         │
│  Fig Tim Tam:       AUD $4.50-$5.00     │
│  ════════════════════════════════════   │
│                                         │
│  Premium value. Accessible pricing.     │
└─────────────────────────────────────────┘
```

#### Section 4.4: Packaging Design
**Component**: 3D Product Viewer

**Features**:
- Rotate product package with mouse
- Zoom in/out
- View nutritional info
- Sustainability callout

#### Section 4.5: Distribution Network
**Component**: Interactive Map + Logos

**Layout**: Australia map with distribution channels
```
┌─────────────────────────────────────────┐
│   [Australia Map]                       │
│                                         │
│   ● Woolworths (Primary)                │
│   ● Coles (Primary)                     │
│   ○ Servos (Secondary)                  │
│   ○ Online platforms                    │
│                                         │
│   Urban/coastal priority markets        │
└─────────────────────────────────────────┘
```

**Logos**: Woolworths, Coles (from report images)

---

### PAGE 5: MARKETING STRATEGY

#### Section 5.1: Marketing Tips - Timeline Format
**Component**: Vertical/Horizontal Interactive Timeline

**Layout**: Horizontal scroll timeline
```
STEP 1          STEP 2          STEP 3          STEP 4
────●───────────●───────────────●───────────────●────→
    │           │               │               │
  First       Build          Position       Launch
  Contact    Relationship    Product        Campaign

[Click each node for details]
```

**Detail View** (expands below):
```
┌─────────────────────────────────────────┐
│  STEP 1: First Contact                  │
│                                         │
│  • Use first names (low power distance) │
│  • Be approachable, not hierarchical    │
│  • Come prepared with pricing/margins   │
│                                         │
│  DO:                                    │
│  ✓ Be punctual                          │
│  ✓ Use "G'day" greeting                 │
│  ✓ Focus on individual benefits         │
│                                         │
│  DON'T:                                 │
│  ✗ Overpromise                          │
│  ✗ Use complex jargon                   │
│  ✗ Arrive unprepared                    │
└─────────────────────────────────────────┘
```

**Timeline Nodes**:
1. **Initial Contact**: Business etiquette, greetings
2. **Building Relationships**: Cultural considerations
3. **Product Positioning**: Quality, pricing, value
4. **Campaign Launch**: Indulgence messaging, visuals
5. **Distribution**: Partnership building
6. **Follow-up**: Transparency, reliability

#### Section 5.2: Business Protocol
**Component**: Accordion/Expandable Sections

**Layout**:
```
▼ Communication Style
  • Use first names, stay approachable
  • Avoid hierarchical/formal behavior...

▶ Meeting Etiquette

▶ Decision-Making Process

▶ Partnership Building
```

#### Section 5.3: Language Guide
**Component**: Interactive Phrasebook

**Layout**: Flashcard style
```
┌─────────────────────┐  ┌─────────────────────┐
│  Front              │  │  Back               │
│                     │  │                     │
│   "G'day!"          │  │  Hello/Good day     │
│                     │  │  Universal greeting │
│   [Click to flip]   │  │  [Click to flip]    │
└─────────────────────┘  └─────────────────────┘
```

**Key Terms**:
- G'day (Hello)
- Arvo (Afternoon)
- Servo (Gas station/petrol station)
- Biscuit (Cookie - IMPORTANT!)
- Reckon (Think/believe)

#### Section 5.4: Download Report
**Component**: CTA Download Section

**Layout**: Full-width banner
```
┌────────────────────────────────────────────────┐
│                                                │
│   📄 Download the Complete Analysis            │
│                                                │
│   Get the full 18-page business report         │
│   including detailed research, citations,      │
│   and strategic recommendations.               │
│                                                │
│   [Download PDF] [18 pages, 2.5MB]            │
│                                                │
└────────────────────────────────────────────────┘
```

---

## 5. Animation & Interaction Guidelines

### Animation Principles (NOT Generic AI Effects)

**Approved Animation Styles**:
1. **Scroll-triggered reveals**: Content fades/slides in as you scroll
2. **Parallax scrolling**: Background moves slower than foreground
3. **Staggered animations**: Elements appear in sequence, not all at once
4. **Micro-interactions**: Subtle hover states, button presses
5. **Data visualizations**: Charts animate in, numbers count up
6. **Page transitions**: Smooth fade between pages
7. **3D transforms**: Subtle rotations, depth effects

**Timing**:
- Fast transitions: 200-300ms (hover states)
- Medium: 400-600ms (page elements)
- Slow: 800-1200ms (hero sections, large images)
- Easing: ease-out or custom cubic-bezier curves

**AVOID**:
- ❌ Spinning/rotating logos
- ❌ Flashing/pulsing effects
- ❌ Excessive bouncing
- ❌ Auto-playing carousels
- ❌ Pop-ups without user action

**Example Framer Motion Code**:
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

---

## 6. Asset List & Image Strategy

### Images Needed (Placeholders/Stock)

#### Homepage:
- [ ] Hero: Tim Tam product on Australian landscape (mockup)
- [ ] Background: Outback/fig trees (stock: Unsplash/Pexels)

#### Geography:
- [ ] Australian map (custom 3D via Mapbox)
- [ ] Native fig varieties (5 images):
  - [ ] Cluster Fig
  - [ ] Strangler Fig
  - [ ] Moreton Bay Fig
  - [ ] Rock Fig
  - [ ] Desert Fig
- [ ] Climate zones (3 images)

#### History:
- [ ] Indigenous Australians with native foods (stock)
- [ ] British colonization era (historical)
- [ ] Post-WWII immigration (historical)
- [ ] Modern Australian food scene (stock)

#### Product:
- [ ] Fig Tim Tam package (mockup - create in Figma/Photoshop)
- [ ] Product cross-section showing filling
- [ ] Ingredients:
  - [ ] Fig paste/fresh figs
  - [ ] Wheat
  - [ ] Chocolate
  - [ ] Dairy products
- [ ] Packaging materials (recyclable)

#### Distribution:
- [ ] Woolworths logo (from report)
- [ ] Coles logo (from report)
- [ ] Store shelf mockup
- [ ] Online shopping interface

#### Marketing:
- [ ] Everyday Australians (diverse stock photos)
- [ ] Outdoor lifestyle: beach, BBQ (stock)
- [ ] Business meeting (professional stock)

### Icon Sets:
- Weather icons (sun, rain, cloud, temperature)
- Chart/graph icons
- Location pins
- Currency symbols
- Checkmarks/X marks

**Sources**:
- **Stock Photos**: Unsplash, Pexels (free, high-quality)
- **Icons**: Heroicons, Lucide Icons (React-friendly)
- **Mockups**: Smartmockups.com, Placeit.net
- **Maps**: Mapbox, OpenStreetMap data

---

## 7. Data Visualizations

### Chart Types by Section:

#### Demographics Page:
1. **GDP Growth Line Chart**
   - X-axis: Years (2023-2027)
   - Y-axis: Growth rate %
   - Interactive: Hover for exact values, drag slider

2. **Employment Pie Chart**
   - Employed: 14.7M
   - Unemployed: 4.3%
   - Underemployed: 5.9%
   - Interactive: Click slices for breakdown

3. **Population Counter**
   - Animated count-up to 30M
   - Sub-stats: Participation rate 66.7%

#### Hofstede Section:
4. **Radar Chart**
   - 6 dimensions plotted
   - Interactive points
   - Color-coded scores

#### Climate Section:
5. **Temperature Gauge**
   - Analog-style gauge
   - Animates to selected zone temp

6. **Rainfall Bar Chart**
   - Monthly averages
   - Animated bars

---

## 8. Responsive Design Strategy

### Breakpoints:
```css
/* Mobile First */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile Adaptations:
- **Hero text**: Smaller font size, stacked
- **3D Map**: Touch controls, simplified interactions
- **Timeline**: Vertical instead of horizontal
- **Radar chart**: Larger touch targets
- **Navigation**: Hamburger menu
- **Data sliders**: Touch-optimized

### Desktop Features:
- Full 3D map with mouse controls
- Side-by-side layouts
- Larger data visualizations
- Hover states throughout

---

## 9. Development Phases

### Phase 1: Foundation (Week 1)
- [ ] Initialize Next.js project
- [ ] Set up GitHub repo
- [ ] Configure Tailwind CSS + Framer Motion
- [ ] Create basic navigation structure
- [ ] Build homepage hero section
- [ ] Set up routing for all pages

### Phase 2: Content Pages (Week 2)
- [ ] Geography page with static map
- [ ] History timeline
- [ ] Demographics with basic charts
- [ ] Product page layouts
- [ ] Marketing strategy page

### Phase 3: Interactive Features (Week 3)
- [ ] Implement 3D terrain map with Mapbox
- [ ] Build Hofstede radar chart
- [ ] Create climate interactive visualizations
- [ ] Add data sliders for GDP/demographics
- [ ] Develop timeline interactions

### Phase 4: Polish & Animations (Week 4)
- [ ] Add all Framer Motion animations
- [ ] Scroll-triggered reveals
- [ ] Parallax effects
- [ ] Micro-interactions
- [ ] Smooth page transitions
- [ ] Optimize performance

### Phase 5: Assets & Content (Week 5)
- [ ] Source/create all images
- [ ] Create product mockups
- [ ] Add all text content from report
- [ ] Integrate downloadable PDF
- [ ] Optimize images for web

### Phase 6: Testing & Deployment (Week 6)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Deploy to GitHub Pages
- [ ] Custom domain (optional)

---

## 10. GitHub Pages Deployment

### Configuration:
```json
// package.json
{
  "homepage": "https://yourusername.github.io/InternationalBusiness",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

### Next.js Config:
```js
// next.config.js
module.exports = {
  output: 'export',
  basePath: '/InternationalBusiness',
  images: {
    unoptimized: true
  }
}
```

### Deployment Steps:
1. Build static export: `npm run build`
2. Deploy: `npm run deploy`
3. Access at: `https://yourusername.github.io/InternationalBusiness`

---

## 11. Accessibility Considerations

### WCAG 2.1 AA Compliance:
- [ ] Color contrast ratios ≥ 4.5:1
- [ ] Keyboard navigation support
- [ ] ARIA labels for interactive elements
- [ ] Alt text for all images
- [ ] Focus indicators
- [ ] Screen reader friendly

### Interactive Elements:
- Map: Keyboard accessible zoom/pan
- Charts: Tabular data alternative
- Animations: Respect prefers-reduced-motion

---

## 12. Performance Targets

### Metrics:
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Bundle Size**: < 500KB (gzipped)

### Optimizations:
- Lazy load images below fold
- Code splitting by route
- Compress images (WebP format)
- Minimize JavaScript bundles
- Use Next.js Image component
- Implement caching strategies

---

## 13. SEO & Metadata

### Page Titles:
- Home: "Fig Tim Tam | Indigenous Australian Heritage Meets Iconic Biscuit"
- Country: "Australia Market Analysis | Fig Tim Tam"
- Product: "The Fig Tim Tam | Product Details & Strategy"
- Marketing: "Marketing Strategy | Fig Tim Tam Australia"

### Meta Descriptions:
```html
<meta name="description" content="Discover the Fig Tim Tam - Australia's first Tim Tam celebrating 65,000 years of Indigenous heritage with native figs and premium ingredients." />
```

### Open Graph:
```html
<meta property="og:title" content="Fig Tim Tam | Taste of the Outback" />
<meta property="og:description" content="Indigenous Australian heritage meets iconic tradition" />
<meta property="og:image" content="/images/og-image.jpg" />
```

---

## 14. File Structure

```
InternationalBusiness/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── geography/
│   │   ├── product/
│   │   └── marketing/
│   ├── icons/
│   ├── Business report - Adyan&James-2.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 (Home)
│   │   ├── country/
│   │   │   └── page.tsx
│   │   ├── culture/
│   │   │   └── page.tsx
│   │   ├── product/
│   │   │   └── page.tsx
│   │   └── marketing/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Map3D.tsx
│   │   ├── RadarChart.tsx
│   │   ├── Timeline.tsx
│   │   ├── ClimateViz.tsx
│   │   ├── DataSlider.tsx
│   │   └── DownloadCTA.tsx
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── data.ts                  (Chart data, content)
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 15. Content Strategy

### Tone of Voice:
- **Professional** but not corporate
- **Confident** but approachable
- **Educational** but engaging
- **Authentic** - respect for Indigenous heritage
- **Australian** - use local terminology

### Writing Style:
- Short paragraphs (2-3 sentences)
- Active voice
- Clear, concise language
- Data-driven claims with citations
- Storytelling where appropriate

### Key Messages:
1. **Heritage**: 65,000 years of Indigenous tradition
2. **Innovation**: First Tim Tam with native ingredient
3. **Quality**: Premium yet accessible
4. **Authenticity**: Genuine cultural respect
5. **Market fit**: Built for Australian consumers

---

## 16. Success Metrics

### User Engagement:
- Average time on site: > 3 minutes
- Pages per session: > 3
- Bounce rate: < 40%
- Scroll depth: 70%+ reach bottom

### Technical:
- Page load time: < 2 seconds
- Mobile usability: 100%
- Cross-browser compatibility: 95%+

### Academic:
- Presentation quality
- Interactive feature functionality
- Design professionalism
- Content accuracy

---

## 17. Future Enhancements (Post-Launch)

### v2.0 Features:
- [ ] Interactive product customizer
- [ ] Virtual Tim Tam "taste test" quiz
- [ ] Customer testimonials section
- [ ] Social media feed integration
- [ ] Email newsletter signup
- [ ] Multi-language support
- [ ] Augmented Reality package viewer
- [ ] Gamification: "Become an Aussie Food Expert"

### Analytics:
- Google Analytics 4
- Hotjar heatmaps
- User session recordings

---

## 18. Questions & Decisions Log

### Open Questions:
1. **Exact product name**: "Fig Tim Tam" or "Bush Fig Tim Tam"?
   - Report uses both - needs consistency

2. **Video content**: Should we create any video?
   - Product 360° spin?
   - Australian landscape b-roll?

3. **Interactive quiz**: Add "Find Your Perfect Tim Tam" quiz?

4. **Team page**: Include bios for James & Adyan?

5. **Testimonials**: Create fictional customer reviews?

### Decisions Made:
- ✅ React + Next.js
- ✅ GitHub Pages hosting
- ✅ Fig color palette (purple/green)
- ✅ Multi-page architecture
- ✅ 3D terrain map
- ✅ Radar chart for Hofstede
- ✅ Timeline for marketing tips
- ✅ Downloadable PDF

---

## 19. Risk Mitigation

### Technical Risks:
| Risk | Mitigation |
|------|------------|
| GitHub Pages doesn't support Next.js SSR | Use static export (`output: 'export'`) |
| 3D map performance on mobile | Fallback to 2D on low-performance devices |
| Large bundle size | Code splitting, lazy loading, image optimization |
| Browser compatibility | Polyfills, progressive enhancement, testing |

### Content Risks:
| Risk | Mitigation |
|------|------------|
| Copyright on images | Use only CC0/free stock or create own |
| Cultural sensitivity | Respectful language, cite Indigenous sources |
| Data accuracy | Link to original sources, include citations |
| Tim Tam trademark | Educational fair use, no commercial claims |

---

## 20. Launch Checklist

### Pre-Launch:
- [ ] All pages complete
- [ ] All images optimized
- [ ] All text proofread
- [ ] All links tested
- [ ] Mobile tested on real devices
- [ ] Desktop tested on multiple browsers
- [ ] Accessibility audit passed
- [ ] Performance benchmarks met
- [ ] PDF download working
- [ ] Analytics configured

### Launch:
- [ ] Deploy to GitHub Pages
- [ ] Verify live site
- [ ] Test all features live
- [ ] Share with team
- [ ] Submit for grading

### Post-Launch:
- [ ] Monitor analytics
- [ ] Gather feedback
- [ ] Fix any bugs
- [ ] Document learnings

---

## Appendix A: Color Hex Codes

```css
:root {
  /* Primary Palette */
  --fig-purple: #5D3A6B;
  --sage-green: #7C9885;
  --aussie-gold: #D4AF37;
  --earth-brown: #8B6F47;

  /* Neutrals */
  --cream: #F5F3EF;
  --charcoal: #2C2C2C;
  --soft-pink: #D4A5A5;
  --white: #FFFFFF;

  /* Semantic */
  --success: #4CAF50;
  --warning: #FF9800;
  --error: #F44336;
  --info: #2196F3;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #5D3A6B 0%, #7C9885 100%);
  --gradient-cta: linear-gradient(90deg, #D4AF37 0%, #8B6F47 100%);
}
```

---

## Appendix B: Typography Scale

```css
/* Font Sizes (Tailwind) */
.text-xs    /* 0.75rem / 12px */
.text-sm    /* 0.875rem / 14px */
.text-base  /* 1rem / 16px */
.text-lg    /* 1.125rem / 18px */
.text-xl    /* 1.25rem / 20px */
.text-2xl   /* 1.5rem / 24px */
.text-3xl   /* 1.875rem / 30px */
.text-4xl   /* 2.25rem / 36px */
.text-5xl   /* 3rem / 48px */
.text-6xl   /* 3.75rem / 60px */
.text-7xl   /* 4.5rem / 72px */
.text-8xl   /* 6rem / 96px */
.text-9xl   /* 8rem / 128px */

/* Apple-style hero text */
.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  line-height: 1.1;
}
```

---

## Appendix C: Component Wireframes

### Hero Component:
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│          "Introducing the"                 │
│                                            │
│         "Fig Tim Tam"                      │
│                                            │
│   The first Tim Tam to celebrate...       │
│                                            │
│        [Discover the Story ↓]              │
│                                            │
│                                            │
└────────────────────────────────────────────┘
```

### Map Component:
```
┌────────────────────────────────────────────┐
│  Navigation  About  Contact                │
├────────────────────────────────────────────┤
│                                            │
│   🗺️  3D Australia Map                     │
│      [Rotate, Zoom, Pan]                   │
│                                            │
│   📍 Click highlighted regions             │
│                                            │
│   ┌──────────────────┐                     │
│   │ Info Card        │                     │
│   │ [Fig details]    │                     │
│   └──────────────────┘                     │
│                                            │
└────────────────────────────────────────────┘
```

### Radar Chart Component:
```
┌────────────────────────────────────────────┐
│   Hofstede Cultural Dimensions             │
├────────────────────────────────────────────┤
│                                            │
│           Indulgence                       │
│               ●                            │
│          ╱    │    ╲                       │
│     LTO ●─────┼─────● PDI                  │
│          ╲    │    ╱                       │
│               ●                            │
│          Individualism                     │
│                                            │
│   Click any point for details →           │
│                                            │
└────────────────────────────────────────────┘
```

---

## Next Steps

1. **Review this plan** - confirm all features align with vision
2. **Gather assets** - start collecting/creating images
3. **Set timeline** - when is the deadline?
4. **Initialize project** - set up React/Next.js
5. **Start building** - begin with homepage hero

**Ready to start building? Let me know and I'll help you:**
- Set up the Next.js project
- Create the folder structure
- Build the first components
- Source initial images
- Configure GitHub Pages deployment

---

*Document Version: 1.0*
*Created: April 9, 2026*
*Project: Fig Tim Tam Marketing Website*
*Authors: James Yang, Adyan Zunnurain*
*Course: International Business - Ms. Locicero*
