import {
  estudiantesFaq,
  graduadosFaq,
  nodocentesFaq,
  type ClaustroFaqItem,
} from "@/lib/claustro-faq";

export type ClaustroIconName =
  | "heart"
  | "graduation-cap"
  | "message-circle"
  | "building-2"
  | "sparkles"
  | "briefcase"
  | "map-pin"
  | "cpu"
  | "book-open"
  | "globe"
  | "network"
  | "bar-chart-3"
  | "calendar-days"
  | "award"
  | "database"
  | "users"
  | "megaphone"
  | "share-2"
  | "smile"
  | "handshake"
  | "refresh-cw"
  | "target"
  | "user-check"
  | "mic"
  | "plane"
  | "sprout"
  | "party-popper";

export type ClaustroProposal = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  icon: ClaustroIconName;
  color: "bg-[#1B365D]" | "bg-[#708090]";
};

export type ClaustroPageContent = {
  badge: string;
  title: string;
  subtitle: string;
  intro: string[];
  proposals: ClaustroProposal[];
  faqDescription?: string;
  faq: ClaustroFaqItem[];
};

export const estudiantesContent: ClaustroPageContent = {
  badge: "Claustro Estudiantil",
  title: "Agenda Estratégica para Estudiantes del IDEI",
  subtitle: "Formación integral conectada con el futuro productivo y social",
  intro: [
    "La presente agenda reúne un conjunto de iniciativas estratégicas orientadas a fortalecer las trayectorias académicas, profesionales y personales de los y las estudiantes del Instituto de Industria.",
    "Promovemos una formación integral articulada con los desafíos contemporáneos del mundo productivo, tecnológico y social, integrando acciones de ingreso, permanencia, innovación pedagógica, vinculación institucional, empleabilidad e internacionalización.",
  ],
  proposals: [
    {
      id: "est-1",
      title: "Aulas inclusivas y acompañamiento estudiantil",
      summary: "Programas transversales de acompañamiento académico y socioeducativo para fortalecer la permanencia y el bienestar.",
      details: [
        "Se impulsarán programas transversales de acompañamiento académico y socioeducativo orientados a fortalecer la permanencia y el bienestar estudiantil.",
        "Se garantizarán condiciones de inclusión, contención y apoyo que contribuyan a disminuir la deserción y mejorar las trayectorias universitarias.",
      ],
      icon: "heart",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-2",
      title: "Fortalecimiento del ingreso a licenciaturas, ingenierías y tecnicaturas",
      summary: "Articulación con escuelas secundarias mediante orientación vocacional y acercamiento universitario.",
      details: [
        "Se profundizará la articulación con escuelas secundarias de la región mediante actividades de orientación vocacional, talleres, charlas y experiencias de acercamiento universitario.",
        "Se promoverá que más jóvenes conozcan y elijan las carreras del IDEI.",
      ],
      icon: "graduation-cap",
      color: "bg-[#708090]",
    },
    {
      id: "est-3",
      title: "Transformación curricular con participación estudiantil",
      summary: "Actualizaciones de planes de estudio en un marco participativo, abierto y transparente.",
      details: [
        "Las modificaciones y actualizaciones de los planes de estudio se desarrollarán en un marco participativo, abierto y transparente.",
        "Se promoverán instancias de diálogo permanente con estudiantes a fin de construir consensos y fortalecer el sentido de pertenencia institucional.",
      ],
      icon: "message-circle",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-4",
      title: "Formación In Company y experiencias con organizaciones",
      summary: "Propuestas formativas transversales desarrolladas junto a empresas e industrias estratégicas.",
      details: [
        "Se promoverán cursos y propuestas formativas transversales desarrolladas junto a empresas, industrias y organizaciones estratégicas.",
        "Se acercará a los estudiantes a problemáticas reales y se fortalecerán competencias profesionales situadas.",
      ],
      icon: "building-2",
      color: "bg-[#708090]",
    },
    {
      id: "est-5",
      title: "Promoción de vocaciones STEM en mujeres",
      summary: "Iniciativas para incentivar la participación femenina en ingeniería y disciplinas STEM.",
      details: [
        "Se impulsarán iniciativas específicas para incentivar la participación de mujeres en carreras de ingeniería y disciplinas STEM.",
        "Se articularán acciones con escuelas secundarias para inspirar nuevas vocaciones, reducir brechas de género y ampliar oportunidades en áreas estratégicas para el desarrollo.",
      ],
      icon: "sparkles",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-6",
      title: "Inserción laboral temprana y desarrollo profesional",
      summary: "Talleres de CV, LinkedIn, IA aplicada al trabajo y encuentros con reclutadores del sector productivo.",
      details: [
        "Se implementarán talleres de armado de CV, LinkedIn y marca profesional, capacitaciones en herramientas de inteligencia artificial aplicadas al trabajo y encuentros con reclutadores y referentes del sector productivo.",
        "Se brindará orientación sobre inserción laboral, expectativas salariales y construcción de trayectorias profesionales.",
        "Asistencia para el cambio (crecimiento, cambio y reinsertarse mejor en el mercado laboral).",
      ],
      icon: "briefcase",
      color: "bg-[#708090]",
    },
    {
      id: "est-7",
      title: "Programa de visitas a empresas y organizaciones",
      summary: "Experiencias de vinculación territorial adaptadas a cada carrera.",
      details: [
        "Se ampliarán las experiencias de vinculación territorial mediante visitas a empresas, industrias y organizaciones, adaptadas a las particularidades de cada carrera.",
        "Se fortalecerá el aprendizaje situado y el contacto temprano con entornos profesionales reales.",
      ],
      icon: "map-pin",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-8",
      title: "Formación continua en competencias emergentes",
      summary: "Programas certificados en IA, machine learning, automatización y tecnologías emergentes.",
      details: [
        "Se promoverán programas certificados de actualización en inteligencia artificial, machine learning, automatización, análisis de datos y tecnologías emergentes.",
        "Se priorizará su aplicación en procesos productivos, organizacionales y de innovación.",
      ],
      icon: "cpu",
      color: "bg-[#708090]",
    },
    {
      id: "est-9",
      title: "Tutorías académicas y acompañamiento integral",
      summary: "Programa de tutorías para estudiantes de los primeros años.",
      details: [
        "Se implementará un Programa de Tutorías Académicas y Personales destinado a acompañar especialmente a estudiantes de los primeros años.",
        "Se fortalecerán hábitos de estudio, estrategias de aprendizaje, integración institucional y rendimiento académico.",
      ],
      icon: "book-open",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-10",
      title: "Internacionalización académica y cooperación institucional",
      summary: "Intercambios, aulas espejo y movilidad académica internacional.",
      details: [
        "Se fomentará la participación estudiantil en programas de intercambio y cooperación internacional, como PILA y otras redes académicas.",
        "Se promoverán experiencias de aulas espejo, proyectos conjuntos y movilidad académica.",
      ],
      icon: "globe",
      color: "bg-[#708090]",
    },
    {
      id: "est-11",
      title: "Redes académicas por carrera",
      summary: "Participación en redes nacionales e internacionales vinculadas a cada disciplina.",
      details: [
        "Se fortalecerá la participación en redes nacionales e internacionales vinculadas a cada disciplina.",
        "Se impulsarán actividades conjuntas, seminarios, encuentros y espacios de intercambio que potencien la calidad formativa y la proyección profesional de los estudiantes.",
      ],
      icon: "network",
      color: "bg-[#1B365D]",
    },
    {
      id: "est-12",
      title: "Observatorio laboral y acompañamiento a graduados",
      summary: "Informes sobre mercado laboral, reconversión y transición entre sectores industriales.",
      details: [
        "Se impulsará un Observatorio del Mercado Laboral que produzca informes periódicos sobre perfiles demandados, salarios, sectores emergentes y tendencias productivas.",
        "Se desarrollarán talleres de reconversión laboral, actualización profesional y transición entre sectores industriales, acompañando las trayectorias de graduados y graduadas.",
      ],
      icon: "bar-chart-3",
      color: "bg-[#708090]",
    },
    {
      id: "est-13",
      title: "Diálogo abierto con el Decanato",
      summary: "Reuniones directas para plantear comentarios, dudas y preocupaciones.",
      details: [
        "Los y las estudiantes podrán reservar en su agenda una reunión para conversar y plantear sus comentarios, dudas y preocupaciones de manera directa con el Decanato.",
      ],
      icon: "calendar-days",
      color: "bg-[#1B365D]",
    },
  ],
  faqDescription:
    "Respuestas claras sobre acompañamiento estudiantil, empleabilidad, participación curricular y diálogo con el Decanato.",
  faq: estudiantesFaq,
};

