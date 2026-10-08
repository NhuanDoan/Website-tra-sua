import Link from "next/link";
import TeaIllustration from "./TeaIllustration";
import styles from "../../styles/Site.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroOrbOne} aria-hidden="true" />
      <div className={styles.heroOrbTwo} aria-hidden="true" />
      <div className={styles.heroContent}>
        <div className={styles.heroBrand}>
          <p className={styles.heroEyebrow}>TEA · MILK</p>
          <h1 className={styles.heroTitle} id="home-hero-title">TeaMilk</h1>
          <p className={styles.heroDescription}>Trà sữa</p>
          <Link className={styles.heroCta} href="/menu">
            Xem menu <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <TeaIllustration />
      </div>
    </section>
  );
}
