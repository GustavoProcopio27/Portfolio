import ReactCountryFlag from "react-country-flag"

export default function Navbar(){

    return(
        <header className="p-4 bg-bg-primary rounded-b-2xl shadow-2xl">
            <nav className="flex flex-row sticky z-10 justify-between ">

                {/* Portfolio escrito bem grande */}
                <div className="bg-linear-to-r from-teal-800 to-teal-400 bg-clip-text text-transparent font-extrabold text-5xl">
                    Portifólio
                </div>




                {/* Links de Navegação */}
                <div className="flex flex-row  justify-evenly items-center w-full">
                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Sobre">Sobre</a>
                    </div>

                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Projetos">Projetos</a>
                    </div>

                    <div className="flex justify-center items-end text-3xl font-extrabold text-text-terciary">
                        <a href="#Contatos">Contato</a>
                    </div>
                </div>



                {/* Botões de linguagem */}
                <div>
                    <div className="flex flex-row rounded-2xl">

                        <div className="flex flex-row items-center bg-ghostwhite p-2 rounded-l-2xl">
                            <label className={`w-full cursor-pointer`}>
                                <ReactCountryFlag style={{ width: "2.5rem", height: "2.5rem" }}  className="w-8 h-8" countryCode="BR" title="BR" svg/>
                            </label>
                        </div>

                        <div className="flex flex-row items-center bg-ghostwhite p-2 rounded-r-2xl">
                            <label className={`w-full cursor-pointer`}>
                                <ReactCountryFlag style={{width:"2.5rem",height:"2.5rem"}} countryCode="US" title="US" svg />
                            </label>
                        </div>

                    </div>
                </div>




            </nav>
        </header>
    )
}