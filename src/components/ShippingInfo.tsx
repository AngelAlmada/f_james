import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ShippingInfo() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {t("shipping.title")}
      </h1>
      <p className="text-gray-700 text-center mb-6">
        {t("shipping.introduction")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🔹 Métodos de Envío */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {t("shipping.methods_title")}
          </h2>
          <p className="text-gray-700 mt-2">{t("shipping.methods_text")}</p>
        </div>

        {/* 🔹 Tiempos de Entrega */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {t("shipping.time_title")}
          </h2>
          <p className="text-gray-700 mt-2">{t("shipping.time_text")}</p>
        </div>

        {/* 🔹 Costos de Envío */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {t("shipping.costs_title")}
          </h2>
          <p className="text-gray-700 mt-2">{t("shipping.costs_text")}</p>
        </div>

        {/* 🔹 Seguimiento del Pedido */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {t("shipping.tracking_title")}
          </h2>
          <p className="text-gray-700 mt-2">{t("shipping.tracking_text")}</p>
        </div>
      </div>

      {/* 🔹 Enlace a Contacto */}
      <div className="text-center mt-8">
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          {t("shipping.contact_button")}
        </Link>
      </div>
    </section>
  );
}

export default ShippingInfo;
