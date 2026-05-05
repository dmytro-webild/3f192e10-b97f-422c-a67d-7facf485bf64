"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Briefcase, Utensils, Calendar, Users, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="solid"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Âncora Services"
          navItems={[
            { name: "Início", id: "hero" },
            { name: "Serviços", id: "services" },
            { name: "Como Funciona", id: "how-it-works" },
            { name: "Contato", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Soluções profissionais de staffing, quando o seu negócio mais precisa."
          description="Apoio para hotéis, restaurantes e eventos em Lisboa, com foco em eficiência, discrição e fiabilidade."
          background={{ variant: "plain" }}
          avatars={[
            { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1595337603612-c2865b2670e3?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1576267423047-16b83f3d6d62?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1505693314120-0d32a8675402?q=80&w=600", alt: "Profissional de Hotelaria" }
          ]}
          buttons={[{ text: "Contacte-nos", href: "#contact" }, { text: "Pedir Apoio", href: "#contact" }]}
        />
      </div>

      <div id="problem" data-section="problem">
        <TextSplitAbout
          title="Desafios operacionais são imprevisíveis"
          description={["Ausências inesperadas, períodos de pico de procura e falta de pessoal podem impactar diretamente a qualidade do serviço e a experiência do cliente."]}
          useInvertedBackground={false}
        />
      </div>

      <div id="solution" data-section="solution">
        <TextSplitAbout
          title="Uma solução fiável e flexível"
          description={["A Âncora Services disponibiliza profissionais qualificados para apoiar as suas operações, garantindo a continuidade e a manutenção dos padrões de serviço."]}
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Operações Especializadas"
          description="Soluções de staffing para o rigor do mercado hoteleiro e de restauração em Lisboa."
          textboxLayout="inline-image"
          useInvertedBackground={false}
          features={[
            { title: "Room Cleaning & Housekeeping", description: "Limpeza profunda, manutenção de quartos e gestão de inventário de amenidades com rigor hoteleiro.", buttonIcon: Briefcase, imageSrc: "https://images.unsplash.com/photo-1618773928121-c32242e434e3?q=80&w=800", imageAlt: "limpeza profissional de quartos" },
            { title: "Laundry & Linens", description: "Gestão de inventário têxtil, substituição de roupas de cama e toalhas seguindo os ciclos de lavandaria.", buttonIcon: Utensils, imageSrc: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800", imageAlt: "organização de lavandaria" },
            { title: "Shift Management", description: "Coordenação precisa de equipas por turnos, garantindo cobertura total em horários de pico e eventos especiais.", buttonIcon: Calendar, imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800", imageAlt: "coordenação de equipa" },
            { title: "Last-Minute Substitutions", description: "Resposta ágil a ausências imprevistas para garantir que a sua operação nunca sofra interrupções.", buttonIcon: Users, imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800", imageAlt: "suporte operacional rápido" }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <MetricCardSeven
          title="Como Funciona"
          description="O nosso processo fluido para a excelência em staffing."
          textboxLayout="split"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            { id: "1", value: "01", title: "Contacte-nos", items: ["Entre em contacto através dos nossos canais."] },
            { id: "2", value: "02", title: "Avaliação", items: ["Avaliamos as suas necessidades específicas."] },
            { id: "3", value: "03", title: "Seleção", items: ["Selecionamos o profissional adequado."] },
            { id: "4", value: "04", title: "Execução", items: ["Execução do serviço com acompanhamento."] }
          ]}
        />
      </div>

      <div id="differentiation" data-section="differentiation">
        <FaqSplitMedia
          title="Porquê Escolher-nos"
          description="Padrões profissionais para os ambientes mais exigentes."
          faqs={[
            { id: "1", title: "Seleção Cuidadosa", content: "Vetting rigoroso de todos os profissionais." },
            { id: "2", title: "Flexibilidade", content: "Soluções ajustadas à sua procura específica." },
            { id: "3", title: "Comunicação", content: "Reporte claro e transparente." },
            { id: "4", title: "Discrição", content: "Abordagem operacional profissional e discreta." }
          ]}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contacto"
          title="Pedir Apoio"
          description="Fale com um representante para avaliar as suas necessidades operacionais."
          useInvertedBackground={true}
          background={{ variant: "plain" }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Âncora Services"
          copyrightText="© 2025 Âncora Services | Lisboa, Portugal"
          socialLinks={[{ icon: Instagram, href: "https://instagram.com/ancora.services", ariaLabel: "Instagram" }]}
        />
      </div>
    </ThemeProvider>
  );
}
