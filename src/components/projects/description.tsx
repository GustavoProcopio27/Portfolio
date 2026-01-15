import { useTranslation } from "react-i18next";

interface DescriptionText  {paragraphs:string[]}
export default function Description({ paragraphs }: DescriptionText)
{
    const { t } = useTranslation();
    
    return(
    <section id="Description">
        <h1 className="text-center bg-linear-to-r p-4 from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">{t("projects_page.title1")}</h1>

            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl text-lg leading-relaxed text-zinc-700 space-y-6">
                    {paragraphs.map((paragraph,index)=>
                    (
                        <p key={index} className="text-justify">
                            {paragraph}
                        </p>
                    )

                )}
                </div>
            </div>







    </section>
    )
}

{/* <div className="text-lg text-zinc-700 leading-relaxed space-y-6"> <p> <span className="font-semibold text-teal-800">Backend:</span> Desenvolvido em Python, utilizando Flask para a API e controle de autenticação, Streamlit para construção dos dashboards interativos, além de bibliotecas como Pandas e Scikit-Learn para processamento e análise de dados, Pydantic para validação, SQLAlchemy para ORM, Plotly para visualização gráfica e ferramentas de exportação como Openpyxl, ReportLab e Python-docx. O projeto também conta com Pytest e Playwright para testes automatizados e Flasgger para documentação da API. </p> <p> <span className="font-semibold text-teal-800">Frontend:</span> Construído com JavaScript e React, utilizando PrimeReact para componentes visuais, React Router para navegação, React Icons para iconografia e File-Saver para suporte à exportação de arquivos. </p> <p> <span className="font-semibold text-teal-800">Banco de Dados:</span> MySQL, utilizado para armazenamento estruturado dos dados e informações de usuários. </p> <p> <span className="font-semibold text-teal-800">DevOps e Deploy:</span> Uso de Docker para padronização do ambiente de desenvolvimento, criação de scripts Bash para automação de tarefas e backups em ambiente Linux, além de integração com Github Actions para suporte a fluxos de CI/CD. </p> <p> <span className="font-semibold text-teal-800">Outras Tecnologias:</span> Git para controle de versão e Nginx como servidor e proxy reverso. </p> </div> </div > </div > </section > ) } */}