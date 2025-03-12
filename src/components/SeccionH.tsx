import { useTranslation } from "react-i18next";
import { Obras } from "./Obras";
import SectionComponent from "./SectionComponent"; // ✅ Sección general
import BannerSection from "./BannerSection"; // ✅ Sección especial para banners
import { slideInFromBottom, fadeIn, scaleIn } from "../utils/animations"; // ✅ Animaciones
import { Link } from "react-router-dom";
import { Form } from "./Form";

export function SeccionH() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      {/* 🔹 Sección de Obras */}
      <SectionComponent
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
                    text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("home.section_title")}
          </h2>
        }
        description={t("home.section_content")}
        content={t("home.section_content")}
        animation={fadeIn}
      >
        <Obras />
      </SectionComponent>

      {/* 🔹 Sección con Video */}
      <SectionComponent
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
                    text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("home.section_title2")}
          </h2>
        }
        content={t("home.section_content2")}
        media={{ type: "video", src: "/videos/vid7.webm" }}
        imagePosition="right"
        hasOverlay={false}
        animation={slideInFromBottom}
      />

      {/* 🔹 Sección de Visión y Misión */}
      <SectionComponent
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
        text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("home.vision_mission_title")}
          </h2>
        }
        content={
          <div className="flex flex-col gap-6">
            {/* 🔹 Descripción sobre Visión y Misión */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              {t("home.vision_mission_content")}
            </p>

            {/* 🔹 Contenedor de Visión y Misión en Fila */}
            <div className="flex flex-col sm:flex-row gap-10">
              {/* 🔹 Visión */}
              <div className="flex flex-col items-center gap-3 p-5 w-full sm:w-1/2">
                <img
                  src={t("images/vision.png")}
                  alt="Icono Visión"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-bold text-center">
                  {t("home.vision_title")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("home.vision_content")}
                </p>
              </div>

              {/* 🔹 Misión */}
              <div className="flex flex-col gap-3 p-5 w-full sm:w-1/2 items-center">
                <img
                  src={t("images/mission.png")}
                  alt="Icono Misión"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-bold text-center">
                  {t("home.mission_title")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("home.mission_content")}
                </p>
              </div>
            </div>
          </div>
        }
        media={{ type: "image", src: "/images/mv.jpg" }}
        imagePosition="left"
        animation={scaleIn}
      />
      {/* 🔹 Nueva Sección de Banner con Traducciones */}
      <BannerSection
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
        text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("home.banner_title1")}
          </h2>
        }
        content={
          <p className="text-center text-xl font-trajanus text-stone-700 custom-title">
            {t("home.banner_content1")}
          </p>
        }
        media={{ type: "image", src: "/images/not1.png" }}
        mediaPosition="right"
        animation={fadeIn}
      >
        {/* ✅ Se envuelve el botón en un div con `flex justify-center` */}

        <div className="w-full flex justify-center mt-4">
          <Link
            to="/About"
            className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-blue-700 inline-block"
          >
            {t("home.banner_button1")}
          </Link>
        </div>
      </BannerSection>
      {/* 🔹 Sección de Formulario */}
      <SectionComponent
        title={
          <h2
            className="relative after:block after:mt-2 after:h-1 after:w-16 after:bg-stone-700 after:mx-auto after:rounded-full 
                    text-center text-4xl font-trajanus text-stone-700 custom-title"
          >
            {t("home.section_contact")}
          </h2>
        }
        content={t("")}
        media={{ type: "image", src: "/images/Cattle_s1.png" }}
        imagePosition="right"
        hasOverlay={false}
        animation={slideInFromBottom}
        >
            <Form/>
        </SectionComponent>
    </div>
  );
}

export default SeccionH;
