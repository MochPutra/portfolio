import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { MiniDashboard } from "@/components/mini-dashboard";
import { AiAssistant } from "@/components/ai-assistant";
import { Experience } from "@/components/experience";
import { Certificates } from "@/components/certificate";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20" id="top">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <MiniDashboard />
          <AiAssistant />
          <Experience />
          <Certificates/>
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}

