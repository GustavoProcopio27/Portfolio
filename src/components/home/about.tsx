import { useState } from "react";
import { FaPlusCircle,FaMinusCircle  } from "react-icons/fa";
import { RiImageCircleFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import certificadoHashtagPython from "/certificates/python_journey.png";
import mencaoHonrosaOBMEP2024 from "/certificates/obmep2024.png";
import mencaoHonrosaOBMEP2025 from "/certificates/obmep2025.jpg";
import medalhaOBMEP from "/certificates/premiacao_obmep.png";

export default function About()
{
    const [isModalPythonJourneyVisible, setIsModalPythonJourneyVisible] = useState(false)

    const [isModalOBMEP2024Visible, setIsModalOBMEP2024Visible]=useState(false)
    const [isModalOBMEP2025Visible, setIsModalOBMEP2025Visible] = useState(false)
    const [isModalOBMEPMedalVisible, setIsModalOBMEPmedalVisible] = useState(false)

    const { t }=useTranslation()

    return(
        <>
        <section id="Sobre" className="flex flex-col gap-6 p-12">
            <h1 className="text-center bg-linear-to-r p-4 from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">{t("about.title")}</h1>
            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25}/></span>
                    <span className="hidden group-open:inline"><FaMinusCircle  size={25} /></span>
                    <span className="text-2xl font-semibold">{t("about.skills.text")}</span>
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <ul>
                        <li>{t("about.skills.languages")}: Java, Python, PHP, JavaScript, HTML, CSS, Markdown.</li><br />
                        <li>Frameworks: Flask, Streamlit, Spring.</li><br />
                        <li>{t("about.skills.tools")}: Docker, Linux, Windows, Git, MySQL.</li><br />
                        <li>Soft-Skills: {t("about.skills.soft-skills")}</li><br />
                    </ul>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle size={25} /></span>            
                    <span className="text-2xl font-semibold">{t("about.languages.text")}</span>
                </summary>


                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p>{t("about.languages.portuguese")}</p><br />
                    <p>{t("about.languages.english")}</p>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle  size={25} /></span> 
                    <span className="text-2xl font-semibold">{t("about.education.text")}</span>
                </summary>



                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p>{t("about.education.main")} - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p><br />
                    <p>{t("about.education.technical")} - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                </div>
            </details>








            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle size={25} /></span>                     
                    <span className="text-2xl font-semibold">{t("about.certificates.text")}</span>   
                </summary>

                <div className="bg-teal-700 p-6 flex-col flex gap-2 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                   
                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.obmep2024")}
                        </span>
                        <span><RiImageCircleFill onClick={()=>setIsModalOBMEP2024Visible(true)} className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
                    </p>

                     <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.obmep2025")}
                        </span>
                        <span><RiImageCircleFill onClick={() => setIsModalOBMEP2025Visible(true)} className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300" /></span>
                    </p>

                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.premiacaoOBMEP2025")}
                        </span>
                        <span><RiImageCircleFill onClick={() => setIsModalOBMEPmedalVisible(true)} className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300" /></span>
                    </p>

                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.hashtag")}
                        </span>
                        <span><RiImageCircleFill onClick={() => setIsModalPythonJourneyVisible(true)}  className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
                    </p>

                </div>

            </details>

                <div className={`${isModalOBMEP2024Visible ? "flex flex-col" : "hidden"} gap-8 z-50 top-1/10 right-1/5 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalOBMEP2024Visible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={mencaoHonrosaOBMEP2024} alt="menção honrosa" /></div>
                </div>

                <div className={`${isModalOBMEP2025Visible ? "flex flex-col" : "hidden"} gap-8 z-50 top-1/10 right-1/5 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalOBMEP2025Visible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={mencaoHonrosaOBMEP2025} alt="menção honrosa" /></div>
                </div>


                <div className={`${isModalOBMEPMedalVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-1/10 right-1/5 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalOBMEPmedalVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={medalhaOBMEP} alt="bronze" /></div>
                </div>

                <div className={`${isModalPythonJourneyVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-1/10 right-1/5 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalPythonJourneyVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={certificadoHashtagPython} alt="certificado python" /></div>
                </div>

        </section>





        </>
    );
}