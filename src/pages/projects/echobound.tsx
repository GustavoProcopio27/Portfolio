import ImageCarousel from "../../components/projects/image_carousel";
import Footer from "../../components/utils/footer";
import Navbar from "../../components/projects/navbar"
import Features from "../../components/projects/features"
import Description from "../../components/projects/description"
import TechStack from "../../components/projects/techstack";
import ProjectAcess from  "../../components/projects/access";


import combate1 from "/projects/echobound/Combate_1.png";
import combate2 from "/projects/echobound/Combate_2.png";
import combate3 from "/projects/echobound/Combate_3.png";
import combate4 from "/projects/echobound/Combate_4.png";
import combate5 from "/projects/echobound/Combate_5.png";
import combate6 from "/projects/echobound/Combate_6.png";
import criar_personagem_fem from "/projects/echobound/criacao_personagem_fem.png";
import criar_personagem_masc from "/projects/echobound/criacao_personagem_masc.png";
import introducao from "/projects/echobound/cutscene_inicial.png";
import decisao_final from "/projects/echobound/decisao_final.png";
import dialogo from "/projects/echobound/dialogo.png";
import final from "/projects/echobound/Final.png";
import descanso from "/projects/echobound/Tela_descanso.png";
import ranking from "/projects/echobound/Ranking.png";
import menu from "/projects/echobound/tela_inicial.png";




import { SiC } from "react-icons/si";
import { RiTerminalWindowFill } from "react-icons/ri";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaDocker } from "react-icons/fa6";
import TechIcon from "../../components/utils/TechIcon";
import { DiGit, DiLinux, DiTerminal } from "react-icons/di";
import { GoFileBinary } from "react-icons/go";
import { useTranslation } from "react-i18next";

function Separator() { return (<div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />) }

export default function Echobound() {

    const { t } = useTranslation()

    const imagens: string[] = [ menu, 
                                introducao, 
                                dialogo, 
                                descanso, 
                                criar_personagem_fem, 
                                criar_personagem_masc, 
                                combate1, 
                                combate2, 
                                combate3, 
                                combate4, 
                                combate5, 
                                combate6,
                                decisao_final, 
                                final, 
                                ranking
                            ]

    const description: string[] = [
        t("echobound.description1"),
        t("echobound.description2"),
        t("echobound.description3"),
    ]
    const featuresTitle: string[] = [
        t("echobound.featureTitle1"),
        t("echobound.featureTitle2"),
        t("echobound.featureTitle3"),
    ]

    const featuresText: string[] = [
        t("echobound.featureText1"),
        t("echobound.featureText2"),
        t("echobound.featureText3"),
    ]


    const learningsTitle: string[] = [
        t("echobound.learningsTitle1"),
        t("echobound.learningsTitle2"),
        t("echobound.learningsTitle3"),
    ]

    const learningText: string[] = [
        t("echobound.learningText1"),
        t("echobound.learningText2"),
        t("echobound.learningText3"),
    ]



    return (
        <main className="m-0 p-0 w-full bg-ghostwhite">
            <Navbar projectName="Echobound" />

            <ImageCarousel imagens={imagens} />
            <Separator />

            <Description paragraphs={description} />
            <Separator />

            <TechStack
                logical_base={<SiC size={35} />}
                logical_label={t("projects_page.language")}
                presentation_base={<MdDoNotDisturbAlt size={35} />}
                presentation_label="Engine"
                logical={<TechIcon icon={<RiTerminalWindowFill />} label="Ncurses" />}
                presentation={<TechIcon icon={<MdDoNotDisturbAlt />} label={t("echobound.none")} /> }
                persistence={<TechIcon icon={<GoFileBinary />} label={t("echobound.save")} />}
                persistence_label={t("projects_page.persistence")}
                devops_environ={
                    <>
                        <TechIcon icon={<DiGit />} label="Git" />
                        <TechIcon icon={<FaDocker />} label="Docker" />
                        <TechIcon icon={<DiTerminal />} label="Bash" />
                        <TechIcon icon={<DiLinux />} label="Linux" />
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
                projectName={<>Echobound</>}
                publico={true}
                deployed={false}
                deployLink=""
                repositoryLink="https://github.com/GustavoProcopio27/Echobound"
            />


            <Footer />
        </main>
    );
}