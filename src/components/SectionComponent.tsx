import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  title: string | ReactNode; // ✅ Ahora acepta `string` o `JSX`
  description?: string;
  content: string | ReactNode;
  media?: { type: "image" | "video"; src: string };
  imagePosition?: "left" | "right";
  hasOverlay?: boolean;
  animation?: any;
  children?: ReactNode;
}

export function SectionComponent({
  title,
  description,
  content,
  media,
  imagePosition = "left",
  hasOverlay = false,
  animation,
  children,
}: SectionProps) {
  return (
    <motion.section
      className={`flex flex-col lg:flex-row items-center gap-10 w-full max-w-screen-2xl mx-auto p-10
                ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}
      variants={animation}
    >
      {/* 🔹 Imagen o Video */}
      {media && (
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {media.type === "image" ? (
            <img
              src={media.src}
              alt={typeof title === "string" ? title : "Imagen de la sección"}
              className="w-full max-w-lg h-auto rounded-lg shadow-lg"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
              className="w-full max-w-lg h-auto rounded-lg shadow-lg"
            >
              <source src={media.src} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          )}
          {hasOverlay && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg"></div>
          )}
        </div>
      )}

      {/* 🔹 Contenido */}
      <div className="w-full flex flex-col gap-6">
        {/* ✅ Permitir título como `string` o JSX */}
        {typeof title === "string" ? (
          <h2 className="text-center text-4xl font-bold text-gray-900 custom-title">
            {title}
          </h2>
        ) : (
          title
        )}

        {description && <p className="text-lg text-gray-700">{description}</p>}
        <p className="text-lg text-gray-700">{content}</p>

        {/* ✅ Se asegura de que `children` use todo el ancho */}
        {children && <div className="w-full">{children}</div>}
      </div>
    </motion.section>
  );
}

export default SectionComponent;
