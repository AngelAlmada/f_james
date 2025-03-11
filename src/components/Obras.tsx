import { useState } from "react";
import { obrasData, Obra } from "../data/obrasData"; // ✅ Importamos el tipo Obra
import Modal from "./Modal";
import ObrasName from "../data/obrasName";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/animations"; // ✅ Importamos la nueva animación

export function Obras() {
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);

  return (
    <section className="p-5 w-full max-w-screen-xl mx-auto">
      {/* Contenedor con Grid para organizar las obras */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }} // ✅ Se activa en cada scroll
        variants={slideInFromBottom} // ✅ Animación de entrada
      >
        {obrasData.map((obra, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer relative group"
            initial={{ opacity: 0, y: 50 }} // ✅ Inicia desde abajo con opacidad 0
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }} // ✅ Efecto en cascada
            whileHover={{ scale: 1.05 }} // 🔽 Efecto de hover en pantallas grandes
            onClick={() => setSelectedObra(obra)}
          >
            {/* Contenedor de la imagen con efecto de opacidad */}
            <div className="custom-xl:max-w-full max-w-[280px] mx-auto relative">
              <img
                src={obra.src}
                alt={obra.name}
                className="w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover rounded-lg 
                          transition-opacity duration-300 group-hover:opacity-70"
              />
            </div>
            <ObrasName name={obra.name} />
          </motion.div>
        ))}
      </motion.div>

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
    </section>
  );
}

export default Obras;
