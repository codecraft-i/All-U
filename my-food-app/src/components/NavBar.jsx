import { ShoppingCart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export default function NavBar({ onCart }) {
  const { items } = useCart();
  const { isAuth, logout } = useAuth();
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold">🍔 Food App</Link>
        <div className="flex items-center gap-4">
          <button onClick={onCart} className="relative p-2">
            <ShoppingCart className="size-6" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-xs text-white">{count}</span>
            )}
          </button>
          {isAuth
            ? <button onClick={logout} title="Chiqish"><LogOut className="size-5" /></button>
            : <Link to="/login" className="text-sm underline">Kirish</Link>}
        </div>
      </div>
    </header>
  );
}
