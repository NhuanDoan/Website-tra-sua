import type { Metadata } from "next";
import DemoAuthForm from "../../components/account/DemoAuthForm";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Đăng ký" };

export default function RegisterPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TÀI KHOẢN DEMO" title="Tạo tài khoản" description="Tạo tài khoản demo lưu cục bộ trong trình duyệt hiện tại." />
      <DemoAuthForm mode="register" />
    </div>
  );
}
