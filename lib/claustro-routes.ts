export type ClaustroSlug = "estudiantes" | "nodocentes" | "graduados";

export type ClaustroRoute = {
  slug: ClaustroSlug;
  href: string;
  label: string;
  shortLabel: string;
  description: string;
  proposalCount: number;
  color: "bg-[#1B365D]" | "bg-[#708090]";
};

export const claustroRoutes: ClaustroRoute[] = [
  {
    slug: "estudiantes",
    href: "/estudiantes",
    label: "Estudiantes",
    shortLabel: "Estudiantes",
    description: "Acompañamiento, empleabilidad, internacionalización y participación curricular.",
    proposalCount: 13,
    color: "bg-[#1B365D]",
  },
  {
    slug: "nodocentes",
    href: "/nodocentes",
    label: "No Docentes",
    shortLabel: "No Docentes",
    description: "Desarrollo profesional, modernización administrativa y diálogo institucional.",
    proposalCount: 7,
    color: "bg-[#708090]",
  },
  {
    slug: "graduados",
    href: "/graduados",
    label: "Graduados/as",
    shortLabel: "Graduados",
    description: "Formación continua, empleabilidad, mentorías y comunidad alumni.",
    proposalCount: 9,
    color: "bg-[#1B365D]",
  },
];

export function getClaustroByPath(pathname: string): ClaustroRoute | undefined {
  return claustroRoutes.find((route) => pathname.startsWith(route.href));
}
