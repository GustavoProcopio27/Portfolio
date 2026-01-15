import { DiGit } from "react-icons/di";
import { SiNginx } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiPrimereact } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiPlotly } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { DiTerminal } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { SiPydantic } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";
import { SiPytest } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

function Tech({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
                        bg-white shadow-md hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300 text-teal-700">
            <div className="text-4xl">{icon}</div>
            <span className="text-sm font-semibold text-center">{label}</span>
        </div>
    );
}

export default function Description()
{
    return(
    <section id="Description">
        <h1 className="text-center bg-linear-to-r p-4 from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">Descrição</h1>

            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl text-lg leading-relaxed text-zinc-700 space-y-6">
                    <p className="text-justify">
                        O Mobi Dashboards é uma aplicação web interativa desenvolvida para visualização e
                        extração de insights a partir dos dados de transporte urbano e deslocamento de
                        alunos e funcionários do CEFET-RJ.
                    </p>

                    <p className="text-justify">
                        A plataforma tem como objetivo apoiar a compreensão dos padrões de mobilidade da
                        comunidade acadêmica, contribuindo para a identificação de gargalos, otimização
                        de rotas e melhoria da experiência de deslocamento, com base em dados reais
                        coletados por meio do aplicativo MOBI.
                    </p>

                    <p className="text-justify">
                        O foco central do projeto está na realização de análises exploratórias dos dados,
                        utilizando dashboards interativos que facilitam a interpretação de informações
                        complexas por meio de gráficos, tabelas e filtros dinâmicos.
                    </p>

                    <p className="text-justify">
                        Além disso, o sistema oferece funcionalidades de exportação dos dados e análises
                        em múltiplos formatos (Excel, PDF, CSV e Word), possibilitando sua reutilização
                        em pesquisas acadêmicas, relatórios institucionais e outras aplicações externas.
                    </p>
                </div>
            </div>

            {/* divisor visual */}
            <div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />

            <div className="flex flex-col items-center px-6">
                <div className="max-w-6xl w-full">
                    <h2 className="text-3xl font-extrabold text-teal-800 mb-12 text-center">
                        Tecnologias utilizadas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Backend */}
                        <div>
                            <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">Backend <FaPython size={35}/></h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <Tech icon={<SiFlask />} label="Flask" />
                                <Tech icon={<SiStreamlit />} label="Streamlit" />
                                <Tech icon={<SiPandas />} label="Pandas" />
                                <Tech icon={<SiScikitlearn />} label="Scikit-Learn" />
                                <Tech icon={<SiPydantic />} label="Pydantic" />
                                <Tech icon={<SiSqlalchemy />} label="SQLAlchemy" />
                                <Tech icon={<SiPlotly />} label="Plotly" />
                                <Tech icon={<SiPytest />} label="Pytest" />
                                <Tech icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{opacity:1}}>
                                        <path fill="#00786f" d="M9.708 15.968v-1.429l-3.97 1.125s.294-1.703 2.364-2.291a3.45 3.45 0 0 1 1.605-.091v-5.86h1.988a12
                                        12 0 0 0-.601-1.541c-.291-.591-.589-.2-1.266.367c-.477.398-1.682 1.248-3.495 1.737s-3.278.359-3.89.253c-.867-.15-1.321-.341-1.278.32c.037.58.175
                                        1.483.492 2.673c.688 2.58 2.957 7.55 7.245 6.395c1.12-.302 1.91-.898 2.459-1.66H9.708zm-6.404-4.701l3.047-.803s-.09 1.173-1.232 1.474s-1.816-.671-1.816-.671z" />
                                        <path fill="#00786f" d="M21.178 7.49c-.792.14-2.694.312-5.042-.318c-2.35-.63-3.908-1.729-4.526-2.246c-.876-.733-1.26-1.244-1.64-.473c-.335.68-.763 1.786-1.178 3.337c-.898 3.354-1.57 10.432 3.985 11.921s8.512-4.978 9.41-8.333c.416-1.548.597-2.72.647-3.477c.058-.857-.53-.608-1.656-.41zm-11.162 2.776s.875-1.363 2.36-.94c1.486.422 1.6 2.065 1.6 2.065zm3.624 6.11c-2.611-.765-3.014-2.848-3.014-2.848l7.016 1.962s-1.416 1.64-4.002.886m2.482-4.28s.874-1.362 2.358-.938s1.602 2.065 1.602 2.065z" />
                                    </svg>}
                                    label={"Playwright"}
                                />
                            </div>
                        </div>

                        {/* Frontend */}
                        <div>
                            <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">Frontend <FaJs size={35} /></h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <Tech icon={<FaReact />} label="React" />
                                <Tech icon={<SiReactrouter />} label="React Router" />
                                <Tech icon={<SiPrimereact />} label="PrimeReact" />
                            </div>
                        </div>

                        {/* Banco de Dados */}
                        <div>
                            <h3 className="text-xl font-bold text-teal-700 mb-6">Banco de Dados</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <Tech icon={<DiMysql />} label="MySQL" />
                            </div>
                        </div>

                        {/* DevOps */}
                        <div>
                            <h3 className="text-xl font-bold text-teal-700 mb-6">DevOps & Ambiente</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <Tech icon={<FaDocker />} label="Docker" />
                                <Tech icon={<DiLinux />} label="Linux" />
                                <Tech icon={<DiTerminal />} label="Bash" />
                                <Tech icon={<SiNginx />} label="Nginx" />
                                <Tech icon={<DiGit />} label="Git" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </section>
    )
}

{/* <div className="text-lg text-zinc-700 leading-relaxed space-y-6"> <p> <span className="font-semibold text-teal-800">Backend:</span> Desenvolvido em Python, utilizando Flask para a API e controle de autenticação, Streamlit para construção dos dashboards interativos, além de bibliotecas como Pandas e Scikit-Learn para processamento e análise de dados, Pydantic para validação, SQLAlchemy para ORM, Plotly para visualização gráfica e ferramentas de exportação como Openpyxl, ReportLab e Python-docx. O projeto também conta com Pytest e Playwright para testes automatizados e Flasgger para documentação da API. </p> <p> <span className="font-semibold text-teal-800">Frontend:</span> Construído com JavaScript e React, utilizando PrimeReact para componentes visuais, React Router para navegação, React Icons para iconografia e File-Saver para suporte à exportação de arquivos. </p> <p> <span className="font-semibold text-teal-800">Banco de Dados:</span> MySQL, utilizado para armazenamento estruturado dos dados e informações de usuários. </p> <p> <span className="font-semibold text-teal-800">DevOps e Deploy:</span> Uso de Docker para padronização do ambiente de desenvolvimento, criação de scripts Bash para automação de tarefas e backups em ambiente Linux, além de integração com Github Actions para suporte a fluxos de CI/CD. </p> <p> <span className="font-semibold text-teal-800">Outras Tecnologias:</span> Git para controle de versão e Nginx como servidor e proxy reverso. </p> </div> </div > </div > </section > ) } */}