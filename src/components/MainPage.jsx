import Banner from "./banner/Banner.jsx";
import Toolbar from "./ToolBar.jsx";
import AcercaRally from "./AcercaRally.jsx";
import Categorias from "./Categorias.jsx";
import UltimasNoticias from "./Noticias/UltimasNoticias.jsx";
import { useEffect, useState } from "react";
import Loading from "./Loader/Loading.jsx";
const MainPage = () =>{
    const [loader,setLoader] = useState(false);
    useEffect(() =>{
        const useLoader = () =>{
            setLoader(true);
        }
        window.addEventListener("DOMContentLoaded",useLoader);

    return ()=>{
        window.removeEventListener("DOMContentLoaded",useLoader);
    }
    })
    return(
        <>
        <Loading countdown={true}></Loading>
        <Banner></Banner>
        <Toolbar></Toolbar>
        <AcercaRally></AcercaRally>
        <Categorias/>
        </>
    )
}
export default MainPage;