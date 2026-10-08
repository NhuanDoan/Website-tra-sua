import type { Metadata } from "next";
import DemoAuthForm from "../../components/account/DemoAuthForm";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Đăng nhập" };

export default function LoginPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TÀI KHOẢN DEMO" title="Đăng nhập" description="Đăng nhập bằng tài khoản demo đã lưu trên thiết bị này." />
      <DemoAuthForm mode="login" />
    </div>
  );
}
