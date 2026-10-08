"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { registerDemoUser, signInDemoUser, type DemoUser } from "../../lib/demo-auth";

type DemoAuthFormProps = {
  mode: "login" | "register";
};

export default function DemoAuthForm({ mode }: DemoAuthFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [registered, setRegistered] = useState(false);
  const isRegister = mode === "register";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");

    if (isRegister) {
      if (password !== confirmPassword) {
        setFeedback("Mật khẩu xác nhận chưa khớp.");
        return;
      }
      const user: DemoUser = { name: name.trim(), phone: phone.trim(), password };
      if (!registerDemoUser(user)) {
        setFeedback("Không thể lưu tài khoản trong trình duyệt này.");
        return;
      }
      setRegistered(true);
      return;
    }

    if (!signInDemoUser(phone.trim(), password)) {
      setFeedback("Thông tin đăng nhập chưa đúng hoặc dữ liệu demo không đọc được.");
      return;
    }
    router.push("/menu");
  };

  if (registered) {
    return (
      <section className="formCard authForm" aria-labelledby="registration-complete-title">
        <p className="pageEyebrow">ĐĂNG KÝ DEMO</p>
        <h2 id="registration-complete-title">Tạo tài khoản thành công</h2>
        <p className="formSwitch">Thông tin chỉ được lưu trong trình duyệt này.</p>
        <Link className="primaryButtonLink" href="/login">Đến trang đăng nhập</Link>
      </section>
    );
  }

  return (
    <form className="formCard authForm" onSubmit={handleSubmit}>
      <p className="demoNotice">Đây là tài khoản demo. Mật khẩu được lưu trong localStorage của trình duyệt; không dùng mật khẩu thật.</p>
      {isRegister ? (
        <label className="field">
          <span>Họ và tên</span>
          <input autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      ) : null}
      <label className="field">
        <span>Số điện thoại</span>
        <input autoComplete="tel" inputMode="tel" type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <label className="field">
        <span>Mật khẩu</span>
        <input autoComplete={isRegister ? "new-password" : "current-password"} type={showPassword ? "text" : "password"} required value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      {isRegister ? (
        <label className="field">
          <span>Nhập lại mật khẩu</span>
          <input autoComplete="new-password" type={showPassword ? "text" : "password"} required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
      ) : null}
      <label className="checkboxField">
        <input type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} />
        <span>Hiện mật khẩu</span>
      </label>
      {feedback ? <p className="formFeedback" role="status">{feedback}</p> : null}
      <button className="primaryButton" type="submit">{isRegister ? "Tạo tài khoản demo" : "Đăng nhập"}</button>
      <p className="formSwitch">
        {isRegister ? "Đã có tài khoản demo?" : "Chưa có tài khoản demo?"}{" "}
        <Link href={isRegister ? "/login" : "/register"}>{isRegister ? "Đăng nhập" : "Đăng ký"}</Link>
      </p>
    </form>
  );
}
