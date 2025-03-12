import { useEffect} from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import { Form } from "./Form";


export function Contact() {
    const { t } = useTranslation();

    // 📌 ⬇️ Se asegura de que la página comience en la parte superior
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* 🔹 Banner Superior */}
            <Banner
                title={t("contact.banner_title").split("\n").map((line, index) => (
                    <span key={index} className=" text-stone-700"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                description={t("contact.banner_description").split("\n").map((line, index) => (
                    <span key={index} className="text-stone-700"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                media="/videos/vid9.webm" // ✅ Video de fondo para Contacto
                isVideo={true}
            />

            <Form/>
        </div>
    );
}

export default Contact;
