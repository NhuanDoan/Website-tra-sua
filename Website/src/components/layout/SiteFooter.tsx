import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Site.module.css";

const navigationLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/info", label: "Giới thiệu" },
  { href: "/menu", label: "Menu" },
  { href: "/news", label: "Tin tức" },
  { href: "/contact", label: "Liên hệ" },
] as const;

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerIdentity}>
          <Link className={styles.footerBrand} href="/" aria-label="TeaMilk trang chủ">
            <span className={styles.footerLogoFrame}>
              <Image src="/img/Logo/Logo_header.png" alt="TeaMilk" width={1280} height={720} />
            </span>
          </Link>
          <p className={styles.footerNote}>Khám phá menu TeaMilk</p>
        </div>

        <nav aria-label="Điều hướng chân trang">
          <h2 className={styles.footerNavTitle}>Khám phá</h2>
          <ul className={styles.footerNav}>
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <Link className={styles.footerLink} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
