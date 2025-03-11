import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";

export function Contact() {
    const { t } = useTranslation();

    // 📌 ⬇️ Se asegura de que la página comience en la parte superior
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Estado del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Enviar formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Aquí puedes integrar un servicio de backend o un servicio como EmailJS
        console.log("Formulario enviado:", formData);
        alert("Mensaje enviado correctamente");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* 🔹 Banner Superior */}
            <Banner
                title={t("contact.banner_title").split("\n").map((line, index) => (
                    <span key={index} className="text-white"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                description={t("contact.banner_description").split("\n").map((line, index) => (
                    <span key={index} className="text-white"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                media="/videos/vid8.mp4" // ✅ Video de fondo para Contacto
                isVideo={true}
            />

            {/* 🔹 Formulario de Contacto */}
            <section className="max-w-screen-md mx-auto p-10 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    {t("contact.form_title")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                        <label className="block text-gray-700">{t("contact.name")}</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Correo Electrónico */}
                    <div>
                        <label className="block text-gray-700">{t("contact.email")}</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block text-gray-700">{t("contact.phone")}</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-gray-700">{t("contact.message")}</label>
                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Botón de Enviar */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
                        >
                            {t("contact.send_button")}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Contact;
