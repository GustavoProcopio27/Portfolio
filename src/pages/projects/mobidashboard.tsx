import ImageCarousel from "../../components/projects/image_carousel";
import Footer from "../../components/utils/footer";
import Navbar from "../../components/projects/navbar"
import Features from "../../components/projects/features"
import Description from "../../components/projects/description"
import TechStack from "../../components/projects/techstack";
import ProjectAcess from "../../components/projects/access";
import TechIcon from "../../components/utils/TechIcon";

import tela_login from "/projects/mobi_dashboard/tela-login.png"
import tela_home from "/projects/mobi_dashboard/tela-inicio-dashboard.png"
import tela_graficos from "/projects/mobi_dashboard/tela-graficos.png"
import tela_tabelas from "/projects/mobi_dashboard/tela-tabelas.png"
import tela_gestao from "/projects/mobi_dashboard/tela-gestao-dados-exemplo.png"
import tela_exportacao from "/projects/mobi_dashboard/tela-exportacao-dados.png"
import { FaDocker, FaJs, FaPython, FaReact } from "react-icons/fa6";
import { SiFlask, SiNginx, SiPandas, SiPlotly, SiPrimereact, SiPydantic, SiPytest, SiReactrouter, SiScikitlearn, SiSqlalchemy, SiStreamlit } from "react-icons/si";
import { IcoPlaywright } from "../../components/utils/icons";
import { DiGit, DiLinux, DiMysql, DiTerminal } from "react-icons/di";
import { useTranslation } from "react-i18next";


function Separator() { return (<div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />)}







export default function MobiDashboard() {

    const { t }=useTranslation()

    const imagens:string[] = [tela_home,tela_login, tela_graficos, tela_tabelas, tela_gestao, tela_exportacao]
    const description: string[] = [
        t("mobiDashboards.description1"),
        t("mobiDashboards.description2"),
        t("mobiDashboards.description3"),
        t("mobiDashboards.description4"),
    ]
    const featuresTitle: string[] = [
        t("mobiDashboards.featureTitle1"),
        t("mobiDashboards.featureTitle2"),
        t("mobiDashboards.featureTitle3"),
        t("mobiDashboards.featureTitle4"),
        t("mobiDashboards.featureTitle5"),

    ]

    const featuresText: string[] = [
        t("mobiDashboards.featureText1"),
        t("mobiDashboards.featureText2"),
        t("mobiDashboards.featureText3"),
        t("mobiDashboards.featureText4"),
        t("mobiDashboards.featureText4"),

    ]


    const learningsTitle: string[] = [
        t("mobiDashboards.learningsTitle1"),
        t("mobiDashboards.learningsTitle2"),
        t("mobiDashboards.learningsTitle3"),
        t("mobiDashboards.learningsTitle4"),
        t("mobiDashboards.learningsTitle5"),
        t("mobiDashboards.learningsTitle6"),

    ]

    const learningText: string[] = [
        t("mobiDashboards.learningText1"),
        t("mobiDashboards.learningText2"),
        t("mobiDashboards.learningText3"),
        t("mobiDashboards.learningText4"),
        t("mobiDashboards.learningText5"),
        t("mobiDashboards.learningText6"),

    ]   


    return (
        <main className="m-0 p-0 w-full bg-ghostwhite">
            <Navbar projectName="Mobi-Dashboard"/>
            
            <ImageCarousel imagens={imagens}/>
            <Separator />

            <Description paragraphs={description} />
            <Separator />

            <TechStack
                backend_base={<FaPython size={35} />}
                frontend_base={<FaJs size={35} />}
                backend={
                        <>
                            <TechIcon icon={<SiFlask />} label="Flask" />
                            <TechIcon icon={<SiStreamlit />} label="Streamlit" />
                            <TechIcon icon={<SiPandas />} label="Pandas" />
                            <TechIcon icon={<SiScikitlearn />} label="Scikit-Learn" />
                            <TechIcon icon={<SiPydantic />} label="Pydantic" />
                            <TechIcon icon={<SiSqlalchemy />} label="SQLAlchemy" />
                            <TechIcon icon={<SiPlotly />} label="Plotly" />
                            <TechIcon icon={<SiPytest />} label="Pytest" />
                            <TechIcon icon={<IcoPlaywright />}label={"Playwright"}/>
                        </>
                        }
                frontend={
                        <>
                        <TechIcon icon={<FaReact />} label="React" />
                        <TechIcon icon={<SiReactrouter />} label="React Router" />
                        <TechIcon icon={<SiPrimereact />} label="PrimeReact" />
                        </>
                        }
                database={<TechIcon icon={<DiMysql />} label="MySQL" />}
                devops_environ={
                                <>
                                    <TechIcon icon={<FaDocker />} label="Docker" />
                                    <TechIcon icon={<DiLinux />} label="Linux" />
                                    <TechIcon icon={<DiTerminal />} label="Bash" />
                                    <TechIcon icon={<SiNginx />} label="Nginx" />
                                    <TechIcon icon={<DiGit />} label="Git" />
                                </>
                                }            
            />
            <Separator />

            <Features 
                featuresTitle={featuresTitle}
                featuresText={featuresText}
                learningsTitle={learningsTitle}
                learningText={learningText}
            />
            <Separator />

            <ProjectAcess 
                projectName={<>Mobi<br/>Dashboard</>}
                publico={false}
                deployed={true}
                deployLink="http://mobidashboard.duckdns.org/"
                repositoryLink=""
            />

            <Footer />
        </main>
    );
}