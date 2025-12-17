import { IoMailSharp,IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer id="contato">
            <div>Contatos</div>
            <div className="flex">
                <IoMailSharp/>
                <Link to="mailto:gustavoprocopio727@gmail.com">gustavoprocopio727@gmail.com</Link> 
            </div>

            <div className="flex">
                <IoLogoGithub/> 
                <Link to="https://github.com/GustavoProcopio27">GustavoProcopio27</Link>
            </div>

            <div className="flex">
                <IoLogoLinkedin/>  
                <Link to=""></Link>
            </div>

        </footer>
    );
}