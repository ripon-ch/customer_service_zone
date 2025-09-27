# Customer Support — Ticket System

A React + Tailwind responsive ticket system. It displays customer tickets, lets you move items into Task Status, and complete them into a Resolved list. Toast notifications are powered by React-Toastify. The app is JavaScript-only (no TypeScript in app code).

## Q&A

- What is JSX, and why is it used?
  - JSX is a syntax extension for JavaScript that lets you write UI markup directly in JS files. It looks like HTML but compiles to `React.createElement` calls. It makes components easier to read, write, and reason about.

- What is the difference between State and Props?
  - Props are read-only inputs passed from parent to child components. State is internal, mutable data local to a component (or lifted to a common parent) that triggers re-renders when it changes.

- What is the `useState` hook, and how does it work?
  - `useState(initialValue)` returns a state value and a setter function. Calling the setter schedules a re-render with the new state. React preserves state between renders per component instance.

- How can you share state between components in React?
  - Lift state up to the nearest common parent and pass values and callbacks down via props. For complex trees, use Context, state management libraries, or URL/search params when appropriate.

- How is event handling done in React?
  - Attach event handlers as props (e.g., `onClick`, `onChange`) using camelCase and pass a function. React wraps native events in a synthetic event system for consistency across browsers.
