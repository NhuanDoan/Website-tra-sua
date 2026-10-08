export type ProductCategory = "Trà sữa" | "Trà trái cây" | "Đá xay" | "Thức uống theo mùa" | "Đồ ăn nhẹ";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
};

// Reference catalog copied from the legacy Menu page. Prices and branding are not current business data.
export const legacyProducts: Product[] = [
  { id: "trasua-hoang-kim", name: "Trà Sữa Hoàng Kim", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Hoàng Kim.jpg" },
  { id: "trasua-chocolate", name: "Trà Sữa Chocolate", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Chocolate.jpg" },
  { id: "trasua-oolong-3j", name: "Trà Sữa Oolong 3J", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Oolong 3J.jpg" },
  { id: "trasua-hokkaido", name: "Trà Sữa Hokkaido", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Hokkaido.jpg" },
  { id: "trasua-suong-sao", name: "Trà Sữa Sương Sáo", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Sương Sáo.jpg" },
  { id: "trasua-tran-chau-hoang-kim", name: "Trà Sữa Trân Châu Hoàng Kim", category: "Trà sữa", price: 50000, image: "/img/Menu/Trasua/Trà Sữa Trân Châu Hoàng Kim.jpg" },
  { id: "chanh-ai-yu", name: "Chanh Ai-Yu và Trân Châu Trắng", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Chanh Ai-Yu và Trân Châu Trắng.jpg" },
  { id: "alisan-trai-cay", name: "Trà Alisan Trái Cây", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Trà Alisan Trái Cây.jpg" },
  { id: "alisan-vai", name: "Trà Alisan Vải", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Trà Alisan Vải.jpg" },
  { id: "oolong-vai", name: "Trà Oolong Vải", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Trà Oolong Vải.jpg" },
  { id: "tra-xanh-dao", name: "Trà Xanh Đào", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Trà Xanh Đào.jpg" },
  { id: "den-dao", name: "Đen Đào", category: "Trà trái cây", price: 50000, image: "/img/Menu/TraTraCay/Đen Đào.jpg" },
  { id: "khoai-mon-da-xay", name: "Khoai Môn Đá Xay", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Khoai Môn Đá Xay.jpg" },
  { id: "matcha-da-xay", name: "Matcha Đá Xay", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Matcha Đá Xay.jpg" },
  { id: "mint-choco-smoothie", name: "Mint Choco Smoothie", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Mint Choco Smoothie.jpg" },
  { id: "dao-hong-da-tuyet", name: "Đào Hồng Đá Tuyết", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Đào Hồng Đá Tuyết.jpg" },
  { id: "yakult-dao-da-xay", name: "Yakult Đào Đá Xay", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Yakult Đào Đá Xay.jpg" },
  { id: "strawberry-oreo-smoothie", name: "Strawberry Oreo Smoothie", category: "Đá xay", price: 50000, image: "/img/Menu/DaXay/Strawberry Oreo Smoothie.jpg" },
  { id: "cotton-candy-milk-tea", name: "Cotton Candy Milk Tea", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Cotton Candy Milk Tea.jpg" },
  { id: "milo-kem-chanh", name: "Milo Kem Chanh", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Milo Kem Chanh.jpg" },
  { id: "rainbow-crush", name: "Rainbow Crush", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Rainbow Crush.jpg" },
  { id: "sunrise-milk-tea", name: "Sunrise Milk Tea", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Sunrise Milk Tea.jpg" },
  { id: "tra-xanh-kem-sua-milo", name: "Trà Xanh Kem Sữa Milo", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Trà Xanh Kem Sữa Milo.jpg" },
  { id: "alisan-nhan-sen", name: "Trà Alisan Nhãn Sen", category: "Thức uống theo mùa", price: 50000, image: "/img/Menu/ThucUongTheoMua/Trà Alisan Nhãn Sen.jpg" },
  { id: "banh-mi", name: "Bánh mì TeaMilk", category: "Đồ ăn nhẹ", price: 30000, image: "/img/Menu/Banh/BanhMi.png" },
  { id: "butter-chocolate-croissant", name: "Butter Chocolate Croissant", category: "Đồ ăn nhẹ", price: 50000, image: "/img/Menu/Banh/ButterChocolateCroissant.jpg" },
  { id: "green-tea-choco-cake", name: "GreenTea Choco Cake", category: "Đồ ăn nhẹ", price: 50000, image: "/img/Menu/Banh/GreenTeaChocoCake.png" },
  { id: "passion-panna-cotta", name: "Passion Panna Cotta", category: "Đồ ăn nhẹ", price: 50000, image: "/img/Menu/Banh/PassionPannaCotta.png" },
  { id: "pure-butter-croissant", name: "Pure Butter Croissant", category: "Đồ ăn nhẹ", price: 50000, image: "/img/Menu/Banh/PureButterCroissant.jpg" },
  { id: "tiramisu-mini", name: "Tiramisu Mini", category: "Đồ ăn nhẹ", price: 50000, image: "/img/Menu/Banh/TiramisuMini.png" },
];

export const productCategories: ProductCategory[] = ["Trà sữa", "Trà trái cây", "Đá xay", "Thức uống theo mùa", "Đồ ăn nhẹ"];
