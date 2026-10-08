"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useSyncExternalStore } from "react";
import styles from "../../styles/Site.module.css";
import CartDialog from "../cart/CartDialog";
import { useCart } from "../cart/CartProvider";

function subscribeToAccountName(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("teamilk:account-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("teamilk:account-change", onChange);
  };
}

function getAccountNameSnapshot(): string | null {
  try {
    const name = window.localStorage.getItem("NameTT");
    const isLoggedIn = window.localStorage.getItem("trangthaiDN") === "True";
    return isLoggedIn && name?.trim() ? name.trim().split(/\s+/).pop() ?? null : null;
  } catch {
    return null;
  }
}

const getServerAccountName = () => null;

const navigationLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/info", label: "Giới thiệu" },
  { href: "/menu", label: "Menu" },
  { href: "/news", label: "Tin tức" },
  { href: "/contact", label: "Liên hệ" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const accountName = useSyncExternalStore(
    subscribeToAccountName,
    getAccountNameSnapshot,
    getServerAccountName,
  );
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartTriggerRef = useRef<HTMLButtonElement>(null);
  const { count } = useCart();

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link className={styles.headerLogo} href="/" aria-label="TeaMilk trang chủ">
          <Image
            src="/img/Logo/Logo_header.png"
            alt="TeaMilk"
            width={1280}
            height={720}
            priority
          />
        </Link>

        <button
          className={styles.navToggle}
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={navOpen}
          aria-label={navOpen ? "Đóng điều hướng" : "Mở điều hướng"}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className={styles.navToggleIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Menu</span>
        </button>

        <nav
          className={`${styles.primaryNav} ${navOpen ? styles.primaryNavOpen : ""}`}
          id="primary-navigation"
          aria-label="Điều hướng chính"
        >
          <ul className={styles.navList}>
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className={styles.navLink}
                  aria-current={pathname === href ? "page" : undefined}
                  href={href}
                  onClick={() => setNavOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className={styles.accountLink}
          href={accountName ? "/account" : "/login"}
          aria-label={accountName ? `Tài khoản ${accountName}` : "Đăng nhập"}
          onClick={() => setNavOpen(false)}
        >
          <span className={styles.accountEyebrow}>
            {accountName ? "Xin chào" : "Tài khoản"}
          </span>
          <span className={styles.accountName}>{accountName ?? "Đăng nhập"}</span>
        </Link>
        <button ref={cartTriggerRef} className="headerCartButton" type="button" onClick={() => setCartOpen(true)} aria-label={`Mở giỏ hàng, ${count} sản phẩm`}>
          <svg className="headerCartIcon" viewBox="0 0 24 24" aria-hidden="true" fill="none">
            <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1.3" fill="currentColor" />
            <circle cx="18" cy="20" r="1.3" fill="currentColor" />
          </svg>
          <span className="headerCartLabel">Giỏ hàng</span><b>{count}</b>
        </button>
      </div>
      <CartDialog isOpen={cartOpen} onClose={() => setCartOpen(false)} triggerRef={cartTriggerRef} />
    </header>
  );
}
