import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import { CartProvider } from "../components/cart/CartProvider";
import "../styles/Pages.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: { default: "TeaMilk", template: "%s | TeaMilk" },
  description: "TeaMilk",
  icons: { icon: "/img/Logo/Logo_header.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <a className="skipLink" href="#main-content">Bỏ qua điều hướng</a>
        <CartProvider>
          <div className="siteShell">
            <SiteHeader />
            <main id="main-content" className="siteMain">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
