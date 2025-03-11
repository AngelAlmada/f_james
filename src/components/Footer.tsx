import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

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
                        <FaWhatsapp className="text-green-500" />
                        <p>+52 668 234 5785</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-gray-600" />
                        <p>hola@james-sharples.org</p>
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
                        <li><Link to="/shipping-info" className="hover:text-blue-600">{t("footer.shipping_info")}</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-blue-600">{t("footer.privacy_policy")}</Link></li>
                        <li><Link to="/terms" className="hover:text-blue-600">{t("footer.terms")}</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">{t("footer.contact")}</Link></li>
                    </ul>
                </div>
            </div>

            {/* 🔹 Redes Sociales */}
            <div className="flex justify-center mt-8 gap-6 text-gray-600 text-2xl">
                <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
                <a href="#" className="hover:text-blue-600"><FaXTwitter /></a>
                <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
            </div>
        </footer>
    );
}

export default Footer;
