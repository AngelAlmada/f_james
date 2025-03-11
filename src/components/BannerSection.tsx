import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BannerSectionProps {
    title: string | ReactNode;
    content: string | ReactNode;
    media: { type: "image" | "video"; src: string };
    mediaPosition?: "left" | "right";
    animation?: any;
    children?: ReactNode; // ✅ Permite contenido adicional (botón, enlaces, etc.)
}

export function BannerSection({
    title,
    content,
    media,
    mediaPosition = "right",
    animation,
    children, // ✅ Se recibe como prop
}: BannerSectionProps) {
    return (
        <motion.section
            className={`flex flex-col lg:flex-row items-center gap-10 w-full max-w-screen-2xl mx-auto p-10
                ${mediaPosition === "right" ? "lg:flex-row-reverse" : ""}`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            variants={animation}
        >
            {/* 🔹 Banner (Imagen o Video) */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
                {media.type === "image" ? (
                    <img
                        src={media.src}
                        alt={typeof title === "string" ? title : "Banner de la sección"}
                        className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                    />
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                    >
                        <source src={media.src} type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                )}
            </div>

            {/* 🔹 Contenido */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                {/* ✅ Permitir título como `string` o JSX */}
                {typeof title === "string" ? (
                    <h2 className="text-center text-4xl font-bold text-gray-900 custom-title">{title}</h2>
                ) : (
                    title
                )}
                
                <p className="text-lg text-gray-700">{content}</p>

                {/* ✅ Renderiza `children` si existe */}
                {children && <div className="mt-4">{children}</div>}
            </div>
        </motion.section>
    );
}

export default BannerSection;
