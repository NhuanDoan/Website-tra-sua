import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Giới thiệu" };

export default function InfoPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TEAMILK" title="Về TeaMilk" description="Một góc nhỏ dành cho những khoảnh khắc thưởng thức trà." />
      <section className="brandStory" aria-labelledby="brand-title">
        <div className="brandStoryCopy"><p className="pageEyebrow">CHÀO MỪNG ĐẾN TEAMILK</p><h2 id="brand-title">Dành một chút thời gian cho điều bạn yêu thích</h2><p>Khám phá các lựa chọn trà, thức uống và món ăn trong menu TeaMilk. Chọn món phù hợp với khoảnh khắc của bạn.</p><Link className="primaryButtonLink" href="/menu">Khám phá menu</Link></div>
        <Image className="brandStoryImage" src="/img/Info/lytra.jfif" alt="Tách trà" width={640} height={480} />
      </section>
      <section className="brandFeatureGrid"><article><Image src="/img/Info/anh2.png" alt="Không gian thưởng trà" width={640} height={420} /><h2>Thưởng thức theo cách của bạn</h2><p>Chọn một món uống, tìm hiểu các nhóm sản phẩm và khám phá những lựa chọn có trong menu.</p></article><article><Image src="/img/Info/icon1.png" alt="Minh họa tách trà" width={160} height={160} /><h2>Khám phá menu</h2><p>Duyệt theo danh mục hoặc tìm kiếm món uống bạn đang muốn thử.</p><Link className="textAction" href="/menu">Xem menu</Link></article></section>
    </div>
  );
}
