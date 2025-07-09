import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import api from "@/api";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Checkout() {
  const { items, subtotal, dispatch } = useCart();
  const nav = useNavigate();
  const [addr, setAddr] = useState({ location: "", address_line: "" });
  const [promo, setPromo] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!items.length) return toast.error("Savat bo‘sh");
    setLoading(true);
    try {
      const payload = {
        location: addr.location,
        address_line: addr.address_line,
        floor: "",
        apartment: "",
        entrance: "",
        notes: "",
        delivery_time: new Date().toISOString(),
        courier_call: false,
        items: items.map((i) => ({ food: i.food.id, quantity: i.qty })),
        promo_code: promo || undefined
      };
      const { data } = await api.post("orders/", payload);
      dispatch({ type: "CLEAR" });
      nav(`/success/${data.id}`);
    } catch {
      toast.error("Buyurtma yuborishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto max-w-xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Buyurtma ma’lumotlari</h1>
      <input className="w-full rounded border p-2" placeholder="Joylashuv (masalan: Toshkent)"
        value={addr.location} onChange={(e) => setAddr({ ...addr, location: e.target.value })} />
      <input className="w-full rounded border p-2" placeholder="Manzil"
        value={addr.address_line} onChange={(e) => setAddr({ ...addr, address_line: e.target.value })} />
      <input className="w-full rounded border p-2" placeholder="Promo-kod"
        value={promo} onChange={(e) => setPromo(e.target.value)} />
      <p className="text-right font-semibold">Jami: {subtotal} soʻm</p>
      <Button className="w-full" onClick={submit} disabled={loading}>
        {loading ? "Yuborilmoqda..." : "Tasdiqlash"}
      </Button>
    </section>
  );
}
