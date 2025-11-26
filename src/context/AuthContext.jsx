import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("cssc-current-user");
    return stored ? JSON.parse(stored) : null;
  });

  const register = (data) => {
    localStorage.setItem("cssc-registered-user", JSON.stringify(data));
    setUser(data);
    localStorage.setItem("cssc-current-user", JSON.stringify(data));
  };

  const login = ({ name, email, password }) => {
    const stored = localStorage.getItem("cssc-registered-user");
    if (!stored) {
      return { success: false, reason: "NOT_REGISTERED" };
    }

    const registered = JSON.parse(stored);

    if (
      registered.email === email &&
      registered.password === password &&
      registered.name === name
    ) {
      setUser(registered);
      localStorage.setItem("cssc-current-user", JSON.stringify(registered));
      return { success: true, user: registered };
    }

    return { success: false, reason: "INVALID_CREDENTIALS" };
  };

  // ✅ TAMBAHAN BARU: Update Profil
  const updateUser = (newData) => {
    setUser((prev) => {
      const updated = { ...prev, ...newData };

      // Simpan ke localStorage agar tidak hilang setelah refresh
      localStorage.setItem("cssc-current-user", JSON.stringify(updated));
      localStorage.setItem("cssc-registered-user", JSON.stringify(updated));

      return updated;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cssc-current-user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
