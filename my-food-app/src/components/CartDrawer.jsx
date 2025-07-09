import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, dispatch } = useCart();
  const { isAuth } = useAuth();
  const loc = useLocation();
  const checkoutLink = isAuth ? "/checkout" : `/login?next=${loc.pathname}`;

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-80 overflow-y-auto bg-background p-6 shadow-xl">
          <Dialog.Title className="mb-4 text-xl font-semibold">
            Savat ({items.length})
          </Dialog.Title>

          <div className="space-y-4">
            {items.map((i) => (
              <div key={i.food.id} className="flex items-center gap-2">
                <img src={i.food.image} className="h-14 w-14 rounded object-cover" />
                <div className="flex-1">
                  <p className="line-clamp-1 text-sm font-medium">{i.food.name}</p>
                  <input
                    type="number"
                    min={1}
                    value={i.qty}
                    className="w-16 rounded border px-2 py-1 text-sm"
                    onChange={(e) =>
                      dispatch({
                        type: "QTY",
                        id: i.food.id,
                        qty: +e.target.value,
                      })
                    }
                  />
                </div>
                <p className="text-sm font-medium">
                  {parseFloat(i.food.price) * i.qty} soʻm
                </p>
                <button
                  className="text-destructive"
                  onClick={() => dispatch({ type: "REMOVE", id: i.food.id })}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 text-right">
            <p className="mb-2 font-semibold">Jami: {subtotal} soʻm</p>
            <Dialog.Close asChild>
              <Button asChild className="w-full">
                <Link to={checkoutLink}>Buyurtma qilish</Link>
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
