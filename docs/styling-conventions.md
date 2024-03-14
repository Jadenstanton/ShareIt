# Styling Conventions

This document outlines the styling conventions adopted in our React project. We utilize Tailwind CSS for its utility-first approach, supplemented by custom CSS where necessary. The goal is to ensure consistency, maintainability, and ease of development across the entire project.

## Tailwind CSS

### Principles

- **Utility-First**: Primarily use Tailwind's utility classes for styling. This approach speeds up the development process and ensures consistency.
- **Responsiveness**: Use Tailwind's responsive prefixes to build a mobile-first and responsive design.
- **Customization**: Extend Tailwind's default configuration (`tailwind.config.js`) to include project-specific colors, spacing, breakpoints, and more.

### Best Practices

- **Apply Utility Classes in JSX**: Directly apply utility classes within component files to keep styling transparent and localized.
- **Avoid Inline Styles**: Reserve inline styles for dynamic values computed at runtime. Use utility classes wherever possible.
- **Component-Specific Styles**: For complex component-specific styles that cannot be efficiently handled by utility classes, consider using CSS Modules or a separate CSS file.

## Custom CSS

While Tailwind CSS covers the majority of our styling needs, certain scenarios might require custom CSS.

### Scenarios for Custom CSS

- **Complex Animations**: Use custom CSS for intricate animations that go beyond Tailwind's `transition` utilities.
- **Unique Design Elements**: For design elements uniquely specific to our application that Tailwind cannot accommodate out of the box.

### CSS Modules

For component-specific styles, we adopt CSS Modules to avoid class name conflicts and ensure style encapsulation.

```jsx
// Example of using CSS Modules
import React from "react";
import styles from "./Button.module.css";

function Button({ label }) {
  return <button className={styles.button}>{label}</button>;
}
```

### Global Styles

Global styles, such as base typography, body background, and root variable definitions, should be placed in a global CSS file (**index.css** or **tailwind.css**) imported into the application entry point (**index.js** or **App.js**).

## Linting and Formatting

To ensure code quality and consistency, adhere to the following:

- **Stylelint:** Use Stylelint with a configuration that supports Tailwind CSS and CSS Modules.
- **Prettier:** Use Prettier for code formatting, including CSS, SASS
