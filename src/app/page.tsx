import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlertBar from "@/components/AlertBar";
import About from "@/components/About";
import Services from "@/components/Services";
import VirtualOffice from "@/components/VirtualOffice";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AlertBar />
      <About />
      <Services />
      <VirtualOffice />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
