"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Products", href: "/Product" },
    { name: "CSR", href: "/csr" },
    { name: "Resources & Insights", href: "/resources" },
    { name: "FAQ & Support", href: "/faq" },
  ];

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getActiveLink = (href: string) => {
    // "/" matches Home exactly, other links check if pathname starts with href
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ml-14">
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      {mounted && (
        <nav className="hidden md:flex gap-12 items-center text-xl font-semibold leading-10 tracking-[-1px] font-sans">
          {links.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href} className="cursor-pointer inline-block">
                {link.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                  getActiveLink(link.href)
                    ? "w-full bg-[#D11417]"
                    : "w-0 bg-black group-hover:w-full"
                }`}
              ></span>
            </div>
          ))}
        </nav>
      )}

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link href="#">
          <Image
            src="/contact-button.png"
            alt="Contact button"
            width={160}
            height={130}
            className="object-contain mr-3.5"
          />
        </Link>
      </div>
    </header>
  );
}
