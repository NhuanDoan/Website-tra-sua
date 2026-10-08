"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  { src: "/img/Home/cover-web-nhãn-01-scaled.jpg", alt: "Thức uống trà trái cây với nhãn" },
  { src: "/img/Home/cover-web-grape-scaled.jpg", alt: "Thức uống trà trái cây vị nho" },
  { src: "/img/Home/Cover-web_rainbow-01-1-scaled.jpg", alt: "Thức uống nhiều màu sắc" },
];

export default function HomeCarousel() {
  const [active, setActive] = useState(0);
  const change = (step: number) => setActive((value) => (value + step + slides.length) % slides.length);
  return <section className="homeCarousel" aria-label="Khám phá TeaMilk">
    <div className="carouselImage" key={slides[active].src}><Image src={slides[active].src} alt={slides[active].alt} fill priority sizes="100vw" /></div>
    <div className="carouselCaption"><p>Khám phá hương vị TeaMilk</p><span>Trà sữa · trà trái cây · thức uống mát lạnh</span></div>
    <button className="carouselArrow carouselPrev" type="button" aria-label="Ảnh trước" onClick={() => change(-1)}>‹</button>
    <button className="carouselArrow carouselNext" type="button" aria-label="Ảnh tiếp theo" onClick={() => change(1)}>›</button>
    <div className="carouselDots" role="group" aria-label="Chọn ảnh">
      {slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Hiển thị ảnh ${index + 1}`} aria-pressed={active === index} className={active === index ? "carouselDot carouselDotActive" : "carouselDot"} onClick={() => setActive(index)} />)}
    </div>
  </section>;
}
