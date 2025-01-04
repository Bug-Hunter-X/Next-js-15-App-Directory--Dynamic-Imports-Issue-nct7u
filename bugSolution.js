```javascript
// pages/index.js
export default async function Home() {
  const component = await import('./my-component'); // Dynamic import

  return (
    <div>
      <h1>Home Page</h1>
      <component.default />
    </div>
  );
}

// my-component.js
export default function MyComponent() {
  return <div>This is a dynamic component</div>;
}
```