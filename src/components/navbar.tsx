import { Link }  from "react-router-dom";

export default function Navbar(){

    return(
        <header>
            <nav className="flex flex-row sticky">
                <div>Portifólio</div>
                <div>
                    <Link to="">Sobre</Link>
                    <Link to="">Projetos</Link>
                    <Link to="">Contato</Link>
                </div>
            </nav>
        </header>
    )
}