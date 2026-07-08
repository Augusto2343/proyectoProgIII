import CategoriasCard from "./CategoriasCard";
import toyotaGRWRT from "/ToyotaGRWRT.png";
import fordWRT from "/M-Sport_Ford_WRT.webp";
import hyundaiWRT from "/HyundaiWRT.png";
const Categorias = () =>{
    return(
        <>
        <section className="categorias w-screen mt-2 mb-2 ">
            <h3 className="text-3xl mb-2">Escuderías</h3>
        <div className="categoriasCards">
        <CategoriasCard img={fordWRT} title="Ford M-sport WRT" paragraph={"M-Sport Ford World Rally Team representa a Ford en el Campeonato Mundial de Rally. Con una larga trayectoria en la categoría, compite con el Ford Puma Rally1, destacándose por su espíritu competitivo, innovación y desarrollo constante. A lo largo de su historia ha conseguido múltiples victorias y campeonatos, consolidándose como uno de los equipos más emblemáticos del WRC."}/>
        <CategoriasCard img={hyundaiWRT} imgSize="100%" title="Hyundai Shell Mobis WRT" paragraph={"Hyundai Shell Mobis World Rally Team es el equipo oficial de Hyundai Motorsport en el WRC. Desde su debut en 2014, ha demostrado un gran crecimiento hasta convertirse en uno de los principales protagonistas del campeonato. Compite con el Hyundai i20 N Rally1 y es reconocido por su tecnología, confiabilidad y constantes luchas por el título de constructores."}/>
        <CategoriasCard img={toyotaGRWRT} imgSize="120%" title="Toyota Gazoo Racing WRT" paragraph={"Toyota Gazoo Racing World Rally Team (TGR WRT) es el equipo oficial de Toyota en el Campeonato Mundial de Rally. Con sede en Finlandia, compite con el Toyota GR Yaris Rally1 y es considerado uno de los equipos más exitosos de la era moderna del WRC. Gracias a su rendimiento, innovación y consistencia, ha conquistado múltiples campeonatos de pilotos y constructores en los últimos años."}/>
            </div>

        </section>
        </>
    )
}
export default Categorias;