import Sidebar from "../../components/home/Sidebar";
import HeroServices from "../../components/servicios/HeroServices";
import Servicios from "../../components/servicios/Servicios";
import Footer from "../../components/home/Footer";
export default function PageServices() {
    return (
        <>
        <Sidebar />
        <HeroServices />
        <main>
            <Servicios />
        </main>
        <Footer />
        </>
    );
}

