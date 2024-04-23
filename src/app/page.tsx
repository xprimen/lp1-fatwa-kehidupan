"use client";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Greeting from "@/components/Greeting";
import Hero from "@/components/Hero";
import JenisBantuan from "@/components/JenisBantuan";
import SummaryBaksos from "@/components/SummaryBaksos";
import ToTopButton from "@/components/ToTopButton";
import Transfer from "@/components/Transfer";

export default function Home() {
  return (
    <>
      <Hero />
      <Greeting />
      <JenisBantuan />
      <About />
      <Transfer />
      <Gallery />
      <SummaryBaksos />
      <ToTopButton />
    </>
  );
}
