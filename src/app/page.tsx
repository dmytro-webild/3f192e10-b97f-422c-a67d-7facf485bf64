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
          description="Apoio premium para hotéis, restaurantes e eventos em Lisboa. Eficiência e discrição garantidas para manter a excelência do seu serviço."
          background={{ variant: "plain" }}
          avatars={[
            { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1595337603612-c2865b2670e3?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1576267423047-16b83f3d6d62?q=80&w=600", alt: "Profissional de Hotelaria" },
            { src: "https://images.unsplash.com/photo-1505693314120-0d32a8675402?q=80&w=600", alt: "Profissional de Hotelaria" }
          ]}
          buttons={[{ text: "Obter Proposta", href: "#contact" }, { text: "Falar com Consultor", href: "#contact" }]}
        />
      </div>

      <div id="problem" data-section="problem">
        <TextSplitAbout
          title="Desafios operacionais exigem agilidade"
          description={["Ausências inesperadas, picos de procura sazonal ou falta de pessoal especializado podem comprometer a experiência do hóspede e a sua reputação."]}
          useInvertedBackground={false}
        />
      </div>

      <div id="solution" data-section="solution">
        <TextSplitAbout
          title="A sua extensão operacional em Lisboa"
          description={["A Âncora Services providencia equipas flexíveis e rigorosamente selecionadas. Focamo-nos na continuidade operacional, permitindo que a sua gestão se concentre na estratégia enquanto nós garantimos a excelência no terreno."]}
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Operações de Elite"
          description="Soluções de staffing desenhadas para o alto padrão hoteleiro e gastronómico."
          textboxLayout="inline-image"
          useInvertedBackground={false}
          features={[
            { title: "Housekeeping & Governança", description: "Limpeza profunda, manutenção e gestão de inventário seguindo os mais elevados critérios de hospitalidade.", buttonIcon: Briefcase, imageSrc: "https://images.unsplash.com/photo-1618773928121-c32242e434e3?q=80&w=800", imageAlt: "limpeza profissional" },
            { title: "Gestão de Lavandaria", description: "Ciclos de lavagem, secagem e manuseamento têxtil otimizados para hotéis de luxo.", buttonIcon: Utensils, imageSrc: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800", imageAlt: "gestão de lavandaria" },
            { title: "Coordenação de Turnos", description: "Gestão logística de equipas para garantir cobertura 24/7 em períodos de alta procura.", buttonIcon: Calendar, imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800", imageAlt: "coordenação de equipa" },
            { title: "Staffing de Emergência", description: "Resposta imediata e ágil para substituir ausências e assegurar a continuidade dos serviços.", buttonIcon: Users, imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800", imageAlt: "staffing ágil" }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <MetricCardSeven
          title="O Nosso Fluxo de Excelência"
          description="Um modelo de parceria simples para resultados imediatos."
          textboxLayout="split"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            { id: "1", value: "01", title: "Consulta Inicial", items: ["Diagnóstico gratuito das suas necessidades."] },
            { id: "2", value: "02", title: "Match de Talentos", items: ["Selecionamos a equipa com o perfil exato."] },
            { id: "3", value: "03", title: "Integração Rápida", items: ["Treino e ambientação na sua operação."] },
            { id: "4", value: "04", title: "Monitorização", items: ["Garantia de qualidade contínua no serviço."] }
          ]}
        />
      </div>

      <div id="differentiation" data-section="differentiation">
        <FaqSplitMedia
          title="Diferenciação Âncora"
          description="Qualidade e fiabilidade no centro da nossa abordagem."
          faqs={[
            { id: "1", title: "Profissionais Vetting", content: "Selecionamos apenas colaboradores com histórico comprovado e atitude proativa." },
            { id: "2", title: "Flexibilidade Total", content: "Adaptamos a dimensão da equipa aos seus horários e épocas de maior volume." },
            { id: "3", title: "Comunicação Fluida", content: "Gestor dedicado para garantir que todas as exigências são cumpridas ao detalhe." },
            { id: "4", title: "Discrição e Rigor", content: "Atuamos com o máximo profissionalismo no seu espaço, garantindo a sua reputação." }
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
          tag="Fale Connosco"
          title="Pronto para elevar os seus padrões?"
          description="Contacte os nossos especialistas hoje e garanta a tranquilidade operacional que o seu hotel ou restaurante merece."
          useInvertedBackground={true}
          background={{ variant: "plain" }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Âncora Services"
          copyrightText="© 2025 Âncora Services | Lisboa, Portugal. Especialistas em Staffing Operacional."
          socialLinks={[{ icon: Instagram, href: "https://instagram.com/ancora.services", ariaLabel: "Instagram" }]}
        />
      </div>
    </ThemeProvider>
  );
}
