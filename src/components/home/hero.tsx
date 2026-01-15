import foto from "/upload/me.jpg"
import { FaFileWord } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";


import { useTranslation } from "react-i18next";

export default function Hero()
{
    const { t } = useTranslation();
    
    return(
        <section id="hero" className="mt-12 flex flex-row p-2 max-[1600px]:flex-col">
            <div className="p-4 rounded-3xl flex justify-center flex-col  gap-8  ml-8 basis-1/2">
                <p className="bg-linear-to-r from-teal-950 to-teal-600 bg-clip-text text-transparent font-bold text-4xl text-center">{t("hero.name")}</p>

                <span className="text-justify p-8 text-xl">
                    <p>{t("hero.iam")}<b>{t("hero.profession")}</b>{t("hero.graduation_experience")}</p>
                    
                    <p>{t("hero.work_front")}<b>{t("hero.tech_front")}</b>{t("hero.work_back")}<b>{t("hero.tech_back1")}</b>{t("hero.&")}<b>{t("hero.tech_back2")}</b>
                    {t("hero.skills1")}<b>{t("hero.skills2")}</b></p>
                    
                    <p className="mt-2 text-2xl bg-linear-to-r from-teal-950 to-teal-600 bg-clip-text text-transparent font-bold">{t("hero.objective")}</p>
                </span>



                <div className="flex justify-center">
                    <span className="text-2xl font-semibold">{t("hero.download")}</span>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-row bg-teal-950 text-ghostwhite font-semibold w-fit p-3 rounded-2xl gap-2">
                        <a className="hover:text-teal-300 flex items-center" href={`${import.meta.env.BASE_URL}/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.pdf`} download><FaFilePdf size={20}/> PDF</a>
                        <a className="hover:text-teal-300 flex items-center" href={`${import.meta.env.BASE_URL}/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.docx`} download><FaFileWord size={20} /> WORD</a>
                    </div>
                </div>
            </div>


            <div className="flex justify-center basis-1/2"> 
                <img className="rounded-full border-teal-500 border-6 shadow-2xl w-lg h-lg " src={foto} alt="eu" />
            </div>
        </section>
    );
}