"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "../cart/CartProvider";

const money = (amount: number) => `${amount.toLocaleString("vi-VN")} ₫`;

export default function DemoCheckoutForm() {
  const { items, total, setQuantity, clearCart } = useCart();
  const [complete, setComplete] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComplete(true);
    clearCart();
  };
  if (complete) return <section className="formCard"><h2>Đã hoàn tất</h2><p>Biểu mẫu thanh toán chưa được kết nối với dịch vụ đặt hàng.</p><Link className="primaryButtonLink" href="/menu">Quay lại menu</Link></section>;
  if (!items.length) return <section className="statusPanel"><div><h2>Giỏ hàng đang trống</h2><p>Hãy thêm món từ menu. Giỏ hàng được giữ trong bộ nhớ trang hiện tại.</p><Link className="primaryButtonLink" href="/menu">Mở menu</Link></div></section>;
  return <form className="checkoutLayout" onSubmit={submit}>
    <section className="formCard"><h2>Thông tin nhận hàng</h2><p className="demoNotice">Thanh toán chưa được kết nối. Biểu mẫu này không tạo đơn hoặc thu thập thông tin.</p>
      <label className="field">Họ tên<input name="name" autoComplete="name" required /></label>
      <label className="field">Số điện thoại<input name="phone" type="tel" autoComplete="tel" required /></label>
      <label className="field">Địa chỉ<input name="address" autoComplete="street-address" required /></label>
      <fieldset className="paymentChoices"><legend>Phương thức thanh toán</legend><label><input type="radio" name="payment" value="cash" defaultChecked /> Tiền mặt</label><label><input type="radio" name="payment" value="transfer" /> Chuyển khoản</label></fieldset>
      <button className="primaryButton" type="submit">Xác nhận đặt hàng</button>
    </section>
    <section className="checkoutSummary"><h2>Tóm tắt giỏ hàng</h2>{items.map((item) => <div className="checkoutLine" key={item.id}><div><b>{item.name}</b><small>{money(item.price)}</small></div><input aria-label={`Số lượng ${item.name}`} type="number" min="0" value={item.quantity} onChange={(event) => setQuantity(item.id, Number(event.target.value))} /></div>)}<p className="checkoutTotal">Tổng cộng <strong>{money(total)}</strong></p></section>
  </form>;
}
