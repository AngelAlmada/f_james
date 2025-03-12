import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { SeccionH } from "./SeccionH";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Home() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavBar />
            <Banner
                title={t("home.banner_title").split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
                description={t("home.banner_description").split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
                media="/videos/vid6.webm" // ✅ Video de fondo
                isVideo={true}
            >
                {/* ✅ Botón dentro del Banner */}
                <Link
                    to="/gallery"
                    className="mt-6 px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-blue-700 inline-block"
                >
                    {t("home.button")}
                </Link>
            </Banner>

            <SeccionH />
        </div>
    );
}

export default Home;
