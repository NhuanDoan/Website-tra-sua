import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Lịch sử đơn hàng" };

export default function OrdersPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TÀI KHOẢN" title="Lịch sử đơn hàng" description="Theo dõi những đơn hàng của bạn." />
      <section className="newsEmpty" aria-labelledby="orders-empty-title">
        <span aria-hidden="true">▤</span>
        <h2 id="orders-empty-title">Bạn chưa có đơn hàng</h2>
        <p>Các đơn hàng đã đặt sẽ xuất hiện tại đây.</p>
        <Link className="primaryButtonLink" href="/menu">Khám phá menu</Link>
      </section>
    </div>
  );
}
