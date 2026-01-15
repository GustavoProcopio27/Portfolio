import ImageCarousel from "../../components/projects/image_carousel";
import Footer from "../../components/utils/footer";
import Navbar from "../../components/projects/navbar"
import Features from "../../components/projects/features"
import Description from "../../components/projects/description"
import TechStack from "../../components/projects/techstack";
import ProjectAcess from "../../components/projects/access";


import cadastro_carro from "/icons/projects/locadora_php/cadastro_carro.png";
import cadastro from "/icons/projects/locadora_php/cadastro.png";
import home from "/icons/projects/locadora_php/home.png";
import login from "/icons/projects/locadora_php/login.png";
import modal from "/icons/projects/locadora_php/modal.png";
import principal_carros from "/icons/projects/locadora_php/search.png";
import tabela from "/icons/projects/locadora_php/tabela_administracao.png";
import { SiComposer, SiPhp, SiXampp } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJs, FaWindows } from "react-icons/fa6";
import { IcoPhpMailer } from "../../components/utils/icons";
import TechIcon from "../../components/utils/TechIcon";
import { DiMysql, DiTerminal } from "react-icons/di";
import { useTranslation } from "react-i18next";

function Separator() { return (<div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />) }

export default function LocadoraCefet() {

    const { t }=useTranslation()

    const imagens: string[] = [cadastro_carro, cadastro, home, login, modal, principal_carros, tabela]

    const description: string[] = [
        t("locadoraCefet.description1"),
        t("locadoraCefet.description2"),
        t("locadoraCefet.description3"),
    ]
    const featuresTitle: string[] = [
        t("locadoraCefet.featureTitle1"),
        t("locadoraCefet.featureTitle2"),
        t("locadoraCefet.featureTitle3"),
    ]

    const featuresText: string[] = [
        t("locadoraCefet.featureText1"),
        t("locadoraCefet.featureText2"),
        t("locadoraCefet.featureText3"),
    ]


    const learningsTitle: string[] = [
        t("locadoraCefet.learningsTitle1"),
        t("locadoraCefet.learningsTitle2"),
        t("locadoraCefet.learningsTitle3"),
    ]

    const learningText: string[] = [
        t("locadoraCefet.learningText1"),
        t("locadoraCefet.learningText2"),
        t("locadoraCefet.learningText3"),
    ]



    return (
        <main className="m-0 p-0 w-full bg-ghostwhite">
            <Navbar projectName="Locadora CEFET"/>
            
            <ImageCarousel imagens={imagens}/>
            <Separator />

            <Description paragraphs={description} />
            <Separator />

            <TechStack
                backend_base={<SiPhp size={35} />}
                frontend_base={<FaJs size={35} />}
                backend={<TechIcon icon={<IcoPhpMailer />} label="PHP Mailer" />}
                frontend={
                        <>
                        <TechIcon icon={<FaHtml5 />} label="HTML" />
                        <TechIcon icon={<FaCss3Alt />} label="CSS" /> 
                        </>
                        }
                database={<TechIcon icon={<DiMysql />} label="MySQL" />}
                devops_environ={
                                <>
                                    <TechIcon icon={<SiXampp />} label="Xampp" />
                                    <TechIcon icon={<FaWindows />} label="Windows" />
                                    <TechIcon icon={<DiTerminal />} label="Bash" />
                                    <TechIcon icon={<SiComposer />} label="Composer" />
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
                projectName={<>Locadora Cefet</>}
                publico={true}
                deployed={false}
                deployLink=""
                repositoryLink="http://github.com/GustavoProcopio27/Projeto_Locadora_PHP/"
            />
            

            <Footer />
        </main>
    );
}