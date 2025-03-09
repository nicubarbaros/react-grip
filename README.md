# React Grip

A modern React component library built with TypeScript, Vite, and Tailwind CSS. The library provides a responsive width controller component for testing and previewing responsive designs.

## Installation

```bash
npm install react-grip
# or
yarn add react-grip
# or
pnpm add react-grip
```

## Usage

```tsx
import { GripController } from "react-grip";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <GripController>
        <div>Your responsive content here</div>
      </GripController>

      {/* With custom width range */}
      <GripController minWidth={300} maxWidth={1000}>
        <div>Your responsive content here</div>
      </GripController>

      {/* With controls in top-right position */}
      <GripController controlPosition="top-right" name="Header Section">
        <div>Your responsive content here</div>
      </GripController>
    </div>
  );
}
```

## Components

### GripController

A component that wraps your content and provides a width controller UI to test different viewport widths.

Props:

- `children`: React nodes to be rendered inside the width-controlled container
- `minWidth` (optional): Minimum width in pixels (default: 200)
- `maxWidth` (optional): Maximum width in pixels (default: 1200)
- `controlPosition` (optional): Position of the width controls - "below" or "top-right" (default: "below")
- `name` (optional): Label to display above the width controller

## Styling

This library uses Tailwind CSS for styling. All components come with default styling, but you can easily customize them by:

1. Using your own Tailwind configuration
2. Overriding the default Tailwind classes
3. Using your own CSS classes

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the library:
   ```bash
   npm run build
   ```

## Features

- 🚀 Built with Vite
- 📦 Tree-shakeable
- 🔥 TypeScript support
- 💅 Tailwind CSS for styling
- 📚 Comprehensive documentation (coming soon)

## License

MIT
