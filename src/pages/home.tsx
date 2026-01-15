import Navbar from "../components/home/navbar";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import ProjectsSummary from "../components/home/projectsSummary";
import Footer from "../components/utils/footer";

export default function Home()
{
    return(
        <main className="m-0 p-0 w-full">
            <Navbar/>
            <Hero/>
            <About/>
            <ProjectsSummary/>
            <Footer/>
        </main>
    );
}