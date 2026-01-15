import ImageCarousel from "../../components/projects/image_carousel";

import Footer from "../../components/utils/footer";
import Navbar from "../../components/projects/navbar"
import Features from "../../components/projects/features"
import Description from "../../components/projects/description"
import TechStack from "../../components/projects/techstack";
import ProjectAcess from "../../components/projects/access";

import wallet from '/icons/projects/fast_invest/wallet.png';
import wallet_register from '/icons/projects/fast_invest/wallet-register.png';
import wallet_inside from '/icons/projects/fast_invest/wallet-inside.png';
import cadastro from '/icons/projects/fast_invest/register.png';
import wallet_quotation from '/icons/projects/fast_invest/wallet-inside-modal.png';
import quotation1 from '/icons/projects/fast_invest/quotation.png';
import quotation2 from '/icons/projects/fast_invest/quotation-2.png';
import main from '/icons/projects/fast_invest/main.png';
import home from '/icons/projects/fast_invest/home.png';
import charts from '/icons/projects/fast_invest/charts.png';
import { FaDocker, FaJava, FaJs, FaReact } from "react-icons/fa6";
import TechIcon from "../../components/utils/TechIcon";
import { SiAxios, SiSpringboot, SiSpringsecurity, SiTailwindcss } from "react-icons/si";
import { DiGit, DiMysql, DiTerminal } from "react-icons/di";
import { useTranslation } from "react-i18next";


function Separator() { return (<div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />) }
export default function FastInvest(){

    const { t }=useTranslation()

    const imagens: string[] = [home, cadastro, quotation1, quotation2, main, wallet, wallet_register, wallet_quotation , wallet_inside,charts]

    const description:string[] = [
        t("fastInvest.description1"),
        t("fastInvest.description2"),
        t("fastInvest.description3"),
        t("fastInvest.description4"),
    ]
    const featuresTitle:string[]=[
        t("fastInvest.featureTitle1"),
        t("fastInvest.featureTitle2"),
        t("fastInvest.featureTitle3"),
        t("fastInvest.featureTitle4"),
    ]

    const featuresText:string[]=[
        t("fastInvest.featureText1"),
        t("fastInvest.featureText2"),
        t("fastInvest.featureText3"),
        t("fastInvest.featureText4"),
    ]

    
    const learningsTitle:string[]=[
        t("fastInvest.learningsTitle1"),
        t("fastInvest.learningsTitle2"),
        t("fastInvest.learningsTitle3"),
        t("fastInvest.learningsTitle4"),
        t("fastInvest.learningsTitle5"),
    ]

    const learningText:string[]=[
        t("fastInvest.learningText1"),
        t("fastInvest.learningText2"),
        t("fastInvest.learningText3"),
        t("fastInvest.learningText4"),
        t("fastInvest.learningText5"),
    ]



    
    return(
        <main className="m-0 p-0 w-full bg-ghostwhite">
            <Navbar projectName="Fast-Invest" />
            
            <ImageCarousel imagens={imagens}/>
            <Separator />

            <Description paragraphs={description}/>                             
            <Separator />

            <TechStack
                backend_base={<FaJava size={35} />}
                frontend_base={<FaJs size={35} />}
                backend={
                        <>
                        <TechIcon icon={<SiSpringboot />} label="Springboot" />
                        <TechIcon icon={<SiSpringsecurity />} label="Spring Security" />
                        </>
                        }
                frontend={
                        <>
                        <TechIcon icon={<FaReact />} label="React" />
                        <TechIcon icon={<p className="font-bold text-xl">{"< Recharts />"}</p>} label="Recharts" />
                        <TechIcon icon={<SiTailwindcss />} label="´Tailwind CSS" />
                        <TechIcon icon={<SiAxios />} label="Axios" />
                        </>
                        }
                database={<TechIcon icon={<DiMysql />} label="MySQL" />}
                devops_environ={
                                <>
                        <TechIcon icon={<FaDocker />} label="Docker" />
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
                projectName={<>Fast-Invest</>}
                publico={true}
                deployed={false}
                deployLink=""
                repositoryLink="https://github.com/Fast-Invest/fast-invest"            
            />

            <Footer />
        </main>
    );
}