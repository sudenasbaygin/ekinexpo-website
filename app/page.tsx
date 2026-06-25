import Navbar from "./components/navbar";
import Hero from "./components/hero-slider";
import Stats from "./components/stats";
import ServicesGrid from "./components/services-grid";
import ProjectGallery from "./components/project-gallery";
import CTAForm from "./components/quote-form";
import Location from "./components/location";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <Stats />
      <ServicesGrid />
      <ProjectGallery />
      <CTAForm />
      <Location />
      <Footer />
    </main>
  );
}