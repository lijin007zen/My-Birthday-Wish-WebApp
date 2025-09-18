# 🎁 Beautiful Birthday Gift Website

A stunning, interactive birthday gift website that allows users to create personalized birthday surprises with animations, music integration, and beautiful UI/UX design.

## ✨ Features

- **Beautiful Creation Form**: Intuitive interface for creating personalized birthday gifts
- **Animated Gift Box**: Interactive gift box with smooth opening animations and particle effects
- **Music Integration**: YouTube music integration with autoplay functionality
- **Custom Messages**: Random birthday message templates with personalization
- **Shareable Links**: Generate unique links to share birthday surprises
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Stunning Animations**: Framer Motion powered animations and micro-interactions
- **Modern UI**: Glassmorphism design with gradient backgrounds and floating particles

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repository-url>
   cd birthday-gift-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The website will automatically reload when you make changes

## 📁 Project Structure

```
src/
├── components/
│   ├── CreateGift.tsx      # Main creation form
│   ├── GiftPage.tsx        # Gift display page
│   ├── GiftBox.tsx         # Animated gift box component
│   ├── BirthdayMessage.tsx # Birthday message display
│   └── FloatingParticles.tsx # Background particle effects
├── utils/
│   └── messages.ts         # Birthday message templates
├── App.tsx                 # Main app component with routing
├── App.css                # Custom animations and styles
├── index.css              # Tailwind CSS imports
└── main.tsx               # App entry point
```

## 🎮 How to Use

### Creating a Birthday Gift

1. **Visit the Homepage**
   - Go to your website's main URL
   - You'll see the beautiful creation form

2. **Fill in the Details**
   - **Your Name**: Enter your name (will be shown to the recipient)
   - **Birthday Person's Name**: Enter the recipient's name
   - **YouTube Link**: (Optional) Paste a YouTube music link for background music

3. **Generate the Link**
   - Click "Generate Gift Link"
   - Copy the generated link and share it with the birthday person

### Opening a Birthday Gift

1. **Click the Shared Link**
   - The recipient opens the link you shared
   - They'll see a personalized message with your name

2. **Interact with the Gift Box**
   - Tap/click the animated gift box
   - Watch the beautiful opening animation

3. **Enjoy the Surprise**
   - Random birthday message appears
   - Background music plays (if provided)
   - Confetti animation celebrates the moment

## 🎵 Music Integration

### YouTube Integration
- Paste any YouTube video URL in the music field
- The system automatically extracts the video ID
- Music plays automatically when the gift box is opened
- Supports looping for continuous background music

### Supported URL Formats
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

## 🎨 Customization

### Adding New Birthday Messages
Edit `src/utils/messages.ts` to add new message templates:

```typescript
export const birthdayMessages = (name: string): string[] => [
  `Your custom message for ${name}! 🎉`,
  // Add more messages here...
];
```

### Customizing Colors and Themes
Modify the gradient backgrounds in `src/App.css`:

```css
.animated-background {
  background: linear-gradient(-45deg, #your-color1, #your-color2, #your-color3, #your-color4);
}
```

### Adding Animation Effects
Use Framer Motion in any component:

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

## 🔧 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router

### Environment Variables (if needed)
Create a `.env` file for any API keys:
```
VITE_YOUTUBE_API_KEY=your_api_key_here
```

## 🛠️ Technical Details

### Dependencies
- **React**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling framework
- **Framer Motion**: Animations
- **React Router**: Client-side routing
- **React Confetti**: Celebration effects
- **Lucide React**: Beautiful icons
- **Vite**: Fast build tool

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Code splitting with React.lazy
- Optimized animations with GPU acceleration
- Responsive images and media queries
- Efficient bundle splitting

## 🎭 Animation Details

### Gift Box Animations
- **Hover Effect**: Scale transform on hover
- **Click Animation**: 360° rotation with scale effects
- **Opening Sequence**: Multi-stage animation with spring physics
- **Particle Effects**: Floating sparkles around the gift box

### Background Effects
- **Gradient Animation**: Shifting color gradients
- **Floating Particles**: Animated background elements
- **Glassmorphism**: Modern blur effects and transparency

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Touch-friendly interactions
- Optimized font sizes for mobile
- Proper viewport configuration
- Swipe-friendly animations
- Mobile-specific optimizations

## 🐛 Troubleshooting

### Music Not Playing
- Ensure the YouTube URL is correct
- Some browsers block autoplay - user interaction may be required
- Check browser's autoplay policies

### Animations Not Smooth
- Ensure hardware acceleration is enabled in browser
- Clear browser cache and reload
- Update to latest browser version

### Link Sharing Issues
- Ensure the full URL is copied including parameters
- Test the link in incognito/private mode
- Check if special characters are encoded properly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Credits

**Developed with ❤️ by LIJIN M**

- Beautiful animations and interactions
- Modern UI/UX design principles
- Responsive and accessible design
- Optimized performance and user experience

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

**Enjoy creating magical birthday surprises! 🎉✨**