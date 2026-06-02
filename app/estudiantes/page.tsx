import type { Metadata } from "next";
import { ClaustroAgendaPage } from "@/components/claustro-agenda-page";
import { estudiantesContent } from "@/lib/claustro-content";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Propuestas para Estudiantes | Miguel Benegas - IDEI",
  description:
    "Agenda estratégica para estudiantes del IDEI: acompañamiento, empleabilidad, internacionalización y participación en la transformación curricular.",
};

export default function EstudiantesPage() {
  return <ClaustroAgendaPage content={estudiantesContent} />;
}


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