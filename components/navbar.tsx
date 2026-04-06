"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { NohenLogo } from "./nohenLogo";
const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isProjectDetailPage = pathname.startsWith("/project-detail");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`w-full fixed z-9999999999 top-0 overflow-hidden py-3 transition-colors duration-300 ${isProjectDetailPage
          ? "bg-white"
          : scrolled
            ? "bg-black/95 backdrop-blur-sm"
            : "bg-transparent"
          }`}
      >
        <div className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-10 h-18">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <NohenLogo useDarkOnLight={isProjectDetailPage} />
            </div>
          </Link>
          <ul className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative group flex flex-col items-center gap-1.25"
                  >
                    <span
                      className={`${isProjectDetailPage ? "text-black" : "text-white"
                        } text-[14px] tracking-[0.15em] font-medium transition-colors duration-200 group-hover:text-[#EFBF04] font-dm-sans`}
                    >
                      {label}
                    </span>
                    {/* Gold underline — always visible for active, slides in on hover */}
                    <span
                      className={`h-0.5 bg-[#EFBF04] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="https://cal.com/nohen-constructii-h3y16p/30min"
            className="hidden rounded-full py-4 lg:inline-flex items-center gap-3 px-5 shrink-0 group transition-all duration-300 hover:brightness-110 active:scale-95 bg-[#EFBF04]"
          >
            <span
              className="text-black text-[14px] tracking-[0.14em] font-bold whitespace-nowrap font-dm-sans"
              style={{ letterSpacing: "-6%", lineHeight: "150%" }}
            >
              BOOK A CONSULTATION
            </span>
            <ArrowRightIcon
              size={14}
              className="text-black transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
          <button
            className={`lg:hidden p-1 ${isProjectDetailPage ? "text-black" : "text-white"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={`relative z-10 lg:hidden overflow-hidden ${isProjectDetailPage
                ? "border-t border-black/10 bg-white"
                : "border-t border-white/10 bg-[#0e0e0e]"
                }`}
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map(({ href, label }, i) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <motion.li
                      key={href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        target="_blank"
                        className="flex items-center justify-between py-3 border-b border-white/5 group"
                      >
                        <span
                          className={`text-[13px] tracking-[0.14em] font-medium transition-colors duration-200 font-barlow-condensed ${isActive
                            ? "text-[#EFBF04]"
                            : isProjectDetailPage
                              ? "text-black/80 group-hover:text-[#EFBF04]"
                              : "text-white/80 group-hover:text-[#EFBF04]"
                            }`}
                        >
                          {label}
                        </span>
                        {isActive && (
                          <span className="w-4 h-0.5 bg-[#EFBF04]" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="pt-4 pb-2"
                >
                  <Link
                    href="https://cal.com/nohen-constructii-h3y16p/30min"
                    target="_blank"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-3 px-5 py-3 w-full justify-center bg-[#EFBF04]"
                  >
                    <span className="text-black text-[14px] tracking-[0.14em] font-bold font-dm-sans">
                      BOOK A CONSULTATION
                    </span>
                    <ArrowRightIcon
                      size={14}
                      className="text-black"
                      strokeWidth={2.5}
                    />
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
