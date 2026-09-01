import Banner from "../banner/Banner";
import CarExpoCard from "../carExpoCard/CarExpoCard";
import PilotosCard from "../pilotos/PilotosCard";
import imgBanner from "/bannerTGRWRT.jpg"
import imgCar from "/yaris-car.png"
const ToyotaEsc = () =>{
    const bannerContent = {
        title:"Toyota Gazoo Racing",
        bannerPos:"100% 20%",
        bannerClass:"tgrwrt",
        bannerSize:`
        100% ,
        100% ,
        65% `,
        enfasisColor:"#EB0A1E",
        img:imgBanner,
        paragraph:"Toyota Gazoo Racing World Rally Team (TGR WRT) es el equipo oficial de Toyota en el Campeonato Mundial de Rally. Con sede en Finlandia, compite con el Toyota GR Yaris Rally1 y se ha consolidado como uno de los equipos más exitosos de la era moderna del WRC, destacándose por su rendimiento, innovación tecnológica y múltiples títulos de pilotos y constructores.",
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
    const carCard = {
        img: imgCar,
        enfasisColor:"#EB0A1E",
        secondColor:"#ffffff",
        titulo:"Toyota Yaris GR Rally1" ,
        descripcion:"El Toyota GR Yaris Rally1 es el vehículo desarrollado por Toyota Gazoo Racing para competir en el Campeonato Mundial de Rally. Basado en el compacto GR Yaris de producción, incorpora un sistema de propulsión híbrido, tracción integral y una preparación específica para soportar las exigencias de los distintos terrenos del WRC. Se caracteriza por su gran rendimiento, precisión y capacidad de adaptación, siendo uno de los vehículos más competitivos de la categoría Rally1.",
        datos:[
            {
            type:"Velocidad",
            parrafo:"Potencia 380 HP "
            },
            {
            type:"transmision",
            parrafo:"Consta de una caja secuencial de 6 velocidades Xtrac."
            },
            
            {
            type:"traccion",
            parrafo:"Tracción 4x4 AWD"
            },
        ]
        
    }
    const pilots =[ 
        {
            name: "Lorenzo Bertelli",
            team: "Toyota Gazoo Racing WRT",
            country: "Italia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/2/12/ihgelolho6dqko3za4mk/bertelli-2026-1x1",
            podiums: 0,
            championships: 0,
            enfasisColor:"#EB0A1E"
        },
                        {
            name: "Takamoto Katsuta",
            team: "Toyota Gazoo Racing WRT",
            country: "Japon",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/yfkk5xvrbyiriyegyivo/katsuta-2026-1x1",
            podiums: 11,
            championships: 0,
            enfasisColor:"#EB0A1E"
        },
                        {
            name: "Sébastian Ogier",
            team: "Toyota Gazoo Racing WRT",
            country: "Francia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/auongtaedq4xijhsjgtb/ogier-2026-1x1",
            podiums: 119,
            championships: 9,
            enfasisColor:"#EB0A1E"
        },
                        {
            name: "Sami Pajari",
            team: "Toyota Gazoo Racing WRT",
            country: "Finlandia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/fufbk68zkgdpewhpxzfl/pajari-2026-1x1",
            podiums: 30,
            championships: 2,
            enfasisColor:"#EB0A1E"
        },
                        {
            name: "Oliver Solberg",
            team: "Toyota Gazoo Racing WRT",
            country: "Suecia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/4/9/k03kfjsryzp7iezyhpyq/solberg-2026-1x1",
            podiums: 2,
            championships: 0,
            enfasisColor:"#EB0A1E"
        },
        {
            name: "Elfyn Evans",
            team: "Toyota Gazoo Racing WRT",
            country: "Reino Unido",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/txu5rsxg14ujy0mpw2y0/evans-2026-1x1",
            podiums: 48,
            championships: 0,
            enfasisColor:"#EB0A1E"
        }
];
    return(
        <>
        <Banner contentBanner={bannerContent} ></Banner>
        <CarExpoCard datosAuto={carCard} ></CarExpoCard>
        <section className="pilotsSection mb-10">
        <h2 className="text-3xl tituloSeccion">
            Pilotos
        </h2>
    <div className="pilotos flex flex-row flex-wrap items-center justify-evenly gap-7">
        {
            pilots?.map((pilot) =>(
            <PilotosCard info={pilot}></PilotosCard>

            ))
        }
        </div>

        </section>
        
        </>
    )
}
export default ToyotaEsc;