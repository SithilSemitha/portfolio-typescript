import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ProfileSection } from "@/components/profile-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { GridBackground } from "@/components/grid-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <GridBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  )
}
