import { useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import Modal from "./Modal";
import { obrasData, Obra } from "../data/obrasData";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/animations";

export function Gallery() {
    const { t } = useTranslation();
    const [selectedObra, setSelectedObra] = useState<Obra | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* 🔹 Banner Superior */}
            <Banner
                title={t("gallery.banner_title").split("\n").map((line, index) => (
                    <span key={index} className="text-white"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                description={t("gallery.banner_description").split("\n").map((line, index) => (
                    <span key={index} className="text-white"> {/* ✅ Texto en blanco */}
                        {line}
                        <br />
                    </span>
                ))}
                media="/videos/vid8.webm" // ✅ Video de fondo
                isVideo={true}
            />


            {/* 🔹 Sección de Galería */}
            <section className="p-5 w-full max-w-screen-xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 text-center">{t("gallery.title")}</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto text-center">
                    {t("gallery.description")}
                </p>

                {/* 🔹 Contenedor con Grid para todas las obras */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }} // ✅ Se activa en cada scroll
                    variants={slideInFromBottom} // ✅ Animación de entrada
                >
                    {obrasData.map((obra, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
                            initial={{ opacity: 0, y: 50 }} // ✅ Inicia desde abajo con opacidad 0
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }} // ✅ Efecto en cascada
                            whileHover={{ scale: 1.05 }} // 🔽 Efecto de hover en pantallas grandes
                            onClick={() => setSelectedObra(obra)}
                        >
                            {/* Imagen de la obra */}
                            <img
                                src={obra.src}
                                alt={obra.name}
                                className="w-full h-[300px] object-cover rounded-lg"
                            />

                            {/* Nombre de la obra */}
                            <div className="text-center py-2 bg-gray-800 text-white font-semibold">
                                {obra.name}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Modal para mostrar la obra seleccionada */}
            {selectedObra && (
                <Modal
                    isOpen={!!selectedObra}
                    onClose={() => setSelectedObra(null)}
                    title={selectedObra.name}
                    description={selectedObra.description}
                    technique={selectedObra.technique}
                    year={selectedObra.year}
                    available={selectedObra.available}
                    imageSrc={selectedObra.src}
                />
            )}
        </div>
    );
}

export default Gallery;
