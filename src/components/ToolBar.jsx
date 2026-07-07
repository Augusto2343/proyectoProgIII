import {Car} from "lucide-react";
import { useState } from "react";
import CardToolBar from "./CardToolBar";
 
const Toolbar = () =>{

    return(
        <>
        <section className="toolbar w-screen flex flex-row items-center">
        <CardToolBar texto="Autos que compiten el WRC" link="/autos" icono="Car"></CardToolBar>
        <CardToolBar texto="Resultados" link="/autos" icono="Trophy"></CardToolBar>
        <CardToolBar texto="Juegos del WRC" link="/autos" icono="Gamepad2"></CardToolBar>
        <CardToolBar texto="Modelo 3D del Yaris 2022" link="/autos" icono="Rotate3D"></CardToolBar>


        </section>

        </>
    )
}
export default Toolbar;