import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function TermCon() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {t("terms.title")}
      </h1>
      <p className="text-gray-700">{t("terms.introduction")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("terms.use_title")}
      </h2>
      <p className="text-gray-700">{t("terms.use_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("terms.content_title")}
      </h2>
      <p className="text-gray-700">{t("terms.content_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("terms.user_responsibility_title")}
      </h2>
      <p className="text-gray-700">{t("terms.user_responsibility_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("terms.changes_title")}
      </h2>
      <p className="text-gray-700">{t("terms.changes_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("terms.contact_title")}
      </h2>
      <p className="text-gray-700">{t("terms.contact_text")}</p>
    </section>
  );
}

export default TermCon;
