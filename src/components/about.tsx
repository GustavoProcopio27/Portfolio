import { useState } from "react";
import { FaPlusCircle,FaMinusCircle  } from "react-icons/fa";
import { RiImageCircleFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

export default function About()
{
    const [isModalPythonJourneyVisible, setIsModalPythonJourneyVisible] = useState(false)

    const [isModalOBMEPVisible, setIsModalOBMEPVisible]=useState(false)
    return(
        <>
        <section id="Sobre" className="flex flex-col gap-6 p-12">
            <h1 className="text-center bg-linear-to-r p-4 from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">Sobre</h1>
            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25}/></span>
                    <span className="hidden group-open:inline"><FaMinusCircle  size={25} /></span>
                    <span className="text-2xl font-semibold">Quais habilidades você tem?</span>
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <ul>
                        <li>Linguagens: Java, Python, PHP, JavaScript, HTML, CSS, Markdown.</li>
                        <li>Frameworks: Flask, Streamlit, Spring.</li>
                        <li>Ferramentas: Docker, Linux, Windows, Git, MySQL.</li>
                        <li>Soft-Skills: Solução de problemas, Paciência, Gestão do Tempo.</li>
                    </ul>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle size={25} /></span>            
                    <span className="text-2xl font-semibold">Quais idiomas você fala?</span>
                </summary>


                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p>Português - Nativo</p>
                    <p>Inglês - Intermediário</p>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle  size={25} /></span> 
                    <span className="text-2xl font-semibold">Qual formação acadêmica você tem?</span>
                </summary>



                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p>Ensino médio - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                    <p>Curso Técnico informática - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                </div>
            </details>








            <details className="group border-2 p-2 rounded-2xl border-teal-600 hover:bg-linear-to-r hover:from-ghostwhite hover:to-[#e4e4f8]">
                <summary className="list-none flex items-center gap-2 text-txt-primary hover:text-teal-600">
                    <span className="group-open:hidden"><FaPlusCircle size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle size={25} /></span>                     
                    <span className="text-2xl font-semibold">Quais certificações você possui?</span>   
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold transition-all duration-400  hover:bg-linear-to-r  hover:from-teal-600  hover:to-teal-700">
                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            - Menção honrosa na Olimpíada Brasileira de Matemática das Escolas
                            Públicas – OBMEP 2024.
                        </span>
                        <span><RiImageCircleFill onClick={()=>setIsModalOBMEPVisible(true)} className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
                    </p>

                    <p className="flex flex-row justify-between items-center gap-4">
                        <span>
                            - Certificado de conclusão do evento “Jornada Python da Hashtag” da
                            instituição de ensino Hashtag Treinamentos.
                        </span>
                            <span><RiImageCircleFill onClick={() => setIsModalPythonJourneyVisible(true)}  className="size-6 hover:text-teal-300 hover:size-7 transition-all ease-in-out duration-300"/></span>
    
                    </p>

                </div>

            </details>

                <div className={`${isModalOBMEPVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-50 right-140 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalOBMEPVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src="/icons/utils/obmep.png" alt="menção honrosa" /></div>
                </div>

                <div className={`${isModalPythonJourneyVisible ? "flex flex-col" : "hidden"} gap-8 z-50 top-50 right-140 p-8 rounded-2xl fixed bg-[rgba(141,250,214,0.7)] backdrop-blur-xs`}>
                    <div><IoMdCloseCircle className="text-teal-950 hover:text-teal-600" size={35} onClick={() => setIsModalPythonJourneyVisible(false)} /></div>
                    <div><img className="w-3xl h-xl border-2 border-teal-900 rounded-2xl" src="/icons/utils/python_journey.png" alt="certificado python" /></div>
                </div>

        </section>





        </>
    );
}