import foto from "/icons/utils/me.jpg"
export default function Hero()
{
    return(
        <section id="hero" className="mt-12 grid grid-cols-2 p-2 ">
            <div className="p-4 rounded-3xl flex justify-center flex-col  gap-8  ml-8">
                <p className="bg-linear-to-r from-teal-950 to-teal-600 bg-clip-text text-transparent font-bold text-4xl text-center">Oi, sou Gustavo Procópio</p>

                <span className="text-justify p-8 text-xl">
                    <p>Sou <b>técnico em Informática</b> formado no CEFET-RJ com experiência prática em desenvolvimento full-stack, criação de APIs REST e visualização de dados. </p>
                    
                    <p>Trabalhei com projetos web e mobile <b>(React, React Native)</b> e backend em <b>Java (Spring Boot)</b> e <b>Python (Flask/Streamlit)</b> e possuo habilidade em <b>Docker, ambientes Linux e colaboração em times ágeis</b>. </p>
                    
                    <p className="mt-2 text-2xl bg-linear-to-r from-teal-950 to-teal-600 bg-clip-text text-transparent font-bold">Busco posição como desenvolvedor júnior/estagiário para aplicar e ampliar minhas competências</p>
                </span>



                <div className="flex justify-center">
                    <span className="text-2xl font-semibold">Buscando baixar o currículo?</span>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-row bg-teal-950 text-ghostwhite font-semibold w-fit p-3 rounded-2xl gap-2">
                        <a className="hover:text-teal-300 " href="/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.pdf" download>PDF</a>
                        <a className="hover:text-teal-300" href="/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.docx">WORD</a>
                    </div>
                </div>
            </div>


            <div className="flex justify-center "> 
                <img className="rounded-full border-teal-500 border-6 shadow-2xl w-lg h-lg" src={foto} alt="eu" />
            </div>
        </section>
    );
}