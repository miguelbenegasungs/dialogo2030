"use client";

import { Instagram, Linkedin, ExternalLink, Download } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
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
            <p className="text-white/70 leading-relaxed mb-6">
              Una visión participativa y transformadora para el Instituto de Industria. Diálogo, apertura e inclusión.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/miguelbenegasungs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium text-sm">@miguelbenegasungs</span>
              </a>
              <a
                href="https://www.linkedin.com/in/miguelbenegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn de Miguel Benegas"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#" },
                { label: "Sobre Miguel", href: "#sobre" },
                { label: "Propuestas", href: "#propuestas" },
                { label: "Elecciones", href: "#elecciones" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h4 className="font-serif font-semibold mb-6">Recursos</h4>
            <div className="space-y-4">
              <a
                href="/criterios-miguel-benegas.pdf"
                download
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Descargar criterios (PDF)</span>
              </a>
             
            </div>

            {/* Diálogo 2030 box */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60 mb-2">Espacio electoral</p>
              <p className="font-serif font-semibold text-lg">
                Diálogo 2030
              </p>
              <p className="text-white/60 text-sm mt-1">
                Elecciones UNGS - Junio 2026
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            {currentYear} Miguel Benegas. Candidatura a Decano IDEI - UNGS.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>Diálogo 2030</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
