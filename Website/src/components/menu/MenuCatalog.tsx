"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { legacyProducts, productCategories, type ProductCategory } from "../../data/legacy-products";
import { useCart } from "../cart/CartProvider";

const money = (value: number) => `${value.toLocaleString("vi-VN")} ₫`;

export default function MenuCatalog() {
  const [category, setCategory] = useState<ProductCategory | "Tất cả">("Tất cả");
  const [query, setQuery] = useState("");
  const { addItem } = useCart();
  const shownProducts = useMemo(() => legacyProducts.filter((item) =>
    (category === "Tất cả" || item.category === category) && item.name.toLocaleLowerCase("vi").includes(query.toLocaleLowerCase("vi"))), [category, query]);

  return (
    <div className="menuCatalog">
      <div className="menuTools">
        <div className="categoryTabs" role="group" aria-label="Lọc danh mục sản phẩm">
          {(["Tất cả", ...productCategories] as const).map((item) => <button key={item} type="button" className={category === item ? "categoryTab categoryTabActive" : "categoryTab"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="searchField"><span className="visually-hidden">Tìm sản phẩm</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm trong menu" /></label>
      </div>
      {productCategories.filter((item) => category === "Tất cả" || category === item).map((item) => {
        const products = shownProducts.filter((product) => product.category === item);
        if (!products.length) return null;
        return <section className="menuCategory" key={item} aria-labelledby={`category-${productCategories.indexOf(item)}`}><h2 id={`category-${productCategories.indexOf(item)}`}>{item}</h2><div className="productGrid">{products.map((product) => <article className="productCard" key={product.id}>
          <div className="productPhoto"><Image src={product.image} alt={product.name} fill sizes="(max-width: 620px) 48vw, (max-width: 960px) 32vw, 280px" /></div>
          <div className="productBody"><p className="productCategory">{product.category}</p><h3>{product.name}</h3><p className="productPrice">{money(product.price)}</p><button className="primaryButton" type="button" onClick={() => addItem(product)}>Thêm vào giỏ</button></div>
        </article>)}</div></section>;
      })}
      {!shownProducts.length ? <p className="emptyState">Không tìm thấy sản phẩm phù hợp.</p> : null}
    </div>
  );
}
