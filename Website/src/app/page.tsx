import type { Metadata } from "next";
import HomeHero from "../components/home/HomeHero";
import HomeCarousel from "../components/home/HomeCarousel";
import Link from "next/link";

export const metadata: Metadata = { title: "Trang chủ" };

export default function HomePage() {
  return <>
    <HomeHero />
    <section className="homeSection homeMenuTeaser" aria-labelledby="home-menu-title">
      <div><p className="pageEyebrow">TEAMILK MENU</p><h2 id="home-menu-title">Khám phá menu TeaMilk</h2><p>Tìm thức uống và món ăn cho lần ghé thăm tiếp theo của bạn.</p><Link className="primaryButtonLink" href="/menu">Xem toàn bộ menu</Link></div>
      <HomeCarousel />
    </section>
  </>;
}
