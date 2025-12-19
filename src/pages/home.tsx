import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import ProjectsSummary from "../components/projectsSummary";
import Footer from "../components/footer";

export default function Home()
{
    return(
        <main className="m-0 p-0">
            <Navbar/>
            <Hero/>
            <About/>
            <ProjectsSummary/>
            <Footer/>
        </main>
    );
}