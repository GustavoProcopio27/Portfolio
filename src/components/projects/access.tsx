import { FaGithub } from "react-icons/fa";
import { RiGitRepositoryFill, RiGitRepositoryPrivateFill } from "react-icons/ri"

import { GrDeploy } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProjectAccessProps {
    projectName: React.ReactNode
    publico: boolean
    deployed: boolean
    deployLink:string
    repositoryLink:string
}
export default function ProjectAcess({ projectName, publico, deployed, deployLink, repositoryLink }:ProjectAccessProps)
{
    const { t } = useTranslation();
    const navigate = useNavigate();
    return(


        <section className="flex flex-col justify-center">

            <div className="flex flex-row max-[500px]:flex-col max-[500px]:gap-8 justify-evenly items-center mb-8">



            <div className="bg-teal-800 p-12 flex flex-col gap-2 rounded-2xl relative after:content[''] after:left-0 after:z-0 after:h-1 after:w-full after:bg-ghostwhite after:top-21 after:absolute shadow-2xl">
                <div className="flex justify-center z-20 relative">
                    <div className="bg-ghostwhite rounded-full p-4 hover:scale-105 hover:text-teal-400 cursor-pointer transition-all ease-in-out duration-200">
                        <FaGithub size={50} />
                    </div>

                </div>

                <div className="w-full">
                    <p className="font-bold text-lg text-center text-ghostwhite">
                        {projectName}    
                        <br />
                        <br />
                    </p>
                        
                    <span className="flex flex-col text-center text-sm bg-ghostwhite pr-12 pl-12 pt-2 pb-2 mt-2 rounded-2xl hover:shadow-xl hover:text-teal-700  hover:shadow-teal-500 hover:scale-105 cursor-pointer transition-all ease-in-out duration-200 hover:ring-3 ring-teal-500">
                        <a 
                            {...(publico
                            ?{
                                href: repositoryLink,
                                target: "_blank",
                                rel:"noopener noreferre",
                            }:{})}
                            aria-disabled={!publico}
                            className="font-bold"
                        >
                            <span className="flex justify-center">
                            {!publico ? <RiGitRepositoryPrivateFill size={20} className="self-center" /> : <RiGitRepositoryFill size={20} className="self-center" />}
                            </span>
                            <span>
                                {!publico ? t("projects_page.public_status") : ''}
                                {t("projects_page.repo")}
                            </span>
                        </a>

                    </span>
                </div>
            </div>












            <div className="bg-teal-800 p-12 flex flex-col gap-2 rounded-2xl relative after:content[''] after:left-0 after:z-0 after:h-1 after:w-full after:bg-ghostwhite after:top-21 after:absolute shadow-2xl">
                <div className="flex justify-center z-20 relative">
                    <div className="bg-ghostwhite rounded-full p-4 hover:scale-105 hover:text-teal-400 cursor-pointer transition-all ease-in-out duration-200">
                        <GrDeploy size={50} />
                    </div>

                </div>

                <div className="w-full">
                    <p className="font-bold text-lg text-center text-ghostwhite">
                        
                        Deploy
                        <br />
                        <br />
                        
                    </p>
                     <span className="flex flex-col text-center text-sm bg-ghostwhite pr-12 pl-12 pt-2 pb-2 mt-2 rounded-2xl hover:shadow-xl hover:text-teal-700  hover:shadow-teal-500 hover:scale-105 cursor-pointer transition-all ease-in-out duration-200 hover:ring-3 ring-teal-500">
                        <a 
                            {...(deployed
                            ?{
                            href:deployLink,
                            target:"_blank",
                            rel:"noopener noreferre",
                            }:{})}
                            className={`font-bold ${deployed ? "hover:text-teal-700 transition-all ease-in-out duration-150" : ''}`}
                        >
                            <span className="flex justify-center">
                                <TbWorld size={25} />
                            </span>
                            <span>{deployed? projectName : t("projects_page.deploy_status")}</span>
                        </a>
                    </span>
                </div>

            </div>
        </div>








        <div className="w-full flex justify-center items-center p-16 ">

            <div onClick={() => navigate("/")} className="bg-teal-800 hover:shadow-2xl rounded-2xl p-4 hover:scale-105 transition-all ease-in-out duration-300 hover:ring-4 ring-teal-500 cursor-pointer">
                <button  className="bg-linear-to-r from-teal-400  to-ghostwhite bg-clip-text text-transparent font-bold cursor-pointer">
                    {t("projects_page.back")}
                </button>
            </div>

        </div>

        </section>
    )
}