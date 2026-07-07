import wrcLogo from "/logoWRC.png"
const AcercaRally = () =>{

    return (
    <>
    <section className="acercaRallySect flex flex-row w-screen items-center justify-center gap-50">
        <div className=" flex flex-col items-center gap-5">
        <h3 className="text-3xl">
             ¿Qué es el Rally?
        </h3>
        <p className="max-w-120 text-center">
            El Rally es una competencia en la que se pone a prueba tanto al auto como a la tripulación poniendolos a ambos en pistas, poco amigables y cambiantes, con muchas curvas cerradas, saltos y adrenalina. Esto lo hace una de las disciplinas más queridas por todos aquellos fans del motorsport.
            Actualmente existen 4 campeonatos mundiales dirigidos por la FIA: WRC, WRC2, WRC3 y FIA JUNIOR WRC;
        </p>
            <a href="https://www.wrc.com/en/misc/about-wrc"> Saber más</a>
        </div>
        <img src={wrcLogo} alt="" className="w-70"/>
    </section>
    </>
    )
}   
export default AcercaRally;