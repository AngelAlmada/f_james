import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


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
                </Routes>
            </div>

            <Footer /> {/* 🔹 Siempre al final */}
        </div>
    );
}

export default App;
