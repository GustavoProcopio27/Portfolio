import foto from "/icons/utils/me.jpg"
export default function Hero()
{
    return(
        <section id="hero" className="flex flex-row">
            <div className="p-4 rounded-3xl">
                <p>Oi, sou Gustavo Procópio</p>
                <p>Desenvolvedor Python e React</p>

                <a href="/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.pdf" download>PDF</a>
                <a href="/upload/Curriculo-Gustavo-Luiz-da-Silva-Procopio.docx">WORD</a>
            </div>


            <div> 
                <img className="rounded-full" src={foto} alt="eu" />
            </div>
        </section>
    );
}