import { useTranslation } from "react-i18next";

interface TechStack {
    logical_base: React.ReactNode, 
    logical_label: String,
    presentation_base:  React.ReactNode , 
    presentation_label: String,
    logical: React.ReactNode , 
    presentation: React.ReactNode , 
    persistence: React.ReactNode , 
    persistence_label:String,
    devops_environ:  React.ReactNode 

}

export default function TechStack({ logical_base, logical_label, presentation_base, presentation_label, logical, presentation, persistence, persistence_label, devops_environ }: TechStack)
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
                        <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">{logical_label} {logical_base}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {logical}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6 flex gap-4">{presentation_label} {presentation_base} </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {presentation}

                        </div>
                    </div>

                    {/* Banco de Dados */}
                    <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-6">{persistence_label}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {persistence}
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