export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navbar />
        <ScrollReveal>{null}</ScrollReveal>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
