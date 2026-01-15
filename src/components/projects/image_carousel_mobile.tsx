
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useState } from "react"

interface ImagensCarrosel {imagens:string[];}

export default function ImageCarouselMob({ imagens }: ImagensCarrosel)
{
    const [imagemAtual, setImagemAtual] = useState(0);
    const imagemAtualIndex=imagemAtual+1

    const imagemAnterior = imagemAtual === 0 ? imagens.length - 1 : imagemAtual - 1;
    const imagemAnteriorIndex = imagemAtual === 0 ? imagens.length : imagemAtual;

    const proximaImagem = imagemAtual + 1 == imagens.length ? 0 : imagemAtual + 1 
    const proximaImagemIndex = imagemAtual + 1 === imagens.length ? 1 : imagemAtual + 2 

    const prevImg = () => { setImagemAtual((atual)=>(atual === 0 ?  imagens.length-1 : atual - 1))}
    const nextImg = () => { setImagemAtual((atual)=>(atual +1 === imagens.length ? 0 : atual + 1)) }


    return (
        <div id="Carousel" className="w-full flex items-start relative mt-12 mb-12">


            <div className="absolute top-1/2 left-0 z-60 hover:text-gray-600 transition-all ease-in-out duration-150">
                <div className="flex items-center">
                    <FaAngleLeft size={50}  onClick={prevImg}/>
                </div>
            </div>





            <div className="w-full flex justify-center items-center gap-4 m-0">


                {/* Anterior */}
                <div className="transition-all duration-500 ease-in-out scale-90 opacity-60 -mr-16 md:-mr-24 z-0">
                    <div className="p-2 border-teal-200 border-2 rounded-2xl bg-ghostwhite">
                        <img
                            src={imagens[imagemAnterior]}
                            alt={`img-n${imagemAnteriorIndex}`}
                            className="w-80 max-[1152px]:w-5xl h-auto rounded-xl"
                        />
                    </div>
                </div>          
                
                {/* Atual */}
                <div className="transition-all duration-500 ease-in-out scale-100 opacity-100 z-30">
                    <div className="p-2 border-teal-200 border-2 rounded-2xl bg-ghostwhite">
                        <img
                            src={imagens[imagemAtual]}
                            alt={`img-n${imagemAtualIndex}`}
                            className="w-90 max-[1152px]:w-5xl h-auto rounded-xl"
                        />
                    </div>
                </div>

                {/* Proxima */}
                <div className="transition-all duration-500 ease-in-out scale-90 opacity-60 -ml-16 md:-ml-24 z-0">
                    <div className="p-2 border-teal-200 border-2 rounded-2xl bg-ghostwhite">
                        <img
                            src={imagens[proximaImagem]}
                            alt={`img-n${proximaImagemIndex}`}
                            className="w-80 max-[1152px]:w-5xl  h-auto rounded-xl"
                        />
                    </div>
                </div>

            </div>






            <div className="absolute top-1/2 right-0 z-60 hover:text-gray-600 transition-all ease-in-out duration-150">
                <div className="flex items-center ">
                    <FaAngleRight size={50} onClick={nextImg}/>
                </div>
            </div>

        </div>
    );

}