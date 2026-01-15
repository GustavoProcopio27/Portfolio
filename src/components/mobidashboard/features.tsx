import Timeline from "../utils/timeline"
import TimelineItem from "../utils/timelineItem"

export default function Features()
{
    return(
    <div className="flex flex-row gap-48" id="Features">

        <div className="flex flex-col p-8 w-full">
            <div className="bg-teal-800 max-w-fit rounded-md p-4 -ml-4 shadow-2xl">
                <h1 className="bg-linear-to-r from-ghostwhite to-teal-400 bg-clip-text text-transparent font-extrabold text-3xl">Funcionalidades Principais</h1>
            </div>

            <Timeline>
                <>
                    <TimelineItem title={"Visualização de dados processados:"}>
                        Disponibiliza gráficos e tabelas interativos com dados extraídos, tratados e analisados.
                    </TimelineItem>

                    <TimelineItem title={"Filtragem avançada:"}>
                        Permite filtrar as visualizações por campos como curso, cargo, cidade, gênero, data do itinerário e mais.
                    </TimelineItem>

                    <TimelineItem title={"Exportação de dados:"}>
                        Permite a exportação dos gráficos disponibilizados como PNG e das tabelas e informações consultados em PDF, Excel, Word e CSV.
                    </TimelineItem>


                    <TimelineItem title={"Cadastro e login de usuários"}>
                        Sistema de autenticação para administradores, gestores e colaboradores, permitindo separação por cargos.

                    </TimelineItem>

                    <TimelineItem title={"Logs administrativos:"}>
                            Visualização de logs do sistema em conjunto ao tratamento de exceções, permitindo o gerenciamento de erros ocorridos assim
                            como dos acessos e ações dos usuários no sistema.
                    </TimelineItem>

                </>
            </Timeline>  
        </div>

        <div className="flex flex-col p-8 w-full">
                <div className="bg-teal-800 max-w-fit rounded-md p-4 -ml-4 shadow-2xl">
                    <h1 className="bg-linear-to-r from-ghostwhite to-teal-400 bg-clip-text text-transparent font-extrabold text-3xl">Aprendizado</h1>
                </div>

                <Timeline>
                    <>
                        <TimelineItem title={"Arquitetura de aplicações web:"}>
                            Desenvolvimento de uma arquitetura integrada entre Flask e Streamlit, com
                            separação clara entre backend, dashboards e frontend, garantindo escalabilidade
                            e organização do projeto.                        
                        </TimelineItem>

                        <TimelineItem title={"Processamento e análise de dados:"}>
                            Tratamento, limpeza e análise exploratória de dados reais de mobilidade urbana,
                            utilizando Pandas e técnicas estatísticas para geração de insights relevantes, 
                            incluindo o desenvolvimento de um modelo de ML.
                        </TimelineItem>

                        <TimelineItem title={"Autenticação, segurança e boas práticas:"}>
                            Implementação de autenticação baseada em JWT e proteção CSRF, e além da aplicação
                            de boas práticas de segurança como envio de headers HTST E CSP.
                        </TimelineItem>

                        <TimelineItem title={"Auditoria do sistema:"}>
                            Desenvolvimento de um sistema de logs do sistema em conjunto ao tratamento de exceções, permitindo 
                            o gerenciamento de erros ocorridos assim como dos acessos e ações dos usuários no sistema. 
                        </TimelineItem>


                        <TimelineItem title={"Modelagem:"}>
                            Planejamento do desenvolvimento com a criação de diagramas de Caso de Uso, Classe, Sequência e
                            Entidade-Relacionamento, visando padronizar e organizar o ambiente do sistema.
                        </TimelineItem>

                        <TimelineItem title={"Testagem:"}>
                            Implementação 
                            de testes unitários e de integração para garantir qualidade, segurança e confiabilidade, com automatização 
                            dos testes por meio do GitHub Actions, assegurando o correto funcionamento antes dos deploys.
                        </TimelineItem>


                    </>
                </Timeline>              
        </div>
    </div>
 
    
    )
}