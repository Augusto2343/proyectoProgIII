import iconoTransmision from "/transmisionIconsvg.svg";
import iconoTraccion from "/TRACCION.svg";
import velocidad from "/velocidad.svg"
import "./CarExpoCard.css"
import { useEffect, useState } from "react";
const CarExpoCard = ({datosAuto}) =>{
    const [screenWdt,setScreenWdt] = useState();
    useEffect( () =>{
        const getScreenWidth = async() =>{
            const screenWidth = window.innerWidth;

             setScreenWdt(screenWidth);
        }
        window.addEventListener("resize",getScreenWidth);

        return () =>{
            window.removeEventListener("resize",getScreenWidth);
        }

    },[])
    
    return(
        <>
        <section className="carCardExp card p-2">
        {
            screenWdt > 830 ?
            <div className=" cardCar p-2 m-2 grid grid-cols-2 gap-6 items-center rounded-4xl" style= {{
                    backgroundImage: `
                                linear-gradient(
                                        330deg,
                                     ${datosAuto.enfasisColor}00 0%,
                                    ${datosAuto.enfasisColor}12 20%,
                                    ${datosAuto.enfasisColor}30 35%,
                                    ${datosAuto.enfasisColor}22 45%,
                                    ${datosAuto.enfasisColor}00 60%,
                                    transparent 75%
                                ),
                                linear-gradient(
                                    150deg,
                                     ${datosAuto.secondColor}00 0%,
                                    ${datosAuto.secondColor}11 20%,
                                    ${datosAuto.secondColor}20 35%,
                                    ${datosAuto.secondColor}12 45%,
                                    ${datosAuto.secondColor}00 60%,
                                    transparent 75%
                                ),
                                linear-gradient(
                                to left,
                                #1a1a1a00,
                                #1a1a1a00

                                )
                            `,

                            backgroundSize: `
                                100% 100%,
                                100% 100%,
                                65%
                            `,

                            backgroundRepeat: `
                                no-repeat,
                                no-repeat,
                                no-repeat
                            `,

                            backgroundPosition: `
                                center,
                                center,
                                right center
                            `,

                            height: "40rem"
                        
            }}>
            <img src={datosAuto.img} alt="" />
            <div className="informacion" >
                <h3 className="text-3xl title">{datosAuto.titulo}</h3>
                <p>{datosAuto.descripcion}</p>
                <div className="flex flex-row items-center gap-5">
                    {
                        datosAuto.datos.map((caracteristicas) =>(
                            <>
                                <div  className="cardEspecif">
                                    {
                                        
                                        caracteristicas.type === "transmision" ?
                                        <>
                                        <img  src={iconoTransmision}></img>
                                        </> 
                                        :
                                        caracteristicas.type === "traccion" ? 
                                        <>
                                        <img src={iconoTraccion}></img>
                                        </>
                                        :
                                        <img src={velocidad}></img>

                                        
                                    }
                                    <p>{caracteristicas.parrafo}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>:
        
        <div className=" cardCar p-2 m-2 flex flex-col justify-evenly gap-6 items-center rounded-4xl" style= {{
                    backgroundImage: `
                                linear-gradient(
                                        330deg,
                                     ${datosAuto.enfasisColor}00 0%,
                                    ${datosAuto.enfasisColor}12 20%,
                                    ${datosAuto.enfasisColor}30 35%,
                                    ${datosAuto.enfasisColor}22 45%,
                                    ${datosAuto.enfasisColor}00 60%,
                                    transparent 75%
                                ),
                                linear-gradient(
                                    150deg,
                                     ${datosAuto.secondColor}00 0%,
                                    ${datosAuto.secondColor}11 20%,
                                    ${datosAuto.secondColor}20 35%,
                                    ${datosAuto.secondColor}12 45%,
                                    ${datosAuto.secondColor}00 60%,
                                    transparent 75%
                                ),
                                linear-gradient(
                                to left,
                                #1a1a1a00,
                                #1a1a1a00

                                )
                            `,

                            backgroundSize: `
                                100% 100%,
                                100% 100%,
                                65%
                            `,

                            backgroundRepeat: `
                                no-repeat,
                                no-repeat,
                                no-repeat
                            `,

                            backgroundPosition: `
                                center,
                                center,
                                right center
                            `,

                            height: "40rem"
                        
            }}>
            <div className="informacion" >
                <div className="descTitle">
                <h3 className="text-3xl title">{datosAuto.titulo}</h3>
                <p>{datosAuto.descripcion}</p>
                </div>
            <img className="imgAuto" src={datosAuto.img} alt="" />

                <div className="flex flex-row items-center gap-5">
                    {
                        datosAuto.datos.map((caracteristicas) =>(
                            <>
                                <div  className="cardEspecif">
                                    {
                                        
                                        caracteristicas.type === "transmision" ?
                                        <>
                                        <img  src={iconoTransmision}></img>
                                        </> 
                                        :
                                        caracteristicas.type === "traccion" ? 
                                        <>
                                        <img src={iconoTraccion}></img>
                                        </>
                                        :
                                        <img src={velocidad}></img>

                                        
                                    }
                                    <p>{caracteristicas.parrafo}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
        
        }
        </section>

        </>
    )
}
export default CarExpoCard