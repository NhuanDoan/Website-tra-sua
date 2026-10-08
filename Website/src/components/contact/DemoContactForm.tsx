"use client";

import { useState, type FormEvent } from "react";

export default function DemoContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return <form className="formCard" onSubmit={submit}>
    <p className="demoNotice">Biểu mẫu chưa kết nối dịch vụ gửi tin nhắn. Không nhập thông tin nhạy cảm.</p>
    <label className="field">Họ tên<input name="name" autoComplete="name" required /></label>
    <label className="field">Email<input name="email" type="email" autoComplete="email" required /></label>
    <label className="field">Chủ đề<select name="topic" defaultValue="general"><option value="general">Góp ý chung</option><option value="product">Sản phẩm</option><option value="website">Website học tập</option></select></label>
    <label className="field">Nội dung<textarea name="message" rows={5} required /></label>
    {submitted ? <p className="formFeedback" role="status">Biểu mẫu đã được kiểm tra. Hiện chưa có tin nhắn nào được gửi đi.</p> : null}
    <button className="primaryButton" type="submit">Gửi lời nhắn</button>
  </form>;
}