export const nodocentesContent: ClaustroPageContent = {
  badge: "Claustro No Docente",
  title: "Agenda Estratégica para el Fortalecimiento del Claustro No Docente",
  subtitle: "Hacia una gestión universitaria profesional, participativa e innovadora",
  intro: [
    "El personal nodocente no solo sostiene el funcionamiento cotidiano de la universidad: produce institucionalidad, conocimiento organizacional y capacidades estratégicas de gestión.",
    "Esta agenda propone fortalecer su desarrollo profesional, promover espacios de participación activa y consolidar una cultura institucional basada en la calidad, la innovación y el trabajo colaborativo.",
  ],
  proposals: [
    {
      id: "nd-1",
      title: "Desarrollo Profesional y Reconocimiento de Trayectorias",
      summary: "Plan de carrera, capacitación permanente y diplomatura en gestión universitaria.",
      details: [
        "Diseño de esquemas de crecimiento profesional basados en el reconocimiento de trayectorias, experiencias y saberes adquiridos.",
        "Programas permanentes de capacitación alineados con los desafíos de la gestión universitaria contemporánea.",
        "Formación en herramientas digitales, gestión académica, procesos administrativos y nuevas tecnologías.",
        "Generación de oportunidades de especialización y actualización continua.",
        "Implementación de una Diplomatura Gestión/Administración Universitaria para nodocentes.",
      ],
      icon: "award",
      color: "bg-[#1B365D]",
    },
    {
      id: "nd-2",
      title: "Calidad Institucional y Modernización de la Gestión",
      summary: "Circuitos administrativos eficientes, digitalización y tablero de control abierto.",
      details: [
        "Circuitos administrativos claros, eficientes y accesibles (formalización, implementación y/o mejora según corresponda). Sistematización de procedimientos internos.",
        "Integración progresiva de tecnologías digitales e inteligencia artificial en tareas repetitivas y operativas.",
        "Desarrollo de herramientas de seguimiento e indicadores para apoyar la toma de decisiones.",
        "Digitalización documental y fortalecimiento de sistemas de gestión institucional en áreas que lo requieran.",
        "Implementación de un Tablero de control abierto.",
      ],
      icon: "database",
      color: "bg-[#708090]",
    },
    {
      id: "nd-3",
      title: "Institucionalización del diálogo",
      summary: "Mesas de trabajo sistemáticas y comunicación horizontal con el decanato.",
      details: [
        "Creación de mesas de trabajo sistemáticas entre el claustro no docente y el decanato.",
        "Espacios de articulación con secretarías y áreas institucionales para abordar problemáticas comunes.",
        "Promoción de una comunicación más horizontal, fluida y colaborativa.",
        "Reconocimiento de los saberes construidos desde la práctica cotidiana de gestión.",
        "Instituir espacios de diálogo con el Claustro Nodocente UNGS para compartir la incertidumbre y los desafíos de la gestión de un instituto en tiempos gubernamentales turbulentos.",
      ],
      icon: "users",
      color: "bg-[#1B365D]",
    },
    {
      id: "nd-4",
      title: "Comunicación institucional",
      summary: "Canales internos y externos, plataforma IdeI y difusión de buenas prácticas.",
      details: [
        "Generar estrategias para mejorar los canales de comunicación interna y externa.",
        "Tender a automatizar acciones comunicativas rutinarias mediante una plataforma interna IdeI.",
        "Armar un grupo de trabajo para la publicación de novedades no rutinarias y específicas, podría considerarse una adscripción o beca (ej. Biblioteca).",
        "Sistematización y difusión de buenas prácticas institucionales.",
      ],
      icon: "megaphone",
      color: "bg-[#708090]",
    },
    {
      id: "nd-5",
      title: "Docencia y transferencia de saberes no docentes",
      summary: "Reconocimiento del potencial formativo y participación interinstitucional.",
      details: [
        "El área está dotada de profesionales que diseñan formas y métodos, resuelven de manera colaborativa, identifican nudos problemáticos y articulan con otros claustros.",
        "Reconocimiento del potencial formativo del claustro no docente.",
        "Participación en instancias de capacitación, extensión y articulación interinstitucional.",
        "Puesta en valor de experiencias de gestión, resolución de problemas y trabajo colaborativo.",
        "Promoción de participación en jornadas, encuentros y redes sobre gestión universitaria y buenas prácticas.",
      ],
      icon: "share-2",
      color: "bg-[#1B365D]",
    },
    {
      id: "nd-6",
      title: "Bienestar Institucional y Formas de Trabajo",
      summary: "Clima organizacional, modalidades de trabajo y salud mental.",
      details: [
        "Fortalecimiento de un clima organizacional basado en el respeto y la convivencia institucional.",
        "Construcción participativa de criterios para las modalidades presencial y virtual.",
        "Organización del trabajo basada en responsabilidad, objetivos y confianza institucional.",
        "Charlas orientadas a la salud mental para No Docentes.",
      ],
      icon: "smile",
      color: "bg-[#708090]",
    },
    {
      id: "nd-7",
      title: "Agenda inclusiva compartida",
      summary: "Responsabilidad universitaria, espacio de mujeres del IDEI y diálogo interinstitucional.",
      details: [
        "Acordar ejes prioritarios para que el IdeI asuma, realice y se comprometa con actividades de responsabilidad universitaria con organizaciones, comunidades y actores locales.",
        "Retomar el espacio de mujeres del IdeI, donde haya lugar para volver a forjar valores generacionales.",
      ],
      icon: "handshake",
      color: "bg-[#1B365D]",
    },
  ],
  faqDescription:
    "Consultas frecuentes sobre desarrollo profesional, modernización administrativa, participación institucional y bienestar laboral del claustro no docente.",
  faq: nodocentesFaq,
};

