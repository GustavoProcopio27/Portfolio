import ImageCarouselMob from "../../components/projects/image_carousel_mobile";
import Footer from "../../components/utils/footer";
import Navbar from "../../components/projects/navbar"
import Features from "../../components/projects/features"
import Description from "../../components/projects/description"
import TechStack from "../../components/projects/techstack";
import ProjectAcess from "../../components/projects/access";

import cadastro_trecho from "/projects/mobi/cadastro_trecho.jpg";
import cadastro1 from "/projects/mobi/cadastro1.jpg";
import cadastro2 from "/projects/mobi/cadastro2.jpg";
import home from "/projects/mobi/home.jpg";
import itinerarios from "/projects/mobi/itinerarios.jpg";
import login from "/projects/mobi/login.jpg";
import modal from "/projects/mobi/modal.jpg";

import TechIcon from "../../components/utils/TechIcon";
import { FaJava } from "react-icons/fa";
import { SiAxios, SiSpringboot, SiSpringsecurity, SiTypescript } from "react-icons/si";
import { FaAndroid, FaDocker, FaReact } from "react-icons/fa6";
import { MdPolyline } from "react-icons/md";
import { DiGit, DiLinux, DiMysql, DiTerminal } from "react-icons/di";
import { useTranslation } from "react-i18next";

function Separator() { return (<div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />) }




export default function Mobi() {
    const { t }=useTranslation()

    const imagens: string[] = [cadastro_trecho, cadastro1, cadastro2, home, itinerarios, login, modal]
    const description: string[] = [
        t("mobi.description1"),
        t("mobi.description2"),
        t("mobi.description3"),
        t("mobi.description4"),
    ]
    const featuresTitle: string[] = [
        t("mobi.featureTitle1"),
        t("mobi.featureTitle2"),
        t("mobi.featureTitle3"),
        t("mobi.featureTitle4"),
        t("mobi.featureTitle5"),

    ]

    const featuresText: string[] = [
        t("mobi.featureText1"),
        t("mobi.featureText2"),
        t("mobi.featureText3"),
        t("mobi.featureText4"),
        t("mobi.featureText4"),

    ]


    const learningsTitle: string[] = [
        t("mobi.learningsTitle1"),
        t("mobi.learningsTitle2"),
        t("mobi.learningsTitle3"),
        t("mobi.learningsTitle4"),


    ]

    const learningText: string[] = [
        t("mobi.learningText1"),
        t("mobi.learningText2"),
        t("mobi.learningText3"),
        t("mobi.learningText4"),


    ]                






    return (
        <main className="m-0 p-0 w-full bg-ghostwhite">

            <Navbar projectName="MOBI"/>
            
            <ImageCarouselMob imagens={imagens}/>
            <Separator />

            <Description paragraphs={description} />
            <Separator />

            <TechStack
                backend_base={<FaJava size={35} />}
                frontend_base={<SiTypescript size={35} />}
                backend={
                        <>
                            <TechIcon icon={<SiSpringboot />} label="Springboot" />
                            <TechIcon icon={<SiSpringsecurity />} label="Spring Security" />
                        </>
                        }
                frontend={
                        <>
                            <TechIcon icon={<FaReact />} label="React Native" />
                            <TechIcon icon={<MdPolyline/>} label="Polyline" />
                            <TechIcon icon={<SiAxios />} label="Axios" />
                            <TechIcon icon={<FaAndroid />} label="Android" />
                        </>
                        }
                database={<TechIcon icon={<DiMysql />} label="MySQL" />}
                devops_environ={
                                <>
                                    <TechIcon icon={<FaDocker />} label="Docker" />
                                    <TechIcon icon={<DiLinux />} label="Linux" />
                                    <TechIcon icon={<DiTerminal />} label="Bash" />
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
                projectName={<>Mobi</>}
                publico={false}
                deployed={true}
                deployLink="http://mobioficial.duckdns.org/MobiOficial.apk"
                repositoryLink="false"   
            />

            <Footer />

        </main>
    );
}