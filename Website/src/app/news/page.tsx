import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";

export const metadata: Metadata = { title: "Tin tức" };

export default function NewsPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TEAMILK" title="Tin tức" description="Cập nhật những câu chuyện và thông tin mới từ TeaMilk." />
      <section className="newsEmpty" aria-labelledby="news-empty-title"><span aria-hidden="true">✦</span><h2 id="news-empty-title">Tin mới sẽ sớm được cập nhật</h2><p>Hiện chưa có bài viết nào được đăng.</p></section>
    </div>
  );
}
