import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();

    return (
        <section className="max-w-screen-xl mx-auto p-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800">{t("about.title")}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                {t("about.description")}
            </p>
        </section>
    );
}

export default About;
