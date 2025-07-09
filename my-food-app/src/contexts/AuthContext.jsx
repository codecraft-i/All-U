import { createContext, useContext, useEffect, useState } from "react";
import api from "@/api";
import toast from "react-hot-toast";

const AuthContext = createContext();
const TOKEN_KEY = "auth:token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(null);

  const saveToken = (tk) => {
    tk ? localStorage.setItem(TOKEN_KEY, tk) : localStorage.removeItem(TOKEN_KEY);
    setToken(tk);
  };

  useEffect(() => {
    if (!token) return;
    api.get("users/me/")
      .then(({ data }) => setUser(data))
      .catch(() => saveToken(null));
  }, [token]);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("login/", { username: email, password });
      saveToken(data.token);
      toast.success("Muvaffaqiyatli kirdingiz");
      return true;
    } catch {
      toast.error("Login xato");
      return false;
    }
  };

  const register = async (payload) => {
    try {
      await api.post("register/", payload);
      toast.success("Ro‘yxatdan o‘tildi, endi login qiling");
      return true;
    } catch {
      toast.error("Ro‘yxatdan o‘tishda xato");
      return false;
    }
  };

  const logout = () => {
    saveToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuth: !!token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
