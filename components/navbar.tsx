"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Instagram, ChevronDown, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { claustroRoutes, getClaustroByPath } from "@/lib/claustro-routes";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Miguel", href: "#sobre" },
  { label: "Propuestas", href: "#propuestas" },
  { label: "Elecciones", href: "#elecciones" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const currentClaustro = getClaustroByPath(pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const useSolidNav = isScrolled;

  const homeHref = (hash: string) => (hash === "#" ? "/" : `/${hash}`);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinkClass = `text-sm font-medium transition-colors hover:opacity-80 ${
    useSolidNav ? "text-primary" : "text-white"
  }`;

  const logoContent = (
    <>
      <div className={`relative transition-all ${useSolidNav ? "h-10 w-auto" : "h-12 w-auto"}`}>
        <Image
          src="/logo-mb.svg"
          alt="Miguel Benegas"
          width={120}
          height={48}
          className={`h-full w-auto object-contain transition-all ${
            useSolidNav ? "brightness-100" : "brightness-0 invert"
          }`}
          priority
        />
      </div>
      <div className={`hidden sm:block h-8 w-px ${useSolidNav ? "bg-primary/20" : "bg-white/30"}`} />
      <div className={`hidden sm:block relative transition-all ${useSolidNav ? "h-12 w-auto" : "h-14 w-auto"}`}>
        <Image
          src="/logo-dialogo-2030.svg"
          alt="Diálogo 2030"
          width={175}
          height={60}
          className={`h-full w-auto object-contain transition-all ${
            useSolidNav ? "brightness-100" : "brightness-0 invert"
          }`}
          priority
        />
      </div>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useSolidNav
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {isHome ? (
              <button
                onClick={() => scrollToSection("#")}
                className="flex items-center gap-4 group shrink-0"
              >
                {logoContent}
              </button>
            ) : (
              <Link href="/" className="flex items-center gap-4 group shrink-0">
                {logoContent}
              </Link>
            )}

            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navLinks.map((link) =>
                isHome ? (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className={navLinkClass}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.label} href={homeHref(link.href)} className={navLinkClass}>
                    {link.label}
                  </Link>
                )
              )}

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80 outline-none ${
                    useSolidNav ? "text-primary" : "text-white"
                  }`}
                >
                  Por claustro
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {claustroRoutes.map((route) => (
                    <DropdownMenuItem key={route.slug} asChild>
                      <Link
                        href={route.href}
                        className={`cursor-pointer ${currentClaustro?.slug === route.slug ? "font-semibold text-primary" : ""}`}
                      >
                        {route.label}
                        <span className="ml-auto text-xs text-steel">{route.proposalCount}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/#criterios-generales" className="cursor-pointer">
                      Criterios generales
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {!isHome && (
                <Link href="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5 font-medium"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Inicio
                  </Button>
                </Link>
              )}
              <a
                href="https://instagram.com/miguelbenegasungs"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  useSolidNav
                    ? "text-primary hover:bg-primary/10"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="/criterios-miguel-benegas.pdf" download>
                <Button
                  size="sm"
                  className={`font-medium ${
                    useSolidNav
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-primary hover:bg-white/90"
                  }`}
                >
                  Descargar propuestas
                </Button>
              </a>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                useSolidNav
                  ? "text-primary hover:bg-primary/10"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-primary transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
            <Image
              src="/logo-mb.svg"
              alt="Miguel Benegas"
              width={100}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <div className="h-8 w-px bg-white/30" />
            <Image
              src="/logo-dialogo-2030.svg"
              alt="Diálogo 2030"
              width={150}
              height={50}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>

          {!isHome && (
            <Link
              href="/"
              className="flex items-center gap-2 py-3 px-4 mb-4 rounded-xl bg-white/10 text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
          )}

          <div className="flex-1 space-y-2">
            {navLinks.map((link) =>
              isHome ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-4 text-xl font-serif font-semibold text-white hover:text-white/80 transition-colors border-b border-white/10"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={homeHref(link.href)}
                  className="block w-full text-left py-4 text-xl font-serif font-semibold text-white hover:text-white/80 transition-colors border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-4 pb-2">
              <p className="text-white/60 text-sm uppercase tracking-wide mb-3">
                Propuestas por claustro
              </p>
              {claustroRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={route.href}
                  className={`block w-full text-left py-3 text-lg font-medium transition-colors border-b border-white/10 ${
                    currentClaustro?.slug === route.slug
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Link
                href="/#criterios-generales"
                className="block w-full text-left py-3 text-lg font-medium text-white/80 hover:text-white transition-colors border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Criterios generales
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://instagram.com/miguelbenegasungs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-medium">@miguelbenegasungs</span>
            </a>
            <a href="/criterios-miguel-benegas.pdf" download className="block">
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Descargar propuestas
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
