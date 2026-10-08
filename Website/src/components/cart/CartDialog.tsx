"use client";

import { type KeyboardEvent, type RefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/Site.module.css";
import { useCart } from "./CartProvider";

type CartDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const formatVnd = (amount: number) => `${amount.toLocaleString("vi-VN")} VNĐ`;

export default function CartDialog({ isOpen, onClose, triggerRef }: CartDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { items, count, total, setQuantity } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstFocusable = dialog.querySelector<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );
    (firstFocusable ?? dialog).focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen, triggerRef]);

  if (!isOpen || typeof document === "undefined") return null;

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;

    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (focusableElements.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const activeIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    const lastIndex = focusableElements.length - 1;
    if (event.shiftKey && activeIndex <= 0) {
      event.preventDefault();
      focusableElements[lastIndex]?.focus();
    } else if (!event.shiftKey && (activeIndex === lastIndex || activeIndex === -1)) {
      event.preventDefault();
      focusableElements[0]?.focus();
    }
  };

  return (
    createPortal(<div className={styles.cartOverlay} role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section ref={dialogRef} tabIndex={-1} onKeyDown={handleDialogKeyDown} className={styles.cartDialog} role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <header className={styles.cartHeader}>
            <div><p className={styles.cartEyebrow}>TEAMILK</p><h2 id="cart-title">Giỏ hàng <span>({count} món)</span></h2></div>
            <button type="button" className={styles.cartClose} aria-label="Đóng giỏ hàng" onClick={onClose}>×</button>
          </header>
          <div className={styles.cartBody}>
            {!items.length ? <div className={styles.cartEmpty}><span aria-hidden="true">♧</span><h3>Giỏ hàng đang trống</h3><p>Chọn món yêu thích để bắt đầu.</p><button type="button" className={styles.cartSecondary} onClick={() => { onClose(); router.push("/menu"); }}>Khám phá menu</button></div> : <>
              <ul className={styles.cartList}>
                {items.map((item) => <li className={styles.cartItem} key={item.id}>
                  <Image src={item.image} alt="" width={76} height={76} />
                  <div className={styles.cartItemInfo}><h3>{item.name}</h3><p>{formatVnd(item.price)}</p></div>
                  <label className={styles.cartQuantity}><span className="visually-hidden">Số lượng {item.name}</span><input type="number" min="0" value={item.quantity} onChange={(event) => setQuantity(item.id, Math.max(0, Number(event.target.value)))} /></label>
                  <strong className={styles.cartLineTotal}>{formatVnd(item.price * item.quantity)}</strong>
                </li>)}
              </ul>
              <div className={styles.cartTotal}><span>Tạm tính</span><strong>{formatVnd(total)}</strong></div>
            </>}
          </div>
          <footer className={styles.cartFooter}>
            <button type="button" className={styles.cartSecondary} onClick={onClose}>Đóng</button>
            <button className={styles.cartCheckout} type="button" disabled={!items.length} onClick={() => { onClose(); router.push("/checkout"); }}>Tiếp tục</button>
          </footer>
      </section>
    </div>, document.body)
  );
}
