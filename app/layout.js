import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
