import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingBooks from "@/components/TrendingBooks";
import EditorsPicks from "@/components/EditorsPicks";
import Categories from "@/components/Categories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrendingBooks />
      <EditorsPicks />
      <Categories />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
