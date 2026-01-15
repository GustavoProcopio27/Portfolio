import { useTranslation } from "react-i18next";

interface TechStack {
    backend_base: React.ReactNode, 
    frontend_base:  React.ReactNode , 
    backend: React.ReactNode , 
    frontend: React.ReactNode , 
    database: React.ReactNode , 
    devops_environ:  React.ReactNode 

}

export default function TechStack({ backend_base, frontend_base, backend, frontend, database, devops_environ }: TechStack)
{
    const {t}= useTranslation();
    return(
        <section className="flex flex-col items-center px-6 " id="Tech">

            <div className="max-w-6xl w-full">
                <h2 className="text-3xl font-extrabold text-teal-800 mb-12 text-center">
                    {t("projects_page.title2")}
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Backend */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">Backend {backend_base}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {backend}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">Frontend {frontend_base} </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {frontend}

                        </div>
                    </div>

                    {/* Banco de Dados */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6">{t("projects_page.db")}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {database}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6">DevOps & {t("projects_page.env")}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {devops_environ}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}