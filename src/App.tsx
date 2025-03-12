import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import PolitPriv from "./components/PolitPriv";
import TermCon from "./components/TermCon";
import ShippingInfo from "./components/ShippingInfo";


function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            {/* 🔹 Contenedor del contenido principal */}
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/politpriv" element={<PolitPriv />} />
                    <Route path="/termcon" element={<TermCon />} />
                    <Route path="/shippinginfo" element={<ShippingInfo />} />
                </Routes>
            </div>

            <Footer /> {/* 🔹 Siempre al final */}
        </div>
    );
}

export default App;
