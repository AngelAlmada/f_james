import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import SectionComponent from "./SectionComponent"; // ✅ Sección general
import { slideInFromBottom } from "../utils/animations"; // ✅ Animaciones

export function About() {
  const { t } = useTranslation();

  // ✅ Al cargar la página, se desplaza al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 🔹 Banner Superior */}
      <Banner
        title={t("about.banner_title")
          .split("\n")
          .map((line, index) => (
            <span key={index} className="text-white">
              {line}
              <br />
            </span>
          ))}
        description={t("about.banner_description")
          .split("\n")
          .map((line, index) => (
            <span key={index} className="text-white">
              {line}
              <br />
            </span>
          ))}
        media="/videos/vid8.webm" // ✅ Video de fondo para Contacto
        isVideo={true}
      />
      <SectionComponent
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
                                text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("about.section_title")}
          </h2>
        }
        content={t("about.section_content")
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        media={{ type: "image", src: "/images/James3.png" }}
        imagePosition="right"
        hasOverlay={false}
        animation={slideInFromBottom}
      />
    </div>
  );
}

export default About;
