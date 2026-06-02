import type { Metadata } from "next";
import { ClaustroAgendaPage } from "@/components/claustro-agenda-page";
import { nodocentesContent } from "@/lib/claustro-content";

export const metadata: Metadata = {
  title: "Propuestas para No Docentes | Miguel Benegas - IDEI",
  description:
    "Agenda estratégica para el claustro no docente: desarrollo profesional, modernización de la gestión, diálogo institucional y bienestar laboral.",
};

export default function NoDocentesPage() {
  return <ClaustroAgendaPage content={nodocentesContent} />;
}
