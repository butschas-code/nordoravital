"use client";

import type { MobileNavLink } from "@/components/site-header-mobile-nav";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";
import { Link, usePathname } from "@/i18n/navigation";

const linkBase =
  "block whitespace-nowrap rounded-lg px-2.5 py-2.5 text-[0.95rem] font-normal tracking-tight transition-[color,background-color] duration-[var(--duration-ui)] ease-[var(--ease-brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] xl:px-3 xl:text-base";

export function SiteHeaderDesktopNav({ links }: { links: MobileNavLink[] }) {
  const pathname = usePathname();
  const { openDrawer } = useContactDrawer();

  return (
    <ul className="flex flex-nowrap items-center justify-center gap-1 xl:gap-2">
      {links.map((link) => (
        <li key={link.href} className="shrink-0">
          {link.action === "contact" ? (
            <button
              type="button"
              className={`${linkBase} text-[var(--text)]/75 hover:bg-[var(--panel)] hover:text-[var(--text)]`}
              onClick={() => openDrawer(link.drawerOptions)}
            >
              {link.label}
            </button>
          ) : link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} text-[var(--text)]/75 hover:bg-[var(--panel)] hover:text-[var(--text)]`}
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className={`${linkBase} ${
                pathname === link.href
                  ? "bg-[var(--panel-deep)] font-medium text-[var(--text)]"
                  : "text-[var(--text)]/75 hover:bg-[var(--panel)] hover:text-[var(--text)]"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
