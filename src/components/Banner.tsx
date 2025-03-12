import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import { ReactNode } from "react";

interface BannerProps {
  title: ReactNode;
  description: ReactNode;
  media: string;
  isVideo?: boolean;
  children?: ReactNode; // ✅ Permite recibir el botón u otros elementos
}

export function Banner({
  title,
  description,
  media,
  isVideo = false,
  children,
}: BannerProps) {
  return (
    <motion.section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center text-stone-700 overflow-hidden"
      {...fadeIn}
    >
      {/* Video o imagen de fondo */}
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={media} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      ) : (
        <img
          src={media}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      {/* Contenido encima del fondo */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-trajanus custom-xl:text-5xl">{title}</h1>
        <p className="mt-2 text-xl">{description}</p>

        {/* ✅ Aquí se renderiza el botón pasado desde Home */}
        {children}
      </div>
    </motion.section>
  );
}

export default Banner;
