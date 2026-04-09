"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { FloatingContactDrawer } from "@/components/contact/floating-contact-drawer";

type ContactDrawerContextValue = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const ContactDrawerContext = createContext<ContactDrawerContextValue | null>(
  null,
);

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <ContactDrawerContext.Provider
      value={{ open, openDrawer, closeDrawer }}
    >
      {children}
      <FloatingContactDrawer />
    </ContactDrawerContext.Provider>
  );
}

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) {
    throw new Error(
      "useContactDrawer must be used within ContactDrawerProvider",
    );
  }
  return ctx;
}
