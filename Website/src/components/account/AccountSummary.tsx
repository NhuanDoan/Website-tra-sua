"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { signOutDemoUser } from "../../lib/demo-auth";

function subscribeToAccount(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("teamilk:account-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("teamilk:account-change", onChange);
  };
}

function getAccountSnapshot(): string | null {
  try {
    if (window.localStorage.getItem("trangthaiDN") !== "True") return null;
    const name = window.localStorage.getItem("NameTT")?.trim() ?? "";
    if (!name) return null;
    const phone = window.localStorage.getItem("PhoneTT")?.trim() ?? "";
    return `${name}\u0000${phone}`;
  } catch {
    return null;
  }
}

export default function AccountSummary() {
  const router = useRouter();
  const accountSnapshot = useSyncExternalStore(subscribeToAccount, getAccountSnapshot, () => null);
  const [name, phone] = accountSnapshot?.split("\u0000") ?? [];

  const handleSignOut = () => {
    if (!signOutDemoUser()) return;
    router.push("/");
  };

  if (!name) {
    return (
      <section className="statusPanel" aria-labelledby="account-required-title">
        <div>
          <h2 id="account-required-title">Bạn chưa đăng nhập</h2>
          <p>Đăng nhập bằng tài khoản demo đã lưu trong trình duyệt này để xem thông tin cơ bản.</p>
          <Link className="primaryButtonLink" href="/login">Đăng nhập</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="accountCard" aria-labelledby="account-name">
      <p className="pageEyebrow">TÀI KHOẢN DEMO</p>
      <h2 id="account-name">{name}</h2>
      <dl className="accountDetails">
        <div><dt>Số điện thoại</dt><dd>{phone || "Chưa có dữ liệu"}</dd></div>
        <div><dt>Lưu trữ</dt><dd>Trình duyệt hiện tại</dd></div>
      </dl>
      <nav className="accountNav" aria-label="Khu vực tài khoản">
        <Link href="/orders">Lịch sử đơn hàng</Link>
        <button className="secondaryButton" type="button" onClick={handleSignOut}>Đăng xuất</button>
      </nav>
    </section>
  );
}
