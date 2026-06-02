"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  RefreshCw,
  BookOpen,
  Microscope,
  Building2,
  Download,
  ChevronRight,
  Heart,
  MessageCircle,
  Target,
  Scale,
} from "lucide-react";
import Image from "next/image";
import { ClaustroSelector } from "@/components/claustro-selector";

// Criterios extraídos ÚNICAMENTE del documento de Miguel Benegas - Versión resumida
const criterios = [
  {
    id: 1,
    numero: "1",
    category: "Gestión centrada en las personas",
    icon: Heart,
    color: "bg-[#1B365D]",
    title: "Una gestión centrada en las personas",
    description: "IDEI como una organización en constante aprendizaje. Mejorar calidad de vida.",
  },
  {
    id: 2,
    numero: "2",
    category: "Disenso como motor",
    icon: MessageCircle,
    color: "bg-[#708090]",
    title: "Valorar el disenso como motor de aprendizaje",
    description: "Desaprender viejos paradigmas. Volver a aprender colectivamente.",
  },
  {
    id: 3,
    numero: "3",
    category: "Respeto y empatía",
    icon: Users,
    color: "bg-[#1B365D]",
    title: "Respeto y empatía",
    description: "Tolerancia hacia todas las perspectivas y diversidad de voces. Escucha empática y pluralismo.",
  },
  {
    id: 4,
    numero: "4",
    category: "Gestión abierta",
    icon: Target,
    color: "bg-[#708090]",
    title: "Gestión abierta con objetivos claros",
    description: "Mecanismos concretos de participación y rendición de cuentas. Transformar capacidades en resultados visibles y sostenibles.",
  },
  {
    id: 5,
    numero: "5",
    category: "Equipo nodocente",
    icon: Building2,
    color: "bg-[#1B365D]",
    title: "Fortalecimiento del equipo nodocente",
    description: "Políticas de capacitación, modernización administrativa y bienestar laboral. Espacios de diálogo y participación.",
  },
  {
    id: 6,
    numero: "6",
    category: "Participación de claustros",
    icon: Users,
    color: "bg-[#708090]",
    title: "Participación efectiva de todos los claustros",
    description: "Garantizar espacios donde los representantes incidan efectivamente en la definición de políticas institucionales.",
  },
  {
    id: 7,
    numero: "7",
    category: "Alternancia y equidad",
    icon: RefreshCw,
    color: "bg-[#1B365D]",
    title: "Alternancia generacional y equidad",
    description: "Renovación de roles. Integrar generaciones con igualdad. Reducir asimetrías entre áreas. Justo acceso a recursos y crecimiento.",
  },
  {
    id: 8,
    numero: "8",
    category: "Graduados",
    icon: GraduationCap,
    color: "bg-[#708090]",
    title: "Graduados",
    description: "Comunidad de Graduados/as como espacio de oportunidades formativas, desarrollo profesional y pertinencia institucional.",
  },
  {
    id: 9,
    numero: "9",
    category: "Formación",
    icon: BookOpen,
    color: "bg-[#1B365D]",
    title: "Formación",
    description: "Fortalecimiento de la calidad académica y pertinencia social de las carreras.",
  },
  {
    id: 10,
    numero: "10",
    category: "Investigación",
    icon: Microscope,
    color: "bg-[#708090]",
    title: "Renovar la apuesta por una investigación de calidad",
    description: "Investigación interdisciplinaria, crítica y conectada con debates globales. Acompañamiento de jóvenes investigadores, visibilización sostenida de la producción científica.",
  },
  {
    id: 11,
    numero: "11",
    category: "Vinculación",
    icon: Scale,
    color: "bg-[#1B365D]",
    title: "Vinculación transformadora con el entorno",
    description: "Sinergia con entramado socioeconómico y productivo. Fortalecer la transferencia de conocimiento, la innovación aplicada y la vinculación tecnológica y social. Abordaje de problemas complejos.",
  },
];

