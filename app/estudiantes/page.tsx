import type { Metadata } from "next";
import { ClaustroAgendaPage } from "@/components/claustro-agenda-page";
import { estudiantesContent } from "@/lib/claustro-content";

export const metadata: Metadata = {
  title: "Propuestas para Estudiantes | Miguel Benegas - IDEI",
  description:
    "Agenda estratégica para estudiantes del IDEI: acompañamiento, empleabilidad, internacionalización y participación en la transformación curricular.",
};

export default function EstudiantesPage() {
  return <ClaustroAgendaPage content={estudiantesContent} />;
}
