"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Vote, CheckCircle2, ExternalLink } from "lucide-react";

const cronograma = [
  { fecha: "11 mayo - 14 junio", evento: "Campaña electoral" },
  { fecha: "4-10 de junio", evento: "Exhibición de listas definitivas" },
  { fecha: "16-18 de junio", evento: "Elecciones", destacado: true },
  { fecha: "19 de junio", evento: "Escrutinio definitivo y proclamación" },
  { fecha: "24 de agosto", evento: "Entran en ejercicio las nuevas autoridades" },
];

const cargos = [
  "Rector/a y Vicerrector/a",
  "Decanos/as de Instituto",
  "Representantes en Consejo Superior",
  "Representantes en Consejos de Instituto",
];

export function Elections() {
  return (
    <section id="elecciones" className="py-24 bg-fog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Proceso Electoral UNGS 2026
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Elecciones en la UNGS
          </h2>
          <p className="text-steel text-lg max-w-3xl mx-auto leading-relaxed">
            Del martes 16 al jueves 18 de junio de 2026 se desarrollará un nuevo proceso electoral en la UNGS. 
            Como establece el Estatuto de la Universidad, este año se elegirán rector/a y vicerrector/a y decanos/as de Instituto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Info Cards */}
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary">16-18 de Junio 2026</h3>
                  <p className="text-steel">Fechas de votación</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-fog rounded-lg">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Renovación cada 4 años</p>
                    <p className="text-sm text-steel">Los cargos caducan el 23 de agosto de 2026 y pueden ser reelegidos por un solo período consecutivo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-fog rounded-lg">
                  <Vote className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Voto obligatorio</p>
                    <p className="text-sm text-steel">El voto es obligatorio para los y las integrantes de cada uno de los claustros</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-fog rounded-lg">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Estudiantes y graduados</p>
                    <p className="text-sm text-steel">Los claustros de estudiantes y graduados renuevan cada 2 años</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cargos a elegir */}
          <Card className="border-none shadow-lg bg-primary text-white">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Cargos a elegir</h3>
              <div className="space-y-4">
                {cargos.map((cargo, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-white/80" />
                    <span className="font-medium">{cargo}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/70 text-sm">
                También se renovarán representantes de los claustros de investigadores/as docentes y docentes profesores, 
                asistentes, estudiantes, graduados/as y no docentes, y un representante de la Escuela Secundaria en el Consejo Superior.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cronograma */}
        <Card className="border-none shadow-lg bg-white">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">
              Cronograma Electoral
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {cronograma.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-colors ${
                    item.destacado
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${
                    item.destacado ? "text-primary" : "text-steel"
                  }`}>
                    {item.fecha}
                  </p>
                  <p className={`font-medium ${
                    item.destacado ? "text-primary" : "text-primary/80"
                  }`}>
                    {item.evento}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Link to more info */}
            <div className="mt-8 text-center">
              <a
                href="https://www.ungs.edu.ar/institucional/elecciones2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Más información sobre las elecciones UNGS
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
