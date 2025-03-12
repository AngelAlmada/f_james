import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react"; // ✅ Iconos de Lucide

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-100 text-gray-700 py-10">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {/* 🔹 Sección: Contáctanos */}
                <div>
                    <h3 className="text-xl font-bold mb-4">{t("footer.contact_title")}</h3>
                    <hr className="border-gray-400 w-16 mb-4" />
                    <p>Calle Arroyo 741, Almar</p>
                    <p>Residencial, Los Mochis, Sinaloa.</p>
                    <p>81293 Los Mochis, Sinaloa.</p>
                    <div className="flex items-center gap-2 mt-2">
                        <FaWhatsapp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                        <p>+52 668 32 10 822</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
                        <p>artesharples10@gmail.com</p>
                    </div>
                </div>

                {/* 🔹 Sección: Explora nuestro sitio */}
                <div>
                    <h3 className="text-xl font-bold mb-4">{t("footer.explore_title")}</h3>
                    <hr className="border-gray-400 w-16 mb-4" />
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-600">{t("footer.home")}</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">{t("footer.about")}</Link></li>
                        <li><Link to="/gallery" className="hover:text-blue-600">{t("footer.gallery")}</Link></li>
                        <li><Link to="/events" className="hover:text-blue-600">{t("footer.events")}</Link></li>
                        <li><Link to="/news" className="hover:text-blue-600">{t("footer.news")}</Link></li>
                    </ul>
                </div>

                {/* 🔹 Sección: Políticas del sitio */}
                <div>
                    <h3 className="text-xl font-bold mb-4">{t("footer.policies_title")}</h3>
                    <hr className="border-gray-400 w-16 mb-4" />
                    <ul className="space-y-2">
                        <li><Link to="/shippinginfo" className="hover:text-blue-600">{t("footer.shipping_info")}</Link></li>
                        <li><Link to="/PolitPriv" className="hover:text-blue-600">{t("footer.privacy_policy")}</Link></li>
                        <li><Link to="/TermCon" className="hover:text-blue-600">{t("footer.terms")}</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">{t("footer.contact")}</Link></li>
                    </ul>
                </div>
            </div>

            {/* 🔹 Redes Sociales con Iconos Responsivos */}
            <div className="flex justify-center mt-8 gap-4 sm:gap-6 text-lg sm:text-2xl">
                <a href="https://www.facebook.com/jamessharplesart/" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
                <a href="https://x.com/JamesSharplesA" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
                <a href="https://www.instagram.com/jamessharplesartist/" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
                <a href="https://www.youtube.com/@JamesSharplesArtist" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
                <a href="https://www.linkedin.com/in/james-sharples-artist/" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
                <a href="https://mx.pinterest.com/jamesharplesartist/" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <img src="/icons/Pinterest.png" alt="Pinterest" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://wa.me/+5216683210822" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-400 rounded-full hover:bg-stone-300 transition">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
