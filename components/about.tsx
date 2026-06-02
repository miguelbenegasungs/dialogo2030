"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Lightbulb, BookOpen } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "Formación",
    title: "Ingeniero Mecánico",
    description: "Formación técnica sólida con enfoque en procesos industriales y gestión de proyectos.",
    icon: GraduationCap,
  },
  {
    year: "Docencia",
    title: "Docente Universitario",
    description: "Formando profesionales en el Instituto de Industria de la UNGS.",
    icon: BookOpen,
  },
  {
    year: "Gestión",
    title: "Gestor Universitario",
    description: "Experiencia en coordinación académica y desarrollo de programas educativos.",
    icon: Briefcase,
  },
  {
    year: "Innovación",
    title: "Vinculación con la Industria",
    description: "Desarrollo de puentes entre la academia y el sector productivo regional.",
    icon: Lightbulb,
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-fog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sobre el candidato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Miguel Benegas
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto leading-relaxed">
            Ingeniero, docente, director de la carrera de Ingeniería Industrial del IDEI y gestor universitario comprometido con la transformación del Instituto de Industria a través del diálogo y la mejora continua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-xl text-white shadow-lg">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-sm font-medium text-steel uppercase tracking-wide">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-primary mt-1">
                      {item.title}
                    </h3>
                    <p className="text-steel mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div>
            <Card className="border-none shadow-xl bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary p-8 text-white">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white/30">
                      <Image
                        src="/miguel-benegas-foto.png"
                        alt="Miguel Benegas"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold">Miguel Benegas</h3>
                      <p className="text-white/80 mt-1">Candidato a Decano IDEI</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          Ingeniero Mecánico
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          Docente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <blockquote className="text-lg text-primary italic border-l-4 border-primary/30 pl-4">
                    {'"'}Los desafíos que vienen requieren del compromiso de todos los claustros, de nuevas miradas y de una participación genuina que nos permita proyectar, colectivamente, un Instituto más abierto, más dinámico y más comprometido con su comunidad y su tiempo histórico.{'"'}
                  </blockquote>
                  <p className="mt-4 text-steel text-sm text-right">— Miguel Benegas, Investigador Docente</p>
                </div>
              </CardContent>
            </Card>

            {/* Diálogo 2030 badge */}
            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
              <Image
                src="/logo-dialogo-2030.svg"
                alt="Diálogo 2030"
                width={80}
                height={40}
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-serif font-semibold text-primary">Diálogo 2030</p>
                <p className="text-steel text-sm">Espacio electoral para la transformación del IDEI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
