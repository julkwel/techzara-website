// src/app/page.tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import TechSharing from "@/components/TechSharing";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Events />
        <TechSharing />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
