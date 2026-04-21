"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import TrendingBooks from "@/components/TrendingBooks";
import EditorsPicks from "@/components/EditorsPicks";
import Categories from "@/components/Categories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const ParticleField = lazy(() => import("@/components/ParticleField"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Marquee />
        <TrendingBooks />
        <EditorsPicks />
        <Categories />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
