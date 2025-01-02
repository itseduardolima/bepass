import Header from "@/components/Header";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import PassCardShowcase from "@/components/sections/PassCardShowcase";
import Plans from "@/components/sections/Plans";
import Rates from "@/components/sections/Rates";
import VirtualStore from "@/components/sections/VirtualStore";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Partners />
      <VirtualStore />
      <Plans />
      <PassCardShowcase />
      <Rates />
    </>
  );
}
