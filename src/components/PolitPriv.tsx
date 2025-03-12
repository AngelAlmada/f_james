import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function PolitPriv() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {t("privacy.title")}
      </h1>
      <p className="text-gray-700">{t("privacy.introduction")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("privacy.data_collection_title")}
      </h2>
      <p className="text-gray-700">{t("privacy.data_collection_text")}</p>
      <p className="text-gray-700">{t("privacy.cookies_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("privacy.third_party_title")}
      </h2>
      <p className="text-gray-700">{t("privacy.third_party_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("privacy.rights_title")}
      </h2>
      <p className="text-gray-700">{t("privacy.rights_text")}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        {t("privacy.changes_title")}
      </h2>
      <p className="text-gray-700">{t("privacy.changes_text")}</p>

      <p className="text-gray-700 mt-6">{t("privacy.contact_text")}</p>
    </section>
  );
}

export default PolitPriv;
