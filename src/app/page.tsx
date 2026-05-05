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
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "How it Works", id: "how-it-works" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Professional staffing solutions, when your business needs them most."
          description="Support for hotels, restaurants and events in Lisbon, with a focus on efficiency, discretion and reliability."
          background={{ variant: "plain" }}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Hospitality Professional" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Hospitality Professional" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Hospitality Professional" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DJy6d7VZJvroZeCpUvRtESIppW/uploaded-1778014410386-kz0tajho.jpg", alt: "Hospitality Professional" }
          ]}
          buttons={[{ text: "Contact Us", href: "#contact" }, { text: "Request Support", href: "#contact" }]}
        />
      </div>

      <div id="problem" data-section="problem">
        <TextSplitAbout
          title="Operational challenges are unpredictable"
          description={["Unexpected absences, peak demand periods and staff shortages can directly impact service quality and customer experience."]}
          useInvertedBackground={false}
        />
      </div>

      <div id="solution" data-section="solution">
        <TextSplitAbout
          title="A reliable and flexible solution"
          description={["Âncora Services provides qualified professionals to support your operations, ensuring continuity and maintaining service standards."]}
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Our Expertise"
          description="Specialized support tailored for the Lisbon hospitality market."
          textboxLayout="inline-image"
          useInvertedBackground={false}
          features={[
            { title: "Hotel Industry", description: "Housekeeping, breakfast service, general support.", buttonIcon: Briefcase, imageSrc: "http://img.b2bpic.net/free-photo/porter-presents-direction-spa-center_482257-75910.jpg", imageAlt: "luxury hotel housekeeping staff" },
            { title: "Restaurants", description: "Waitstaff, kitchen support, dishwashing.", buttonIcon: Utensils, imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-recipe_23-2148145561.jpg", imageAlt: "waitstaff serving restaurant" },
            { title: "Events", description: "General staff, setup and operational support.", buttonIcon: Calendar, imageSrc: "http://img.b2bpic.net/free-photo/press-reporter-fallowing-leads-case_23-2149579721.jpg", imageAlt: "event staff setup" },
            { title: "Flexible Staffing", description: "Dedicated workforce for peak periods.", buttonIcon: Users, imageSrc: "http://img.b2bpic.net/free-photo/doorkeeper-shows-left-side-studio_482257-90877.jpg", imageAlt: "luxury hotel housekeeping staff" }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <MetricCardSeven
          title="How it Works"
          description="Our seamless process for staffing excellence."
          textboxLayout="split"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            { id: "1", value: "01", title: "Contact Us", items: ["Reach out via our contact channels."] },
            { id: "2", value: "02", title: "Assessment", items: ["We assess your specific needs."] },
            { id: "3", value: "03", title: "Selection", items: ["We select the appropriate professional."] },
            { id: "4", value: "04", title: "Execution", items: ["Service execution with follow-up."] }
          ]}
        />
      </div>

      <div id="differentiation" data-section="differentiation">
        <FaqSplitMedia
          title="Why Choose Us"
          description="Professional standards for the most demanding environments."
          faqs={[
            { id: "1", title: "Careful Selection", content: "Rigorous vetting of every professional." },
            { id: "2", title: "Flexibility", content: "Solutions adjusted to your specific demand." },
            { id: "3", title: "Communication", content: "Clear and transparent reporting." },
            { id: "4", title: "Discretion", content: "Professional and discreet operational approach." }
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
          title="Request Support"
          description="Contact us to speak with a representative and assess your operational needs."
          useInvertedBackground={true}
          background={{ variant: "plain" }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Âncora Services"
          copyrightText="© 2025 Âncora Services | Lisbon, Portugal"
          socialLinks={[{ icon: Instagram, href: "https://instagram.com/ancora.services", ariaLabel: "Instagram" }]}
        />
      </div>
    </ThemeProvider>
  );
}