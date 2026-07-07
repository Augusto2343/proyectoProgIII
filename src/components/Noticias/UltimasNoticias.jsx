import NoticiasCard from "./NoticiasCard";
import News1 from "/news1.avif";
import News2 from "/news2.jpeg";
const UltimasNoticias = () =>{
    return(
        <>
        <section className="flex flex-col p-10 gap-30 ">
            <h3 className="text-3xl text-gray-200">Últimas Noticias.</h3>
        <NoticiasCard 
        img={News1} 
        description="doḱ sfój sójf seófsnfíushfsíufnseiufnsíudnfiś dfísuenfsi fsiefj sdifnsejf sd"
        title="Titulo :D"
        ></NoticiasCard>
        <NoticiasCard 
        img={News2} 
        description="doḱ sfój sójf seófsnfíushfsíufnseiufnsíudnfiś dfísuenfsi fsiefj sdifnsejf sd"
        title="Titulo :D"
        ></NoticiasCard>
        </section>
        </>
    )
}
export default UltimasNoticias;