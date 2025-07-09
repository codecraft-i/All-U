import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Register() {
  const { register: doRegister } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ first_name: "", phone_number: "", email: "", password: "" });

  const submit = async () => {
    if (await doRegister(form)) nav("/login");
  };

  return (
    <section className="mx-auto max-w-sm space-y-4 p-6">
      <h1 className="text-2xl font-bold">Ro‘yxatdan o‘tish</h1>
      <input className="w-full rounded border p-2" placeholder="Ism"
        value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
      <input className="w-full rounded border p-2" placeholder="Telefon"
        value={form.phone_number} onChange={(e) => setForm({ ...form, phone_number: e.target.value })} />
      <input className="w-full rounded border p-2" placeholder="Email"
        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full rounded border p-2" type="password" placeholder="Parol"
        value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button className="w-full" onClick={submit}>Ro‘yxatdan o‘tish</Button>
      <p className="text-center text-sm">Hisobingiz bormi? <Link to="/login" className="underline">Kirish</Link></p>
    </section>
  );
}
