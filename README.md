# Aegis Protocol Landing Page

A cinematic landing page for Aegis Protocol, featuring modern gradients, particle backgrounds, cinematic typography, and smooth motion animations.

## 🚀 Features

- **Cinematic Design**: Apple keynote-style landing page with Framer Motion animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **3D Glass Cards**: Interactive 3D cards with metallic textures
- **Particle Backgrounds**: Animated golden particles and light effects
- **Typewriter Terminal**: AI terminal with realistic typing animations
- **Smooth Scrolling**: Optimized scrolling experience

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for cinematic effects
- **Monument Extended**: Premium typography font

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aegis-protocol.git
   cd aegis-protocol
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Manual Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
aegis/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── AboutSection.tsx     # AI mechanisms 3D cards
│   ├── ClosingSection.tsx   # Final CTA section
│   ├── HeroSection.tsx      # Hero with logos and CTA
│   ├── ParticleBackground.tsx # Animated particles
│   ├── TerminalSection.tsx  # AI terminal with typing
│   └── VisionSection.tsx    # Vision statement
├── public/
│   ├── aegis.png           # Aegis logo
│   ├── safemoon.png        # SafeMoon logo
│   ├── titano.png          # Titano logo
│   ├── tomb.png            # Tomb logo
│   ├── anchor.png          # Anchor logo
│   └── ohm.png             # OHM logo
└── package.json
```

## 🎨 Design System

### Colors
- **Charcoal**: `#0b0b0b` - Primary background
- **Gold**: `#D4AF37` - Primary accent
- **Gold Light**: `#F4E4BC` - Secondary accent
- **Gold Dark**: `#B8860B` - Dark accent

### Typography
- **Monument Extended**: Headlines and hero text
- **Inter**: Body text and UI elements

### Animations
- **Stagger**: 0.15s for word-by-word reveals
- **Easing**: `[0.22, 1, 0.36, 1]` for smooth transitions
- **Duration**: 0.9s for section entries

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Font Configuration
The project uses Monument Extended font. Ensure you have the proper license for production use.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js built-in optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: [https://aegis-protocol.vercel.app](https://aegis-protocol.vercel.app)
- **Documentation**: [https://docs.aegisprotocol.com](https://docs.aegisprotocol.com)
- **Twitter**: [@protocol_aegis](https://x.com/protocol_aegis)

## 🆘 Support

For support, email support@aegisprotocol.com or join our Discord community.
