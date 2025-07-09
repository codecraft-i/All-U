import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
const STORAGE_KEY = "cart:v1";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i.food.id === action.item.food.id);
      const next = existing
        ? state.map((i) =>
            i.food.id === action.item.food.id ? { ...i, qty: i.qty + action.item.qty } : i
          )
        : [...state, action.item];
      toast.success("Mahsulot savatga qoʻshildi");
      return next;
    }
    case "REMOVE":
      return state.filter((i) => i.food.id !== action.id);
    case "QTY":
      return state.map((i) =>
        i.food.id === action.id ? { ...i, qty: action.qty } : i
      );
    case "SET":
      return action.items;
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) dispatch({ type: "SET", items: JSON.parse(raw) });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const subtotal = items.reduce(
    (s, i) => s + parseFloat(i.food.price) * i.qty,
    0
  );

  return (
    <CartContext.Provider value={{ items, dispatch, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
