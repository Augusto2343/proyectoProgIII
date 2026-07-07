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
        <CategoriasCard img={fordWRT} title="Ford M-sport WRT" paragraph={""}/>
        <CategoriasCard img={hyundaiWRT} imgSize="60%" title="Hyundai Shell Mobis WRT" paragraph={"Es una de las competencias más exigentes del motorsport en el cual el ganar no solo depende del auto si no también del piloto"}/>
        <CategoriasCard img={toyotaGRWRT} imgSize="74%" title="Toyota Gazoo Racing WRT" paragraph={"Es una de las competencias más exigentes del motorsport en el cual el ganar no solo depende del auto si no también del piloto"}/>
            </div>

        </section>
        </>
    )
}
export default Categorias;