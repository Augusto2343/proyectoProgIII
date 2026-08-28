import { Link } from "react-router-dom";
import logoPag from "/LogoRallyHub.png"
import { useEffect, useRef, useState } from "react";
const Navbar = () =>{
    const [isOpened,setIsOpened] = useState(false);
    const [headerOpened,setHeaderOpened] = useState(true);
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

        window.addEventListener("scroll",toggleHeaderOpened);
        return () =>{
            window.removeEventListener("scroll",toggleHeaderOpened);
        }
    })
    return(
        <>
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
        </>
    )
}
export default Navbar;