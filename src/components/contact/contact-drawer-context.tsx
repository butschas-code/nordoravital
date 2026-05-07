"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { FloatingContactDrawer } from "@/components/contact/floating-contact-drawer";
import type { ContactFormValues } from "@/components/contact/contact-form";

export type ContactDrawerOptions = {
  professionalCategory?: ContactFormValues["professionalCategory"];
  message?: string;
};

type ContactDrawerContextValue = {
  open: boolean;
  options: ContactDrawerOptions;
  openDrawer: (options?: ContactDrawerOptions) => void;
  closeDrawer: () => void;
};

const ContactDrawerContext = createContext<ContactDrawerContextValue | null>(
  null,
);

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ContactDrawerOptions>({});
  const openDrawer = useCallback((nextOptions: ContactDrawerOptions = {}) => {
    setOptions(nextOptions);
    setOpen(true);
  }, []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <ContactDrawerContext.Provider
      value={{ open, options, openDrawer, closeDrawer }}
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
