"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Vote, User, Lightbulb, Users, MessageCircle } from "lucide-react";

const faqSections = [
  {
    title: "Sobre la elección",
    icon: Vote,
    questions: [
      {
        question: "¿Qué se elige en esta votación?",
        answer: "Se elige la conducción del Instituto de Industria para el próximo período. Además, se eligen rector, consejo superior y el decanato del resto de institutos.",
      },
      {
        question: "¿Quiénes pueden votar?",
        answer: "Participan docentes, estudiantes, graduados y nodocentes según lo establecido por la normativa de la UNGS. Consultá el padrón en ungs.edu.ar/institucional/elecciones2026",
      },
      {
        question: "¿Cuándo se realizan las elecciones?",
        answer: "Las elecciones se llevarán a cabo del 16 al 18 de junio de 2026. Podés consultar el padrón en ungs.edu.ar/institucional/elecciones2026",
      },
      {
        question: "¿Dónde puedo consultar el padrón?",
        answer: "Podés encontrarlo en los canales oficiales de la UNGS: ungs.edu.ar/institucional/elecciones2026",
      },
      {
        question: "¿Cómo se vota?",
        answer: "El proceso de votación será informado oportunamente por la universidad con todos los detalles.",
      },
    ],
  },
  {
    title: "Sobre Miguel Benegas",
    icon: User,
    questions: [
      {
        question: "¿Quién es Miguel Benegas?",
        answer: "Ingeniero Mecánico, docente y gestor universitario con amplia trayectoria en educación superior, innovación y vinculación con el sector productivo. Además, es director de la carrera de Ingeniería Industrial del IDEI.",
      },
      {
        question: "¿Cuál es su experiencia en gestión universitaria?",
        answer: "Cuenta con más de 10 años de experiencia en gestión y participación en universidades nacionales.",
      },
      {
        question: "¿Qué representa Diálogo 2030?",
        answer: "Es una propuesta basada en la participación, la innovación y la construcción colectiva del futuro del IDEI.",
      },
    ],
  },
  {
    title: "Sobre las propuestas",
    icon: Lightbulb,
    questions: [
      {
        question: "¿Cuáles son los principales ejes de la propuesta?",
        answer: "Calidad académica, gestión participativa, innovación y transformación digital, formación complementaria, vinculación con la industria, y equidad y oportunidades.",
      },
      {
        question: '¿Qué significa "las personas en el centro de la gestión"?',
        answer: "Significa escuchar activamente a estudiantes, docentes y graduados para tomar decisiones con impacto real.",
      },
      {
        question: "¿Cómo se busca mejorar la calidad académica?",
        answer: "Mediante actualización de contenidos, capacitación docente, mejor organización académica y mayor articulación con el mundo profesional.",
      },
      {
        question: "¿Qué propuestas hay para estudiantes?",
        answer: "Más acompañamiento, formación complementaria, herramientas digitales y mayor participación.",
      },
      {
        question: '¿Qué significa "formación con sentido"?',
        answer: "Una enseñanza conectada con la realidad profesional, la innovación y los desafíos del futuro.",
      },
    ],
  },
  {
    title: "Participación",
    icon: Users,
    questions: [
      {
        question: "¿Cómo puedo compartir ideas o propuestas?",
        answer: "Podés contactarnos por Instagram en @miguelbenegasungs o por email a mbenegas@campus.ungs.edu.ar",
      },
      {
        question: "¿Cómo puedo sumarme?",
        answer: "Podés participar en encuentros, compartir propuestas y ayudar a difundir las ideas.",
      },
    ],
  },
  {
    title: "Comunicación",
    icon: MessageCircle,
    questions: [
      {
        question: "¿Dónde puedo seguir las novedades?",
        answer: 'En Instagram: @miguelbenegasungs y en esta página web.',
      },
      {
        question: "¿Dónde puedo consultar las propuestas completas?",
        answer: 'En la sección "Propuestas" de la web o descargando el documento PDF.',
      },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-fog">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Información
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance">
            Preguntas frecuentes
          </h2>
          <p className="text-steel text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Encontrá respuestas a las dudas más comunes sobre las elecciones, el candidato y las propuestas.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif font-bold text-primary text-lg sm:text-xl">
                  {section.title}
                </h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, itemIndex) => (
                  <AccordionItem 
                    key={itemIndex} 
                    value={`${sectionIndex}-${itemIndex}`}
                    className="border-b border-border/50 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-primary hover:text-primary/80 text-sm sm:text-base py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-steel text-sm sm:text-base pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-steel mb-4">
            ¿Tenés más preguntas? Contáctanos en nuestras redes.
          </p>
          <a
            href="https://www.instagram.com/miguelbenegasungs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            @miguelbenegasungs
          </a>
        </div>
      </div>
    </section>
  );
}
