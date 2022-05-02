import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "/dev/kawauso7c",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
      <header className="py-10 border-b">
        <div className="contaimer mx-auto max-w-5xl"> 
        <Link to="/" className="text-4xl text-gray-700">/dev/kawauso7c</Link>
        <p className="text-gray-800 mt-3 text-sm">Daily life in Japan</p>
        </div>

      </header>
      <div className="pb-52">
      <Outlet />
      </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
