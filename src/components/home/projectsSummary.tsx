
import { DiMysql, DiPhp, DiJsBadge, DiHtml5, DiJava, DiPython, DiReact, DiAndroid } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";

import { GrSystem,GrDocker } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectsSummary(){
    const navigate = useNavigate()
    const { t } = useTranslation()

    return(
        <>
        <div className="w-full aspect-[4] bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/icons/utils/wave-up.svg')"}}/>

            <section id="Projetos" className="flex flex-col gap-6 p-12 bg-[#abebdc] max-sm:p-4" >
                <h1 className="text-center bg-linear-to-r p-4 from-teal-900 to-teal-500 bg-clip-text text-transparent font-extrabold text-5xl">{t("projects.title")}</h1>
            
                <div className="grid grid-cols-3 gap-8 max-[780px]:grid-cols-2 max-[640px]:grid-cols-1">








                {/* ------------------------------------------------ MOBI ------------------------------------------------ */}
                <div className="bg-ghostwhite rounded-2xl p-6 border-4 border-[#fb4b14] shadow-xl hover:shadow-2xl hover:scale-102 transition-all ease-in-out duration-200  flex flex-col justify-center gap-4">
                    <img className="self-center border-2 border-[#fb4b14] rounded-xl shadow-xl hover:scale-102 w-72 h-72" src="/icons/projects/mobi/login.png" alt="mobi"/>
                    <h1 className="text-center bg-linear-to-r from-[#fb4b14] to-[#ec6e48] bg-clip-text text-transparent font-extrabold text-5xl"> MOBI</h1>
                    <span className="text-justify">{t("projects.mobiText")}</span>
                    
                    <h2 className="text-center bg-linear-to-r from-[#fb4b14] to-[#ec6e48] bg-clip-text text-transparent font-extrabold text-3xl">{t("projects.mainTech")}</h2>
                    <ul>
                        <li className="flex flex-row gap-2 items-center">
                            <span><DiReact size={30}/></span>
                            <span>React-Native</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiJava size={30} /></span>
                            <span>Java Springboot</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiMysql size={30} /></span>
                            <span>MySQL</span>
                        </li>


                        <li className="flex flex-row gap-2 items-center">
                            <span> <DiAndroid size={30} /></span>
                            <span>Android</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span> <GrSystem size={30} /></span>
                            <span>Serviços systemd</span>
                        </li>

                    </ul>


                    <div className="flex justify-center items-end">
                        <button onClick={() => navigate("/projects/mobi")} className="cursor-pointer w-48 text-white bg-[#fb4b14] border border-white p-3 rounded-2xl font-bold hover:opacity-80 active:scale-95 transition-all duration-200">
                            {t("projects.moreInfo")}
                        </button>
                    </div>
                </div>

                













                {/* ------------------------------------------------    MOBI-DASHBOARD ------------------------------------------------ */}
                <div className="bg-ghostwhite rounded-2xl p-6 border-4 border-[#fb4b14] shadow-xl hover:shadow-2xl hover:scale-102 transition-all ease-in-out duration-200 flex flex-col justify-center gap-4">
                    <img className=" border-2 border-[#fb4b14] rounded-xl shadow-xl hover:scale-102" src="/icons/projects/mobi_dashboard/tela-inicio-dashboard.png" alt="mobi-dashboard" />
                    <h1 className="text-center bg-linear-to-r from-[#fb4b14] to-[#ec6e48] bg-clip-text text-transparent font-extrabold text-5xl truncated"> MOBI-DASHBOARD</h1>
                    <span className="text-justify">{t("projects.mobiDashboardText")}</span>

                    <h2 className="text-center bg-linear-to-r from-[#fb4b14] to-[#ec6e48] bg-clip-text text-transparent font-extrabold text-3xl">{t("projects.mainTech")}</h2>
                    <ul>
                        <li className="flex flex-row gap-2 items-center">
                            <span><DiReact size={30} /></span>
                            <span>React</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiPython size={30} /></span>
                            <span>Python - Flask, Streamlit, Pandas, Scikit-Learn</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiMysql size={30} /></span>
                            <span>MySQL</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><GrDocker size={30} /></span>
                            <span>Docker</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><GrSystem size={30} /></span>
                            <span>Serviços systemd</span>
                        </li>
                    </ul>

                    <div className="flex justify-center items-end">
                        <button onClick={() => navigate("/projects/mobi-dashboard")} className="cursor-pointer w-48 text-white bg-[#fb4b14] border border-white p-3 rounded-2xl font-bold hover:bg-white hover:text-[#fb4b14] hover:border-[#fb4b14] active:scale-95 transition-all duration-300">
                            {t("projects.moreInfo")}
                        </button>
                    </div>
                </div>




















                {/* ------------------------------------------------ FAST-INVEST ------------------------------------------------ */}
                <div className="bg-ghostwhite rounded-2xl border-4 p-6 border-[#009f5c] hover:shadow-2xl hover:scale-102 transition-all ease-in-out duration-200 shadow-xl flex flex-col justify-center gap-4 ">
                    <img className=" border-2 border-[#009f5c] rounded-xl shadow-xl hover:scale-102"  src="/icons/projects/fast_invest/home.png" alt="fastinvest" />
                    <h1 className="text-center bg-linear-to-r from-[#00b366] to-[#009f5c] bg-clip-text tenxt-trasparent font-extrabold text-5xl truncated">FAST-INVEST</h1>
                    <span className="text-justify">{t("projects.fastInvestText")}</span>

                    <h2 className="text-center bg-linear-to-r from-[#00b366] to-[#009f5c] bg-clip-text text-transparent font-extrabold text-3xl">{t("projects.mainTech")}</h2>
                    <ul>
                        <li className="flex flex-row gap-2 items-center">
                            <span><DiReact size={30} /></span>
                            <span>React</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiJava size={30} /></span>
                            <span>Java Springboot</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiMysql size={30} /></span>
                            <span>MySQL</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><GrDocker size={30} /></span>
                            <span>Docker</span>
                        </li>
                    </ul>

                        <div className="flex justify-center items-end">
                        <button onClick={() => navigate("/projects/fast-invest")}  className="cursor-pointer w-48 bg-[#00ff9c] hover:bg-[#00cc7f] text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:outline-none active:ring-4 active:ring-primary/50">
                            {t("projects.moreInfo")}
                        </button>
                    </div>
                </div>















                {/* ------------------------------------------------ LOCADORA PHP ------------------------------------------------ */}
                <div className="bg-ghostwhite rounded-2xl border-4 p-6 border-gray-700 hover:shadow-2xl hover:scale-102 transition-all ease-in-out duration-200 shadow-xl flex flex-col justify-center gap-4">
                    <img className="border-3 rounded-xl border-[#b951d8] shadow-xl hover:scale-102" src="/icons/projects/locadora_php/home.png" alt="locadora php" />
                    <h1 className="text-center bg-linear-to-r from-black to-[#b951d8] bg-clip-text tenxt-trasparent font-extrabold text-5xl truncated"> Locadora PHP</h1>
                    <span className="text-justify">{t("projects.locadoraCefetText")}</span>

                    <h2 className="text-center bg-linear-to-r from-black to-[#b951d8] bg-clip-text text-transparent font-extrabold text-3xl">{t("projects.mainTech")}</h2>
                    <ul>
                        <li className="flex flex-row gap-2 items-center">
                            <span className="flex flex-row gap-2"><DiHtml5 size={25} /><SiCsswizardry size={25} /><DiJsBadge size={25} /></span>
                            <span>HTML,CSS,JavaScript</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiPhp size={30} /></span>
                            <span>PHP</span>
                        </li>

                        <li className="flex flex-row gap-2 items-center">
                            <span><DiMysql size={30} /></span>
                            <span>MySQL</span>
                        </li>
                    </ul>

                        <div className="flex justify-center items-end">
                        <button onClick={() => navigate("/projects/locadora-php")} className="cursor-pointer pt-3 pb-3 pl-6 pr-6 w-48 bg-[#212529] active:scale-95 font-semibold hover:bg-[#ddddee] hover:text-black uppercase text-white rounded-2xl transition-transform duration-150 ease-in-out ">
                            {t("projects.moreInfo")}
                        </button>
                    </div>
                </div>









            </div>
            
        </section>
        <div className="w-full aspect-[4] bg-no-repeat bg-center bg-cover mb-48" style={{backgroundImage: "url('/icons/utils/wave-down.svg')"}}/>

        </>
    );
}