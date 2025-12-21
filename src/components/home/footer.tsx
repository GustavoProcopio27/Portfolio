import { IoMailSharp,IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t } = useTranslation();

    return(

        <footer id="Contatos" className="flex flex-row p-4  justify-between bg-bg-primary text-gray-900">
            <div className="flex flex-col gap-2 p-8">
                <span >Gustavo Luiz da Silva Procópio</span>
                <span> © GustavoBlack 2025 - {t("copyrightText")}. </span>
            </div>
            <div className="flex flex-col self- gap-2">
                <div><span className="text-xl font-semibold">{t("contacts")}</span></div>
                <div className="flex gap-1">
                    <IoMailSharp size={20} />
                    <a
                        href="mailto:gustavoprocopio727@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-lg align-middle group transition duration-300"
                    >
                        gustavoprocopio727@gmail.com
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"></span>

                    </a>
                </div>
                <div className="flex gap-1">
                    <IoLogoGithub size={20}/>
                    <a
                        href="https://github.com/GustavoProcopio27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-lg align-middle group transition duration-300"
                    >
                        GustavoProcopio27
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"></span>

                    </a>

                </div>
                <div className="flex gap-1">
                    <IoLogoLinkedin size={20}/>
                    <a
                        href="https://linkedin.com/in/gustavo-procópio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-lg align-middle group transition duration-300"
                    >
                        linkedin.com/in/gustavo-procópio
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"></span>

                    </a>
                </div>
            </div>

        </footer>
    );
}