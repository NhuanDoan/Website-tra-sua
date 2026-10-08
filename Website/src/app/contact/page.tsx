import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";
import DemoContactForm from "../../components/contact/DemoContactForm";
import Image from "next/image";

export const metadata: Metadata = { title: "Liên hệ" };

export default function ContactPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TEAMILK" title="Liên hệ" description="Gửi lời nhắn đến TeaMilk." />
      <div className="contactLayout"><div><Image className="contactArtwork" src="/img/Contact/banner-lienhe.jpg" alt="Minh họa liên hệ TeaMilk" width={900} height={500} /><p className="demoNotice">Biểu mẫu hiện chỉ hiển thị giao diện và chưa gửi tin nhắn đến hộp thư.</p></div><DemoContactForm /></div>
    </div>
  );
}
