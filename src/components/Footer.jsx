import logoRH from "/LogoRallyHub.png"
import {Link} from "react-router-dom";
const Footer =  () =>{

   return(
    <>
    <footer>
        <section className="footerSection">
            <div className="sectFooter identitySect">
                <img src={logoRH} className="imgIdentityFt" />
                <nav className="navRedes">
                    
                </nav>
            </div>
            <div className="sectFooter">
                <h3 className="titleSection">Mapa del sitio</h3>
                <nav className="navFooter">
                    <Link to="" className="footerLink">Escuderia Ford</Link>
                    <Link to="" className="footerLink">Escudería TGR-WRT</Link>
                    <Link to="" className="footerLink">Escudería Hyundai SMWRT</Link>
                </nav>
            </div>
        </section>
        <h5>RallyHub derechos reservados 2026</h5>
    </footer>  
    </>
)
}
export default Footer;