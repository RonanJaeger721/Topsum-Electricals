"use client";

import Image from "next/image";
import { useState } from "react";

const quoteUrl =
  "https://wa.me/263785753731?text=Hello%20Topsum%20Electricals%2C%20I%20would%20like%20a%20quote.";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header" data-open={open}>
      <a className="brand" href="#top" aria-label="Topsum Electricals home" onClick={closeMenu}>
        <Image
          src="/assets/topsum-logo-cropped.png"
          alt="Topsum Electricals logo"
          width={172}
          height={119}
          priority
        />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
      <a className="header-action" href={quoteUrl} target="_blank" rel="noopener">
        WhatsApp
      </a>
    </header>
  );
}
