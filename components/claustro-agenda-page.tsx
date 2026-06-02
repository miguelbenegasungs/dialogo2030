"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, HelpCircle } from "lucide-react";
import type { ClaustroIconName, ClaustroPageContent } from "@/lib/claustro-content";
import {
  Heart,
  GraduationCap,
  MessageCircle,
  Building2,
  Sparkles,
  Briefcase,
  MapPin,
  Cpu,
  BookOpen,
  Globe,
  Network,
  BarChart3,
  CalendarDays,
  Award,
  Database,
  Users,
  Megaphone,
  Share2,
  Smile,
  Handshake,
  RefreshCw,
  Target,
  UserCheck,
  Mic,
  Plane,
  Sprout,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

const claustroIcons: Record<ClaustroIconName, LucideIcon> = {
  heart: Heart,
  "graduation-cap": GraduationCap,
  "message-circle": MessageCircle,
  "building-2": Building2,
  sparkles: Sparkles,
  briefcase: Briefcase,
  "map-pin": MapPin,
  cpu: Cpu,
  "book-open": BookOpen,
  globe: Globe,
  network: Network,
  "bar-chart-3": BarChart3,
  "calendar-days": CalendarDays,
  award: Award,
  database: Database,
  users: Users,
  megaphone: Megaphone,
  "share-2": Share2,
  smile: Smile,
  handshake: Handshake,
  "refresh-cw": RefreshCw,
  target: Target,
  "user-check": UserCheck,
  mic: Mic,
  plane: Plane,
  sprout: Sprout,
  "party-popper": PartyPopper,
};

type ClaustroAgendaPageProps = {
  content: ClaustroPageContent;
};

export function ClaustroAgendaPage({ content }: ClaustroAgendaPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero banner */}
      <section className="relative bg-primary text-white overflow-hidden pt-24 sm:pt-28">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="claustro-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#claustro-grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
            {content.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance mb-4">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-fog">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {content.intro.map((paragraph, index) => (
            <p key={index} className="text-primary/90 text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Actions grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Diálogo 2030
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary mb-4 text-balance">
              Iniciativas en acción
            </h2>
            <p className="text-steel text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Un panorama rápido de las propuestas estratégicas para lectura ágil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content.proposals.map((proposal, index) => {
              const Icon = claustroIcons[proposal.icon];
              return (
              <Card
                key={proposal.id}
                className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full"
              >
                <CardHeader className={`${proposal.color} text-white p-4 sm:p-5`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wide">
                        Propuesta {index + 1}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold leading-snug mt-1">
                        {proposal.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 bg-white">
                  <p className="text-primary/80 text-sm leading-relaxed">
                    {proposal.summary}
                  </p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed accordion */}
      <section className="py-16 sm:py-24 bg-fog">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Propuestas detalladas
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary mb-4 text-balance">
              Conocé cada iniciativa
            </h2>
            <p className="text-steel text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Expandí cada propuesta para leer el detalle completo de la agenda.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {content.proposals.map((proposal, index) => {
                const Icon = claustroIcons[proposal.icon];
                return (
                <AccordionItem
                  key={proposal.id}
                  value={proposal.id}
                  className="border-b border-border/50 last:border-0"
                >
                  <AccordionTrigger className="text-left text-primary hover:text-primary/80 text-sm sm:text-base py-4 gap-3">
                    <span className="flex items-start gap-3">
                      <span
                        className={`inline-flex w-8 h-8 rounded-lg items-center justify-center shrink-0 ${proposal.color} text-white`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-steel font-normal mb-0.5">
                          Propuesta {index + 1}
                        </span>
                        <span className="font-medium">{proposal.title}</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-steel text-sm sm:text-base pb-4 pl-11">
                    <ul className="space-y-2 list-disc pl-4">
                      {proposal.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section id="faq" className="py-16 sm:py-24 bg-white scroll-mt-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Información
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance">
                Preguntas frecuentes
              </h2>
              <p className="text-steel text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {content.faqDescription ??
                  "Encontrá respuestas a las dudas más comunes sobre las propuestas para este claustro."}
              </p>
            </div>

            <div className="bg-fog rounded-2xl p-4 sm:p-6 shadow-sm border border-primary/5">
              <div className="flex items-center gap-3 mb-4 px-1">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif font-bold text-primary text-lg sm:text-xl">
                  {content.badge}
                </h3>
              </div>

              <div className="bg-white rounded-xl p-2 sm:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {content.faq.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-b border-border/50 last:border-0"
                    >
                      <AccordionTrigger className="text-left text-primary hover:text-primary/80 text-sm sm:text-base py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-steel text-sm sm:text-base pb-4 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 sm:py-16 bg-fog">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al inicio
              </Button>
            </Link>
            <Link href="/#propuestas">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base font-semibold w-full sm:w-auto"
              >
                Ver todos los claustros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
