import { useState } from "react";
import ReactCountryFlag from "react-country-flag"
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Navbar(){
    const [isModalVisible,setIsModalVisible]=useState(false)
    const { t, i18n } = useTranslation();


    const changeLanguage = (lang:string) => {
        console.log(lang)
        i18n.changeLanguage(lang)
        localStorage.setItem("lang",lang)
    }

    return(
        <>
        <header className="sticky top-0 z-50 p-4 bg-bg-primary rounded-b-2xl shadow-2xl">
            <nav className="flex flex-row  justify-between ">

                {/* Portfolio escrito bem grande */}
                <div className="bg-linear-to-r from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">
                    {t("navbar.title")}
                </div>




                {/* Links de Navegação */}
                <div className="flex flex-row  justify-evenly items-center w-full max-[678px]:hidden">
                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Sobre">{t("navbar.about")}</a>
                    </div>

                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Projetos">{t("navbar.projects")}</a>
                    </div>

                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Contatos">{t("navbar.contact")}</a>
                    </div>
                </div>

                <div className="flex items-center min-[678px]:hidden">
                    <SlOptionsVertical size={25} onClick={()=>setIsModalVisible(true)}/>
                </div>

                <div className="max-[678px]:hidden">
                    <div className="flex flex-row rounded-2xl">

                        <div onClick={() => changeLanguage("pt")} className={`cursor-pointer flex flex-row items-center ${i18n.language ==="pt" ? 'bg-teal-400':'bg-ghostwhite'} p-2 rounded-l-2xl hover:bg-teal-700 transition-all duration-100 ease-in-out`}>
                            <label className='w-full cursor-pointer'>
                                <ReactCountryFlag style={{ width: "2.5rem", height: "2.5rem" }}  className="w-8 h-8" countryCode="BR" title="BR" svg/>
                            </label>
                        </div>

                        <div onClick={() => changeLanguage("en")} className={`cursor-pointer flex flex-row items-center ${i18n.language === "en" ? 'bg-teal-400' : 'bg-ghostwhite'} p-2 rounded-r-2xl hover:bg-teal-700 transition-all duration-100 ease-in-out`}>
                            <label className='w-full cursor-pointer'>
                                <ReactCountryFlag  style={{width:"2.5rem",height:"2.5rem"}} countryCode="US" title="US" svg />
                            </label>
                        </div>

                    </div>
                </div>




            </nav>
            
        </header>

        <div className={`fixed w-full flex flex-row justify-between z-50 ${isModalVisible ? "block" : "hidden"} w-48 h-48 `}>
            <div />
            <div className="mr-2 bg-teal-950 rounded-b-3xl pl-2 pr-2 ">

            <div className="flex justify-end"><IoMdCloseCircle onClick={()=>setIsModalVisible(false)} className="text-ghostwhite" size={35}/></div>
            
            <div className="flex justify-center items-end text-3xl font-extrabold text-ghostwhite">
                <a href="#Sobre">{t("navbar.about")}</a>
            </div>

            <div className="flex justify-center items-end text-3xl font-extrabold text-ghostwhite">
                <a href="#Projetos">{t("navbar.projects")}</a>
            </div>

            <div className="flex justify-center items-end text-3xl font-extrabold text-ghostwhite">
                <a href="#Contatos">{t("navbar.contact")}</a>
            </div>

            <div>
                <div className="flex flex-row justify-center rounded-2xl">

                    <div onClick={() => changeLanguage("pt")} className={`cursor-pointer flex flex-row items-center ${i18n.language === "pt" ? 'bg-teal-400' : 'bg-ghostwhite'} p-2 rounded-l-2xl hover:bg-teal-700 transition-all duration-100 ease-in-out`}>
                        <label className='w-full cursor-pointer'>
                            <ReactCountryFlag style={{ width: "1.5rem", height: "1.5rem" }} className="w-8 h-8" countryCode="BR" title="BR" svg />
                        </label>
                    </div>

                    <div onClick={() => changeLanguage("en")} className={`cursor-pointer flex flex-row items-center ${i18n.language === "en" ? 'bg-teal-400' : 'bg-ghostwhite'} p-2 rounded-r-2xl hover:bg-teal-700 transition-all duration-100 ease-in-out`}>
                        <label className='w-full cursor-pointer'>
                            <ReactCountryFlag style={{ width: "1.5rem", height: "1.5rem" }} countryCode="US" title="US" svg />
                        </label>
                    </div>

                </div>
            </div>
            </div>
        </div>

        </>
    )
}