export const graduadosContent: ClaustroPageContent = {
  badge: "Claustro de Graduados/as",
  title: "Agenda Estratégica para Graduados/as del IDEI",
  subtitle: "Una comunidad que aprende, lidera y transforma",
  intro: [
    "La Agenda Estratégica para Graduados/as del Instituto de Industria propone consolidar una política institucional innovadora, permanente y de largo plazo, orientada a fortalecer el desarrollo profesional, académico y humano de sus egresados.",
    "El IDEI asume el desafío de acompañar a sus graduados durante toda su trayectoria profesional y promover su participación activa en los procesos de transformación tecnológica, productiva y social.",
    "Los graduados/as son actores estratégicos capaces de articular universidad, industria y sociedad, aportando conocimiento, experiencia y capacidad de innovación al desarrollo regional y nacional.",
  ],
  proposals: [
    {
      id: "grad-1",
      title: "Formación continua y actualización profesional permanente",
      summary: "Trayectos flexibles en IA, transformación digital, liderazgo y gestión.",
      details: [
        "Se impulsará una política integral de formación continua orientada al desarrollo de competencias estratégicas y emergentes en cada campo profesional.",
        "Se promoverán trayectos flexibles de actualización, certificaciones y programas ejecutivos en inteligencia artificial, transformación digital, automatización, análisis de datos, innovación organizacional, liderazgo y gestión.",
      ],
      icon: "refresh-cw",
      color: "bg-[#1B365D]",
    },
    {
      id: "grad-2",
      title: "Centro IDEI de Desarrollo Profesional y Empleabilidad",
      summary: "Acompañamiento permanente en inserción laboral, reconversión y habilidades profesionales.",
      details: [
        "Se promoverá la creación de un Centro IDEI de Desarrollo Profesional como espacio institucional de acompañamiento permanente para graduados/as y estudiantes avanzados.",
        "Desarrollará programas de inserción laboral, orientación profesional, reconversión ocupacional, simulación de entrevistas, talleres de CV y LinkedIn, formación en habilidades profesionales, liderazgo y desarrollo ejecutivo.",
        "Se brindará acompañamiento en transiciones laborales y se promoverá el uso estratégico de herramientas de inteligencia artificial aplicadas a la empleabilidad.",
      ],
      icon: "target",
      color: "bg-[#708090]",
    },
    {
      id: "grad-3",
      title: "Observatorio de Trayectorias Profesionales y Transformaciones Productivas",
      summary: "Información estratégica sobre empleo, salarios y tendencias industriales.",
      details: [
        "Se impulsará un Observatorio destinado a producir información estratégica sobre inserción laboral, perfiles emergentes, evolución salarial, transformaciones tecnológicas, automatización e inteligencia artificial, y tendencias industriales y organizacionales.",
        "Sus informes retroalimentarán la toma de decisiones institucionales y los planes de estudio, generando información relevante para estudiantes, graduados y sectores productivos.",
      ],
      icon: "bar-chart-3",
      color: "bg-[#1B365D]",
    },
    {
      id: "grad-4",
      title: "Comunidad IDEI y redes profesionales",
      summary: "Networking, plataforma Alumni y vinculación interdisciplinaria.",
      details: [
        "Se consolidará una comunidad activa de graduados/as mediante encuentros periódicos, actividades de networking, plataformas digitales de vinculación, redes profesionales por carrera y espacios de intercambio interdisciplinario.",
        "La Plataforma IDEI Alumni permitirá conectar oportunidades laborales, proyectos, investigaciones, emprendimientos y experiencias profesionales, fortaleciendo la identidad institucional.",
      ],
      icon: "network",
      color: "bg-[#708090]",
    },
    {
      id: "grad-5",
      title: "Programa de Mentores y Mentoras",
      summary: "Acompañamiento intergeneracional para estudiantes y jóvenes profesionales.",
      details: [
        "Se implementará un programa de mentorías donde graduados/as acompañen a estudiantes y jóvenes profesionales en la construcción de trayectorias laborales, el desarrollo de competencias, la inserción profesional y el liderazgo.",
        "La iniciativa fortalecerá la integración intergeneracional y la construcción de comunidad académica y profesional.",
      ],
      icon: "user-check",
      color: "bg-[#1B365D]",
    },
    {
      id: "grad-6",
      title: "Programa «Escuchemos a nuestros Graduados y Graduadas»",
      summary: "Visibilización de trayectorias, innovación y aportes de los egresados.",
      details: [
        "Se reactivará este programa destinado a visibilizar trayectorias profesionales, experiencias de innovación y aportes de los egresados en distintos sectores productivos y organizacionales.",
        "A través de entrevistas, encuentros y ciclos de intercambio, se buscará inspirar a estudiantes, fortalecer la identidad institucional y promover el reconocimiento de la comunidad IDEI.",
      ],
      icon: "mic",
      color: "bg-[#708090]",
    },
    {
      id: "grad-7",
      title: "Internacionalización y redes globales",
      summary: "Cooperación internacional, webinars y proyectos conjuntos.",
      details: [
        "Se fomentará la vinculación de graduados/as con redes académicas y profesionales nacionales e internacionales mediante programas de cooperación, webinars, proyectos conjuntos y espacios de intercambio global.",
        "La internacionalización ampliará oportunidades de desarrollo profesional y fortalecerá la proyección internacional del IDEI.",
      ],
      icon: "plane",
      color: "bg-[#1B365D]",
    },
    {
      id: "grad-8",
      title: "Semillero de Docentes, Asistentes y Adscriptos",
      summary: "Formación de nuevas generaciones docentes e incorporación a la vida académica.",
      details: [
        "Se impulsará un programa orientado a promover la participación de graduados/as en la vida académica e institucional del Instituto.",
        "El semillero buscará fortalecer la formación de nuevas generaciones de docentes universitarios, incorporar graduados/as a proyectos de docencia, investigación y extensión, y desarrollar capacidades pedagógicas y de liderazgo académico.",
        "Se generarán espacios de formación en innovación educativa y tecnologías aplicadas a la enseñanza, identificando perfiles con vocación docente y acompañando sus primeras experiencias en cátedras y equipos de investigación.",
      ],
      icon: "sprout",
      color: "bg-[#708090]",
    },
    {
      id: "grad-9",
      title: "Encuentro Anual «Entre Pares»",
      summary: "Diálogo estratégico entre decano, graduados y referentes del sector productivo.",
      details: [
        "Se instituirá un Encuentro Anual «Entre Pares», un espacio de diálogo estratégico entre el decano, graduados/as y profesionales referentes del sector productivo, tecnológico y organizacional.",
        "El encuentro buscará fortalecer la relación entre el IDEI y su comunidad profesional, promover la escucha activa, construir diagnósticos colectivos, identificar tendencias emergentes y retroalimentar las políticas institucionales.",
        "La jornada incluirá mesas de conversación, paneles sobre innovación y transformación productiva, espacios de networking, presentación de informes del Observatorio y un diálogo abierto entre el decano y la comunidad profesional.",
      ],
      icon: "party-popper",
      color: "bg-[#1B365D]",
    },
  ],
  faqDescription:
    "Todo lo que necesitás saber sobre el rol de los graduados, empleabilidad, redes alumni, docencia e investigación en la propuesta de Diálogo 2030.",
  faq: graduadosFaq,
};
