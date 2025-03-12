import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success] = useState(false);

  return (
    <section className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        {t("form.title")}
      </h2>

      {/* ✅ Formulario con CAPTCHA activado */}
      <form 
        action="https://formsubmit.co/artesharples10@gmail.com" 
        method="POST" 
        className="flex flex-col gap-4"
      >
        {/* ✅ Campos ocultos para configuración de FormSubmit */}
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value="https://chic-tanuki-333147.netlify.app" />

        {/* Campo de Nombre */}
        <label className="text-gray-700 font-semibold">
          {t("form.name_label")}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder={t("form.name_placeholder")}
            required
          />
        </label>

        {/* Campo de Correo */}
        <label className="text-gray-700 font-semibold">
          {t("form.email_label")}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder={t("form.email_placeholder")}
            required
          />
        </label>

        {/* Campo de Teléfono */}
        <label className="text-gray-700 font-semibold">
          {t("form.phone_label")}
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder={t("form.phone_placeholder")}
            required
          />
        </label>

        {/* Campo de Mensaje */}
        <label className="text-gray-700 font-semibold">
          {t("form.message_label")}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder={t("form.message_placeholder")}
            rows={4}
            required
          ></textarea>
        </label>

        {/* Botón de Envío */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          {t("form.submit_button")}
        </button>
      </form>

      {/* Mensaje de éxito (opcional) */}
      {success && (
        <p className="mt-4 text-green-600 text-center font-semibold">
          {t("form.success_message")}
        </p>
      )}
    </section>
  );
}

export default Form;
