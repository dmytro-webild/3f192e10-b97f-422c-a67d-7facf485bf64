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
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Profissional de Hotelaria" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Profissional de Hotelaria" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Profissional de Hotelaria" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Profissional de Hotelaria" }
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
          title="A Nossa Especialização"
          description="Apoio especializado adaptado ao mercado de hotelaria de Lisboa."
          textboxLayout="inline-image"
          useInvertedBackground={false}
          features={[
            { title: "Indústria Hoteleira", description: "Housekeeping, serviço de pequeno-almoço, apoio geral.", buttonIcon: Briefcase, imageSrc: "http://img.b2bpic.net/free-photo/porter-presents-direction-spa-center_482257-75910.jpg", imageAlt: "equipa de housekeeping hoteleiro de luxo" },
            { title: "Restaurantes", description: "Empregados de mesa, apoio de cozinha, copa.", buttonIcon: Utensils, imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-recipe_23-2148145561.jpg", imageAlt: "serviço de mesa em restaurante" },
            { title: "Eventos", description: "Pessoal geral, preparação e apoio operacional.", buttonIcon: Calendar, imageSrc: "http://img.b2bpic.net/free-photo/press-reporter-fallowing-leads-case_23-2149579721.jpg", imageAlt: "preparação de pessoal para eventos" },
            { title: "Staffing Flexível", description: "Mão-de-obra dedicada para períodos de pico.", buttonIcon: Users, imageSrc: "http://img.b2bpic.net/free-photo/doorkeeper-shows-left-side-studio_482257-90877.jpg", imageAlt: "staff de apoio operacional" }
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg"
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