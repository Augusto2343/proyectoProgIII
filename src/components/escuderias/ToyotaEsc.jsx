import Banner from "../banner/Banner";
import imgBanner from "/bannerTGRWRT.jpg"
const ToyotaEsc = () =>{
    const bannerContent = {
        title:"Toyota Gazoo Racing",
        enfasisColor:"#EB0A1E",
        img:imgBanner,
        paragraph:"Toyota Gazoo Racing World Rally Team (TGR WRT) es el equipo oficial de Toyota en el Campeonato Mundial de Rally. Con sede en finlandia compite con el Toyota GR Yaris Rally1 y es considerado uno de los equipos más exitosos de la era moderna del WRC.",
        cards:[
            {
                type:"trophy",
                important:"6",
                text:"Titulos de constructor."
            },
            
            {
                type:"trophy",
                important:"6",
                text:"Titulos de pilotos."
            },
            
            {
                type:"calendar",
                important:"2017",
                text:"Año de debut."
            }
        ]
    }
    return(
        <>
        <Banner contentBanner={bannerContent} ></Banner>
        </>
    )
}
export default ToyotaEsc;