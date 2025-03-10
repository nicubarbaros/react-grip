# React Grip

A React component for creating resizable containers with smooth drag interactions.

## Features

- Smooth drag interactions
- Customizable min and max widths
- TypeScript support
- Tailwind CSS styling
- Accessible controls
- Customizable control position

## Installation

```bash
npm install react-grip
# or
yarn add react-grip
```

## Usage

```tsx
import { GripController } from "react-grip";

function App() {
  return (
    <GripController name="My Resizable Container" minWidth={300} maxWidth={800} controlPosition="top-right">
      <div>Your content here</div>
    </GripController>
  );
}
```

## Props

| Prop              | Type                                                           | Default       | Description                             |
| ----------------- | -------------------------------------------------------------- | ------------- | --------------------------------------- |
| `name`            | `string`                                                       | Required      | Name of the container for accessibility |
| `minWidth`        | `number`                                                       | Required      | Minimum width in pixels                 |
| `maxWidth`        | `number`                                                       | Required      | Maximum width in pixels                 |
| `controlPosition` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Position of the resize control          |

## License

MIT
