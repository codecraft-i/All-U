import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const next = new URLSearchParams(loc.search).get("next") || "/";
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    if (await login(form.email, form.password)) nav(next, { replace: true });
  };

  return (
    <section className="mx-auto max-w-sm space-y-4 p-6">
      <h1 className="text-2xl font-bold">Kirish</h1>
      <input className="w-full rounded border p-2" placeholder="Email"
        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full rounded border p-2" type="password" placeholder="Parol"
        value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button className="w-full" onClick={submit}>Kirish</Button>
      <p className="text-center text-sm">Hisob yoʻqmi? <Link to="/register" className="underline">Ro‘yxatdan o‘tish</Link></p>
    </section>
  );
}
