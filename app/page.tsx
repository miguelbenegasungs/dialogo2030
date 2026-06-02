import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Proposals } from "@/components/proposals";
import { Elections } from "@/components/elections";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Proposals />
      <Elections />
      <FAQ />
      <Footer />
    </main>
  );
}
