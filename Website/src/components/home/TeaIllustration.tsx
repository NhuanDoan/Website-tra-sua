import styles from "../../styles/TeaIllustration.module.css";

export default function TeaIllustration() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <div className={styles.halo} />
      <div className={styles.glass}>
        <span className={styles.lid} />
        <span className={styles.drink} />
        <span className={`${styles.ice} ${styles.iceOne}`} />
        <span className={`${styles.ice} ${styles.iceTwo}`} />
        <span className={`${styles.ice} ${styles.iceThree}`} />
        <span className={styles.pearls} />
      </div>
      <span className={styles.dot} />
      <span className={styles.line} />
    </div>
  );
}
