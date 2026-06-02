"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { claustroRoutes } from "@/lib/claustro-routes";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="nodes" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2" fill="white" />
              <circle cx="0" cy="0" r="1.5" fill="white" />
              <circle cx="120" cy="120" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#nodes)" />
        </svg>
      </div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,400 Q300,350 400,400 T600,380 T800,420 T1000,400 T1200,380"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="animate-draw-line"
          />
          <path
            d="M0,500 Q200,480 400,520 T700,480 T900,520 T1200,500"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="animate-draw-line"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0,300 Q400,280 600,320 T1000,280 T1200,320"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="animate-draw-line"
            style={{ animationDelay: "1s" }}
          />
          {/* Connection nodes */}
          <circle cx="400" cy="400" r="4" fill="white" className="animate-pulse-slow" />
          <circle cx="600" cy="380" r="3" fill="white" className="animate-pulse-slow" style={{ animationDelay: "0.3s" }} />
          <circle cx="800" cy="420" r="4" fill="white" className="animate-pulse-slow" style={{ animationDelay: "0.6s" }} />
          <circle cx="1000" cy="400" r="3" fill="white" className="animate-pulse-slow" style={{ animationDelay: "0.9s" }} />
        </svg>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rotate-45 animate-float" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-white/10 rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/15 -rotate-12 animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Elecciones UNGS 2026 — Instituto de Industria</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Criterios que orientarán la gestión del{" "}
              <span className="relative">
                Instituto de Industria
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0,4 Q50,8 100,4 T200,4" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
              Una visión participativa y transformadora. Gobernar implica liderar, acompañar y decidir en pos de la excelencia, 
              reconociendo los saberes y sentires de toda la comunidad.
            </p>

            <div className="space-y-4">
              <p className="text-white/70 text-sm font-medium uppercase tracking-wide">
                Ver propuestas por claustro
              </p>
              <div className="flex flex-wrap gap-3">
                {claustroRoutes.map((route) => (
                  <Link key={route.slug} href={route.href}>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-5 text-base"
                    >
                      {route.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ))}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-6 py-5 text-base bg-transparent font-semibold"
                  onClick={() => scrollToSection("criterios-generales")}
                >
                  Criterios generales
                </Button>
              </div>
              <a href="/criterios-miguel-benegas.pdf" download className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-6 py-5 text-base bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar documento
                </Button>
              </a>
            </div>

            {/* Diálogo 2030 badge */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm mb-4">Espacio electoral</p>
              <div className="flex items-center gap-6">
                <Image
                  src="/logo-dialogo-2030.svg"
                  alt="Diálogo 2030"
                  width={225}
                  height={75}
                  className="h-18 w-auto object-contain brightness-0 invert"
                />
                <div className="h-10 w-px bg-white/30" />
                <div>
                  <p className="font-serif font-semibold text-lg">Diálogo 2030</p>
                  <p className="text-white/60 text-sm">Candidatura a Decano IDEI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual element - Logo representation */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Central hub with MB logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center p-4">
                <Image
                  src="/logo-mb.svg"
                  alt="Miguel Benegas"
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>

              {/* Orbiting elements - criterios */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
                <span className="text-xs text-white/80 text-center px-2">Diálogo</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xs text-white/80 text-center px-2">Formación</span>
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-xs text-white/80 text-center px-2">Investigación</span>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: "3s" }}>
                <span className="text-xs text-white/80 text-center px-2">Vinculación</span>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                <line x1="192" y1="80" x2="192" y2="136" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <line x1="192" y1="248" x2="192" y2="304" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <line x1="80" y1="192" x2="136" y2="192" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <line x1="248" y1="192" x2="304" y2="192" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
