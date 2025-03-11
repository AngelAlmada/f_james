import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technique: string;
  year: number;
  available: boolean;
  imageSrc: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  technique,
  year,
  available,
  imageSrc,
}: ModalProps) {
  const navigate = useNavigate(); // ✅ Hook para redirigir

  if (!isOpen) return null; // No renderiza si no está abierto

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <motion.div
        className="bg-white/80 bg-opacity-90 rounded-lg shadow-lg p-6 max-w-lg w-full flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Imagen de la obra */}
        <img src={imageSrc} alt={title} className="w-full h-60 object-cover rounded-lg mb-4" />

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {/* Descripción */}
        <p className="text-gray-700 text-center mt-2">{description}</p>

        {/* Información adicional */}
        <div className="mt-4 text-gray-600">
          <p><strong>Técnica:</strong> {technique}</p>
          <p><strong>Año:</strong> {year}</p>
          <p>
            <strong>Disponibilidad:</strong>{" "}
            <span className={available ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
              {available ? "Disponible" : "No Disponible"}
            </span>
          </p>
        </div>

        {/* Botones */}
        <div className="mt-6 flex gap-4">
          {/* Botón de Cerrar */}
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">
            Cerrar
          </button>

          {/* Botón Más Información (Redirige a Contacto) */}
          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
          >
            Más Información
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;
