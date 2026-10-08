import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";
import MenuCatalog from "../../components/menu/MenuCatalog";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className="contentPage">
      <PageIntro eyebrow="TEAMILK" title="Menu" description="Khám phá thức uống và món ăn TeaMilk." />
      <MenuCatalog />
    </div>
  );
}
