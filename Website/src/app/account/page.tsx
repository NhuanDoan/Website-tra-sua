import type { Metadata } from "next";
import AccountSummary from "../../components/account/AccountSummary";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Tài khoản" };

export default function AccountPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TÀI KHOẢN DEMO" title="Tài khoản" description="Thông tin tài khoản được lưu trong trình duyệt hiện tại." />
      <AccountSummary />
    </div>
  );
}
