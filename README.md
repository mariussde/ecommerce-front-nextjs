# Bejamas Photography Store

A modern e-commerce platform for premium photography, built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- 🖼️ Featured product showcase
- 🛒 Shopping cart with persistent state
- 🔍 Category filtering
- 📱 Responsive design
- 📑 Pagination
- 💳 Price sorting
- 🎨 Clean, minimalist UI

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** Zustand
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bejamas-store.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app router pages
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and API
└── public/             # Static assets
```

## API Integration

The project uses a RESTful API with the following endpoints:

- `/products` - Get all products (paginated)
- `/products/{slug}` - Get product details
- `/categories` - Get all categories

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.