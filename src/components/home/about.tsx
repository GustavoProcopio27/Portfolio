import { useState } from "react";
import { FaPlusCircle,FaMinusCircle  } from "react-icons/fa";
import { RiImageCircleFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import certificadoHashtagPython from "/icons/utils/python_journey.png";
import mencaoHonrosaOBMEP from "/icons/utils/obmep.png";

export default function About()
{
    const [isModalPythonJourneyVisible, setIsModalPythonJourneyVisible] = useState(false)

    const [isModalOBMEPVisible, setIsModalOBMEPVisible]=useState(false)
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
                        <li>{t("about.skills.text")}: Java, Python, PHP, JavaScript, HTML, CSS, Markdown.</li>
                        <li>Frameworks: Flask, Streamlit, Spring.</li>
                        <li>{t("about.skills.tools")}: Docker, Linux, Windows, Git, MySQL.</li>
                        <li>Soft-Skills: {t("about.skills.soft-skills")}</li>
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
                    <p>{t("about.languages.portuguese")}</p>
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
                    <p>{t("about.education.main")} - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                    <p>{t("about.education.technical")} - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                </div>
            </details>








            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle size={25} /></span>                     
                    <span className="text-2xl font-semibold">{t("about.certificates.text")}</span>   
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.obmep")}
                        </span>
                        <span><RiImageCircleFill onClick={()=>setIsModalOBMEPVisible(true)} className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
                    </p>

                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            {t("about.certificates.hashtag")}
                        </span>
                            <span><RiImageCircleFill onClick={() => setIsModalPythonJourneyVisible(true)}  className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
    
                    </p>

                </div>

            </details>

                <div className={`${isModalOBMEPVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-50 right-140 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalOBMEPVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={mencaoHonrosaOBMEP} alt="menção honrosa" /></div>
                </div>

                <div className={`${isModalPythonJourneyVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-50 right-140 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalPythonJourneyVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src={certificadoHashtagPython} alt="certificado python" /></div>
                </div>

        </section>





        </>
    );
}