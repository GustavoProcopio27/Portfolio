import DashboardCarousel from "../../components/utils/image_carousel";
import Footer from "../../components/utils/footer";
import Navbar from "../../components/mobidashboard/navbar"
import Features from "../../components/mobidashboard/features"
import Description from "../../components/mobidashboard/description"
import tela_login from "/icons/projects/mobi_dashboard/tela-login.png"
import tela_home from "/icons/projects/mobi_dashboard/tela-inicio-dashboard.png"
import tela_graficos from "/icons/projects/mobi_dashboard/tela-graficos.png"
import tela_tabelas from "/icons/projects/mobi_dashboard/tela-tabelas.png"
import tela_gestao from "/icons/projects/mobi_dashboard/tela-gestao-dados-exemplo.png"
import tela_exportacao from "/icons/projects/mobi_dashboard/tela-exportacao-dados.png"


export default function MobiDashboard() {
    const imagens:string[] = [tela_home,tela_login, tela_graficos, tela_tabelas, tela_gestao, tela_exportacao]

    return (
        <main className="m-0 p-0 w-full bg-ghostwhite">
            <Navbar />
            <DashboardCarousel imagens={imagens}/>
            <Description />
            <div className="w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />

            <Features />
            <Footer />
        </main>
    );
}