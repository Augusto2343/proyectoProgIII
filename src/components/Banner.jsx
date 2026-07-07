import imgBann from "/imgBannHom.avif"
const Banner = () =>{
    return(
        <>
        <div className="w-screen bannContainer" style={{backgroundImage:`url(${imgBann})`}}>
        <div className="bannerContent w-screen">
 
        </div>
        <div className="textBanContent max-w-200">
        <h2 className="titleFont text-gray-200 text-3xl">Bienvenidos a RallyHub</h2>

        <h3 className="titleFont text-gray-200 text-xl"> Donde la velocidad se convierte en historia</h3>

        </div>
        </div>
        </>
    )   
}
export default Banner;