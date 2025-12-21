import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Placeholder(){
    const navigate = useNavigate()
    const { t } = useTranslation();

    return (
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">{t("placeholder.warning")}</p>
                <p className="text-white">{t("placeholder.return")}</p>
                <p className="text-white">{t("placeholder.cu")}</p>
                <p onClick={() => navigate("/")} className="text-amber-400 hover:underline hover:decoration-amber-600">{t("placeholder.back")}</p>
            </div>
        </aside>
        );
}