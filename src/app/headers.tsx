// Here will be the header of the app, like the menu, the logo, the styles, etc.

// Path: src/app/index.tsx  

export const Header = () => {
  return (
    <nav className="flex">
      <h1 className="flex-1 text-2xl font-bold">App</h1>
      <ul className="flex font-family: system-ui, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>          
        </li>
      </ul>
    </nav>
  );
};