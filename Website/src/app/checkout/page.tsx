import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";
import DemoCheckoutForm from "../../components/checkout/DemoCheckoutForm";

export const metadata: Metadata = { title: "Thanh toán" };

export default function CheckoutPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="ĐẶT HÀNG" title="Thanh toán" description="Xem lại giỏ hàng và thông tin nhận hàng." />
      <DemoCheckoutForm />
    </div>
  );
}
