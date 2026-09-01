import { Link } from "react-router-dom";
import logoPag from "/LogoRallyHub.png"
import { useEffect, useRef, useState } from "react";
const Navbar = () =>{
    const [isOpened,setIsOpened] = useState(false);
    const [headerOpened,setHeaderOpened] = useState(true);
    const [windowWidth,setWindowWidth] = useState();
    const [isHeaderOpened, setIsHeaderOpened] = useState(false); 
    const [escuderiasOpened, setEscuderiasOpened] = useState(false);
    const lastScroll = useRef(0);
    useEffect(() =>{
        const toggleHeaderOpened = (e) =>{
                console.log(e);
                const current = window.scrollY;
                if(current === 0){
                    setHeaderOpened(true);
                }
                if(current > lastScroll.current){
                    setHeaderOpened(false);
                }
                else if(current < lastScroll.current){
                    setHeaderOpened(true);
                }
            lastScroll.current = current;
        }
        const getScreenWidth = ()=>{
            const screenWidth = window.innerWidth;
            setWindowWidth(screenWidth);
        }
        window.addEventListener("resize",getScreenWidth);
        window.addEventListener("scroll",toggleHeaderOpened);

        getScreenWidth();

        return () =>{
            window.removeEventListener("scroll",toggleHeaderOpened);
            window.removeEventListener("resize",getScreenWidth);
        }
    })
    return(
        <>
        {
            windowWidth > 570?
        <div className={`navbarHeader ${headerOpened ? "":"ocultarHeader"}`}>
                    <Link to="/">
                    <img src={logoPag} className="logoPagHeader" />
                    </Link>
                    <div className="navbar">
                        <div className="menuWBtn">
                        <button onClick={(e) => setIsOpened(!isOpened)}>Escuderías</button>
                            <div className={`menuEscuderias ${isOpened ? "": "hideMenu"}`}>                
                                <Link to={"/fordwrt"} className="headerLink">Ford M-sport</Link>
                                <Link to={"/hyundaiwrt"} className="headerLink">Hyndai WRT</Link>
                                <Link to={"/tgrwrt"} className="headerLink">TGR WRT</Link>
                            </div>
                        </div>
                        
                        <Link className="headerLink">Posiciones del último Rally</Link>
                        <Link to="/contacto" className="headerLink">Contacto</Link>

                    </div>
                </div>
                :
                <>

                <header className="w-full navbarHeader text-white">
                     {/* HEADER PRINCIPAL */} 
                <div className=" flex flex-col  items-center justify-between px-5 py-4">
                    <div className="flex flex-row justify-evenly w-screen">
                     {/* LOGO */} 
                <Link to="/" className="shrink-0"> 
                <img src="/LogoRallyHub.png" alt="RallyHub" className="h-10 w-auto" />
                </Link>
                 {/* BOTÓN HAMBURGUESA - SOLO MOBILE */} <button onClick={() => setIsOpened(!isOpened) }className="flex flex-col gap-1.5 md:hidden" aria-label="Abrir menú" > 
                <span className="h-0.5 w-7 bg-white"></span> <span className="h-0.5 w-7 bg-white"></span> <span className="h-0.5 w-7 bg-white"></span>
                 </button>
                 </div>
                  {/* MENÚ DESKTOP */}
 {/* MENÚ MOBILE */} <nav className={` overflow-hidden border-t border-zinc-800 transition-all duration-300 md:hidden ${isOpened ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" } `} >
     <div className="flex flex-col px-5 py-3"> {/* ESCUDERÍAS MOBILE */} <button onClick={() => setEscuderiasOpened(!escuderiasOpened) } className="flex w-full items-center justify-between py-4 text-left" >
         <span>Escuderías</span> <span className={`transition-transform duration-300 ${ escuderiasOpened ? "rotate-180" : "" }`} > ▼ </span> </button> {/* SUBMENÚ ESCUDERÍAS */} 
         <div className={` overflow-hidden pl-4 transition-all duration-300 ${escuderiasOpened ? "max-h-60 opacity-100" : "max-h-0 opacity-0" } `} > <Link to="/fordwrt" className="block py-3 text-zinc-400 hover:text-white" > Ford M-Sport </Link> 
         <Link to="/hyundaiwrt" className="block py-3 text-zinc-400 hover:text-white" > Hyundai WRT </Link> <Link to="/tgrwrt" className="block py-3 text-zinc-400 hover:text-white" > TGR WRT </Link> </div> {/* LINKS PRINCIPALES */} 
         <Link to="/posiciones" onClick={() => setIsOpened(false)} className="border-t border-zinc-800 py-4 hover:text-red-500" > Posiciones del último Rally </Link> <Link to="/contacto" onClick={() => setIsOpened(false)} className="border-t border-zinc-800 py-4 hover:text-red-500" >
          Contacto </Link> </div> </nav> </div> </header>



                </>
        }
        
        </>
    )
}
export default Navbar;