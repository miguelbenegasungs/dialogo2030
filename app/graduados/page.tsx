import type { Metadata } from "next";
import { ClaustroAgendaPage } from "@/components/claustro-agenda-page";
import { graduadosContent } from "@/lib/claustro-content";

export const metadata: Metadata = {
  title: "Propuestas para Graduados/as | Miguel Benegas - IDEI",
  description:
    "Agenda estratégica para graduados/as del IDEI: formación continua, empleabilidad, mentorías, comunidad alumni y encuentro anual Entre Pares.",
};

export default function GraduadosPage() {
  return <ClaustroAgendaPage content={graduadosContent} />;
}
