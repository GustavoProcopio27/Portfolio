import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export default function About()
{
    return(
        <section id="Sobre" className="flex flex-col gap-4 p-12">
            <h1 className="text-center bg-linear-to-r p-4 from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">Sobre</h1>
            <details className="group border-2 p-2 rounded-2xl border-teal-600">
                <summary className="list-none flex items-center gap-2">
                    <span className="group-open:hidden"><FaPlusCircle className="text-txt-primary" size={25}/></span>
                    <span className="hidden group-open:inline"><FaMinusCircle className="text-txt-primary"  size={25} /></span>
                    <span className="text-2xl font-semibold text-txt-primary">Quais habilidades você tem?</span>
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold hover:opacity-90">
                    <ul>
                        <li>Linguagens: Java, Python, PHP, JavaScript, HTML, CSS, Markdown.</li>
                        <li>Frameworks: Flask, Streamlit, Spring.</li>
                        <li>Ferramentas: Docker, Linux, Windows, Git, MySQL.</li>
                        <li>Soft-Skills: Solução de problemas, Paciência, Gestão do Tempo.</li>
                    </ul>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600">
                <summary className="list-none flex items-center gap-2">
                    <span className="group-open:hidden"><FaPlusCircle className="text-txt-primary" size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle className="text-txt-primary" size={25} /></span>            
                    <span className="text-2xl font-semibold text-txt-primary">Quais idiomas você fala?</span>
                </summary>


                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold hover:opacity-90">
                    <p>Português - Nativo</p>
                    <p>Inglês - Intermediário</p>
                </div>
            </details>






            <details className="group border-2 p-2 rounded-2xl border-teal-600">
                <summary className="list-none flex items-center gap-2">
                    <span className="group-open:hidden"><FaPlusCircle className="text-txt-primary" size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle className="text-txt-primary" size={25} /></span> 
                    <span className="text-2xl font-semibold text-txt-primary">Qual formação acadêmica você tem?</span>
                </summary>



                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold hover:opacity-90">
                    <p>Ensino médio - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                    <p>Curso Técnico informática - Centro Federal de Educação Tecnologica Celso Suckow da Fonseca (2023-2025)</p>
                </div>
            </details>








            <details className="group border-2 p-2 rounded-2xl border-teal-600">
                <summary className="list-none flex items-center gap-2">
                    <span className="group-open:hidden"><FaPlusCircle className="text-txt-primary" size={25} /></span>
                    <span className="hidden group-open:inline"><FaMinusCircle className="text-txt-primary" size={25} /></span>                     
                    <span className="text-2xl font-semibold text-txt-primary">Quais certificações você possui?</span>   
                </summary>

                <div className="bg-teal-700 p-6 rounded-2xl mt-8 text-xl text-ghostwhite font-semibold hover:opacity-90">
                    <p>
                        -Menção honrosa na Olimpíada Brasileira de Matemática das Escolas
                        Públicas – OBMEP 2024.
                    </p>
                    <p>
                        -Certificado de participação no curso de extensão “MATEMÁTICA
                        BÁSICA EM AÇÃO:REVISÃO ONLINE COM FOCO NA OBMEP”.
                    </p>
                    <p>
                        - Certificado de conclusão do evento “Jornada Python da Hashtag” da
                        instituição de ensino Hashtag Treinamentos.
                    </p>

                </div>

            </details>

        </section>
    );
}