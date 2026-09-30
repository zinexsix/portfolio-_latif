import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FunFact } from "@/components/fun-fact";
import { Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Docs } from "@/components/docs";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FunFact />
        <Experience />
        <Services />
        <Projects />
        <Docs />
        <Cta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
