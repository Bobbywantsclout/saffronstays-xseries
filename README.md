# SaffronStays XSeries — Villa Listing Page

Next.js implementation of the Figma design.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your images to /public/images/ — filenames expected:
#    villa-hero.jpg     (hero section — use Rectangle_3180.png exported from Figma)
#    thumb.jpg          (thumbnail preview in hero bottom-right)
#    moment-1.jpg       (Real Moments grid)
#    moment-2.jpg
#    moment-3.jpg
#    room-1.jpg         (Rooms & Beds grid)
#    room-2.jpg
#    room-3.jpg

# 3. Run development server
npm run dev
# → open http://localhost:3000

# 4. Build for production
npm run build

# 5. Deploy to Vercel
# Push to GitHub, then connect repo at vercel.com
# OR use Vercel CLI:
npx vercel --prod
```

## Project Structure

```
saffronstays-xseries/
├── app/
│   ├── globals.css          # CSS variables + resets
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Main page (two-column layout)
│   └── page.module.css      # Page-level grid layout
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── BookingCard/
│   ├── PropertyInfo/
│   ├── About/
│   ├── Amenities/
│   ├── Meals/
│   ├── RealMoments/
│   ├── Location/
│   ├── RoomsAndBeds/
│   ├── Footer/
│   └── MobileBookingBar/
├── lib/
│   └── data.ts              # All mock data (single source of truth)
└── public/
    └── images/              # Add your villa photos here
```

## Design decisions

- **Fonts**: Cormorant Garamond (display/serif) + DM Sans (body) via `next/font/google`
- **Styling**: CSS Modules only — zero external UI libraries
- **Layout**: CSS Grid two-column (1fr 380px) on desktop, single column on mobile
- **Booking card**: `position: sticky` on desktop, slides up as a drawer on mobile
- **Images**: `next/image` with `fill` for all photos
- **Accessibility**: ARIA roles, labels, semantic HTML throughout
- **Data**: All content lives in `lib/data.ts` — easy to swap with API
