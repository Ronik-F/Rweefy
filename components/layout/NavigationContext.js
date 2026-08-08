"use client";

import { createContext, useContext, useState, useCallback } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <NavigationContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx)
    throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
