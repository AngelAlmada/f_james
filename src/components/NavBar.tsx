import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, X} from "lucide-react"; // ✅ Iconos de Lucide

export function NavBar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="text-stone-700 p-4 flex items-center justify-between w-full z-50 absolute top-0 left-0"> 
            {/* Título alineado a la izquierda */}
            <h1 className="font-trajanus text-2xl md:text-4xl flex-shrink-0">
                {t("navbar.title")}
            </h1>

            {/* Contenedor de los enlaces alineados al centro */}
            <div className="hidden md:flex gap-8 text-lg font-semibold flex-grow justify-center">
                <Link to="/" className="hover:text-blue-400 transition">{t("navbar.home")}</Link>
                <Link to="/gallery" className="hover:text-blue-400 transition">{t("navbar.gallery")}</Link>
                <Link to="/about" className="hover:text-blue-400 transition">{t("navbar.trayectoria")}</Link>
                <Link to="/contact" className="hover:text-blue-400 transition">{t("navbar.contact")}</Link>
            </div>

            {/* Selector de idioma alineado a la derecha */}
            <select
                className="hidden md:block bg-transparent px-3 py-1 border text-stone-700 rounded-md flex-shrink-0"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value="es">🇪🇸 Español</option>
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 Français</option>
            </select>

            {/* Menú hamburguesa en móviles */}
            <button className="md:hidden text-center" onClick={toggleMenu}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Menú desplegable en móviles (Alineado a la derecha) */}
            <div 
                className={`fixed top-0 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                {/* Botón de cierre */}
                <button className="absolute top-4 right-4 text-stone-700" onClick={closeMenu}>
                    <X size={30} />
                </button>

                {/* Contenedor de enlaces */}
                <div className="flex flex-col items-start p-8 mt-12 gap-6">
                    <Link to="/" className="text-xl font-semibold text-stone-700 hover:text-blue-400 transition" onClick={closeMenu}>
                        {t("navbar.home")}
                    </Link>
                    <Link to="/gallery" className="text-xl font-semibold text-stone-700 hover:text-blue-400 transition" onClick={closeMenu}>
                        {t("navbar.gallery")}
                    </Link>
                    <Link to="/about" className="text-xl font-semibold text-stone-700 hover:text-blue-400 transition" onClick={closeMenu}>
                        {t("navbar.trayectoria")}
                    </Link>
                    <Link to="/contact" className="text-xl font-semibold text-stone-700 hover:text-blue-400 transition" onClick={closeMenu}>
                        {t("navbar.contact")}
                    </Link>

                    {/* Selector de idioma en móviles */}
                    <select
                        className="bg-transparent text-stone-700 px-3 py-2 border border-stone-700 rounded-md mt-4"
                        value={i18n.language}
                        onChange={(e) => {
                            i18n.changeLanguage(e.target.value);
                            closeMenu();
                        }}
                    >
                        <option value="es">🇪🇸 Español</option>
                        <option value="en">🇬🇧 English</option>
                        <option value="fr">🇫🇷 Français</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
