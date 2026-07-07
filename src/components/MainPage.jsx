import Banner from "./Banner.jsx";
import Toolbar from "./ToolBar.jsx";
import AcercaRally from "./AcercaRally.jsx";
import Categorias from "./Categorias.jsx";
import UltimasNoticias from "./Noticias/UltimasNoticias.jsx";
const MainPage = () =>{
    return(
        <>
        <Banner></Banner>
        <Toolbar></Toolbar>
        <AcercaRally></AcercaRally>
        <Categorias/>
        <UltimasNoticias/>
        </>
    )
}
export default MainPage;