export function Proposals() {
  const [selectedCriterio, setSelectedCriterio] = useState(criterios[0]);

  return (
    <section id="propuestas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Diálogo 2030
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance">
            Criterios que orientarán la gestión
          </h2>
          <p className="text-steel text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Una visión participativa y transformadora. Gobernar implica liderar, acompañar y decidir en pos de la excelencia, 
            reconociendo los saberes y sentires de toda la comunidad.
          </p>
        </div>

        <ClaustroSelector />

        <div id="criterios-generales" className="scroll-mt-28 pt-4 sm:pt-6 border-t border-border/50">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Visión general
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-primary mb-3 text-balance">
              Criterios orientadores de la gestión
            </h3>
            <p className="text-steel text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Los once ejes que guían la propuesta institucional de Diálogo 2030 para todo el IDEI.
            </p>
          </div>
        </div>

        {/* Mobile: Simple cards list */}
        <div className="lg:hidden space-y-3">
          {criterios.map((criterio) => (
            <Card 
              key={criterio.id} 
              className={`border-none shadow-md overflow-hidden transition-all duration-300 ${
                selectedCriterio.id === criterio.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <button
                onClick={() => setSelectedCriterio(
                  selectedCriterio.id === criterio.id ? criterio : criterio
                )}
                className="w-full text-left"
              >
                <CardHeader className={`${criterio.color} text-white p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <criterio.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wide">
                        Criterio {criterio.numero}
                      </span>
                      <h3 className="font-serif text-base font-bold leading-tight">
                        {criterio.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
              </button>
              <CardContent className="p-4 bg-white">
                <p className="text-primary/80 text-sm leading-relaxed">
                  {criterio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Dashboard-style layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Categories list */}
          <div className="lg:col-span-1 space-y-2 max-h-[700px] overflow-y-auto pr-2">
            {criterios.map((criterio) => (
              <button
                key={criterio.id}
                onClick={() => setSelectedCriterio(criterio)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                  selectedCriterio.id === criterio.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-fog hover:bg-primary/10 text-primary"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                    selectedCriterio.id === criterio.id
                      ? "bg-white/20"
                      : criterio.color + " text-white"
                  }`}
                >
                  <criterio.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{criterio.category}</p>
                  <p
                    className={`text-xs ${
                      selectedCriterio.id === criterio.id ? "text-white/70" : "text-steel"
                    }`}
                  >
                    Criterio {criterio.numero}
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    selectedCriterio.id === criterio.id ? "translate-x-1" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Selected proposal details */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl overflow-hidden h-full">
              <CardHeader className={`${selectedCriterio.color} text-white p-8`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                      Criterio {selectedCriterio.numero}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                      {selectedCriterio.title}
                    </h3>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center shrink-0 ml-4">
                    <selectedCriterio.icon className="w-8 h-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-primary/90 leading-relaxed text-lg">
                  {selectedCriterio.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote with photo */}
        <div className="mt-12 sm:mt-16 bg-fog rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/miguel-benegas-foto.png"
                  alt="Miguel Benegas"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-primary italic leading-relaxed mb-4 sm:mb-6">
                {'"'}Creo en la necesidad de construir una agenda institucional basada en el diálogo honesto, la escucha activa y la capacidad de transformar las diferencias en acuerdos que fortalezcan al IDEI.{'"'}
              </blockquote>
              <div>
                <p className="font-serif font-bold text-primary text-lg">Miguel Benegas</p>
                <p className="text-steel">Investigador Docente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-4 sm:p-6 bg-fog rounded-2xl w-full sm:w-auto">
            <div className="text-center">
              <p className="font-serif font-semibold text-primary text-lg">
                Documento completo
              </p>
              <p className="text-steel text-sm">
                Descargá los criterios orientadores completos
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/criterios-miguel-benegas.pdf"
                download="MIGUEL_BENEGAS_CRITERIOS_DIALOGO_2030.pdf"
                className="inline-flex w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar PDF
                </Button>
              </a>
              <a
                href="/criterios-miguel-benegas.pdf"
                download="MIGUEL_BENEGAS_CRITERIOS_DIALOGO_2030.pdf"
                className="inline-flex w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 px-6 py-5 text-base font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Documento completo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
