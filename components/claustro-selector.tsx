"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookOpen,
  Building2,
  GraduationCap,
  ChevronRight,
  Compass,
} from "lucide-react";
import { claustroRoutes } from "@/lib/claustro-routes";

const claustroIcons = {
  estudiantes: BookOpen,
  nodocentes: Building2,
  graduados: GraduationCap,
} as const;

export function ClaustroSelector() {
  const scrollToGeneral = () => {
    document.getElementById("criterios-generales")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-10">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Tu claustro
        </span>
        <h3 className="font-serif text-xl sm:text-3xl font-bold text-primary mb-3 text-balance">
          Elegí las propuestas según tu claustro
        </h3>
        <p className="text-steel text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Cada comunidad del IDEI tiene una agenda estratégica específica. Seleccioná la tuya para ver las iniciativas completas.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {claustroRoutes.map((route) => {
          const Icon = claustroIcons[route.slug];
          return (
            <Link key={route.slug} href={route.href} className="group block h-full">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-1">
                <CardHeader className={`${route.color} text-white p-4 sm:p-5`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wide">
                        {route.proposalCount} propuestas
                      </span>
                      <h4 className="font-serif text-lg font-bold leading-tight mt-1">
                        {route.label}
                      </h4>
                    </div>
                    <ChevronRight className="w-5 h-5 shrink-0 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 bg-white">
                  <p className="text-primary/80 text-sm leading-relaxed">
                    {route.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={scrollToGeneral}
          className="group block h-full text-left sm:col-span-2 lg:col-span-1"
        >
          <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-1">
            <CardHeader className="bg-fog text-primary p-4 sm:p-5 border-b border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-steel text-xs font-medium uppercase tracking-wide">
                    11 criterios
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight mt-1">
                    Visión general
                  </h4>
                </div>
                <ChevronRight className="w-5 h-5 shrink-0 text-steel group-hover:translate-x-1 transition-transform" />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 bg-white">
              <p className="text-primary/80 text-sm leading-relaxed">
                Los criterios orientadores que guían toda la gestión del Instituto de Industria.
              </p>
            </CardContent>
          </Card>
        </button>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-steel text-sm">
          También podés acceder desde el menú{" "}
          <span className="font-medium text-primary">Propuestas por claustro</span>.
        </p>
      </div>
    </div>
  );
}
