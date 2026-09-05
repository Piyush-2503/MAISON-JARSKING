# 🏛️ Maison Jarsking Packaging — Luxury B2B Fragrance Packaging Platform

A high-end B2B e-commerce platform and bespoke packaging studio built for luxury empty perfume bottles. Designed with an editorial architectural aesthetic rather than a traditional e-commerce store layout.

Designed for perfume houses, private-label brands, independent perfumers, and cosmetic manufacturers purchasing premium glass bottles in bulk.

---

## ✨ Key Features

- **🏛️ Editorial Luxury Aesthetic**: Deep Plum (`#241525`), Warm Ivory (`#F4EFE7`), and Champagne Gold (`#C9A96E`) color palette with high-contrast serif typography (*Cormorant Garamond*).
- **📦 Strict B2B Minimum Order Quantity (MOQ 50)**: Built-in validation across catalog, quick view, product details, and quote basket enforcing orders of at least 50 units.
- **📊 Dynamic 4-Tier Volume Pricing**: Real-time price breakdown according to batch size:
  - 50–99 bottles → Base Rate
  - 100–249 bottles → ~6–8% Discount
  - 250–499 bottles → ~12–15% Discount
  - 500+ bottles → Wholesale Bulk Discount
- **🎨 Interactive Packaging Configurator**: Real-time visual customizer allowing clients to select bottle capacities (30ml, 50ml, 75ml, 100ml), glass coatings (Frosted, Obsidian Matte, Amber, Champagne Electroplated), cap materials (Weighted Gold, Walnut Wood, Magnetic), and logo branding methods (24K Gold Foil, Sub-surface Laser Engraving, Silk Screen).
- **📋 Slide-Over Quote Basket & Inquiry Modal**: Complete quotation submission flow tailored for B2B procurement.
- **💼 Live B2B Admin Pipeline Dashboard**: Integrated admin panel for tracking incoming client quotes, managing quote pipeline statuses (*New*, *Reviewing*, *Quoted*, *Accepted*, *Completed*), inspecting mold specs, and reviewing bulk pricing rules.
- **📱 Responsive Luxury Experience**: Mobile-tailored sticky quote CTA bar, slide-out drawer filters, and swipeable studio galleries.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS v4, Custom HSL Glassmorphic CSS
- **Icons**: Lucide React
- **State Management**: React Context API (`CartContext`)

---

## 🔌 Eventual Backend Architecture (Planned)

The frontend is structured for easy integration with a Node.js backend:

- **Server**: Node.js & Express.js (REST API)
- **Database**: MongoDB & Mongoose ORM
- **Media Storage**: Cloudinary (for high-res studio bottle photography)
- **Auth**: JWT Authentication & Role-Based Access (Client vs. Admin)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/jarsking-luxury-b2b.git

# Navigate into directory
cd jarsking-luxury-b2b

# Install dependencies
npm install

# Start Vite dev server
npm run dev
