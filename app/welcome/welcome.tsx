import Sidebar from "../components/home/Sidebar";
import Hero from "../components/home/Hero";
import Servicios from "../components/servicios/Servicios";
import Catalogo from "../components/catalogo/Catalogo";
import ContactSection from "../components/contacto/Contacto";
import Footer from "../components/home/Footer";

export function Welcome() {
  return (
    <>
      {/* Sidebar */}
      <Sidebar />
      {/*  Hero */}
      <Hero />
      {/* Servicios */}
      <Servicios />
      {/* Catalogo */}
      <Catalogo />
      {/* Contacto */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </>
  );
}