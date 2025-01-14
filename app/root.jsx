import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStylesHref from "./app.css?url";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: appStylesHref }
];

export function Layout({ children }) {
  return (
    <html lang="en" className="bg-stone-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="bg-stone-100 text-slate-700">
        < Header />
        <main className="pt-11"> {/* Adjust padding as needed */}
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
        < Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
