import Banner from "../banner/Banner";
import CarExpoCard from "../carExpoCard/CarExpoCard";
import PilotosCard from "../pilotos/PilotosCard";
import imgBanner from "/bannerHyundai.avif"
import hyundaiCar from "/hyundaiCar.png"
const HyundaiEsc = () =>{
    const bannerContent = {
        title:"Hyundai Shell Mobis",
        enfasisColor:"#3668aa",
        bannerPos:"100% 70%",
        bannerSize:`
        cover `,
        img:imgBanner,
        paragraph:"Hyundai Shell Mobis World Rally Team es el equipo oficial de Hyundai Motorsport en el Campeonato Mundial de Rally. Con sede en Alemania, compite con el Hyundai i20 N Rally1 y se ha convertido en uno de los principales contendientes del campeonato, destacándose por su desarrollo tecnológico, competitividad y constantes disputas por los títulos de pilotos y constructores.",
        cards:[
            {
                type:"trophy",
                important:"2",
                text:"Titulos de constructor."
            },
            
            {
                type:"trophy",
                important:"1",
                text:"Titulos de pilotos."
            },
            
            {
                type:"calendar",
                important:"2014",
                text:"Año de debut."
            }
        ]
    }
    const carCard = {
        img: hyundaiCar,
        enfasisColor:"#3668aa",
        secondColor:"#ffffff",
        titulo:"Hyundai i20 N Rally1" ,
        descripcion:"El Hyundai i20 N Rally1 es el vehículo de competición desarrollado por Hyundai Motorsport para el Campeonato Mundial de Rally. Basado en el concepto del i20 N, cuenta con tracción integral, propulsión híbrida y una construcción específicamente diseñada para afrontar superficies como tierra, asfalto, nieve y hielo. Su desarrollo permitió a Hyundai mantenerse como uno de los principales competidores de la categoría Rally1.",
        datos:[
            {
            type:"Velocidad",
            parrafo:"Potencia 541 HP "
            },
            {
            type:"transmision",
            parrafo:"Consta de una caja secuencial de 5 velocidades."
            },
            
            {
            type:"traccion",
            parrafo:"Tracción 4x4 AWD"
            },
        ]
        
    }
    const pilots =[ 
        {
            name: "Adrien Fourmaux",
            team: "Hyundai Shell Mobis WRT",
            country: "Francia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/uighmsmogczpfvjiqdlw/forumaux-2026-1x1",
            podiums: 11,
            championships: 0,
            enfasisColor:"#3668AA"
        },
                        {
            name: "Esapekka Lappi",
            team: "Hyundai Shell Mobis WRT",
            country: "Finlandia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/2/13/vmmvnbwebut82tzr2p78/lappi-2026-1x1",
            podiums: 15,
            championships: 0,
            enfasisColor:"#3668AA"
        },
                        {
            name: "Thierry Neuville",
            team: "Hyundai Shell Mobis WRT",
            country: "Bélgica",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/sgrmplrhwajcgzriq3op/neuville-2026-1x1",
            podiums: 76,
            championships: 1,
            enfasisColor:"#3668AA"
        },
                        {
            name: "Hayden Paddon",
            team: "Hyundai Shell Mobis WRT",
            country: "Nueva Zelanda",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/ls7yna9ar9foqknultea/paddon-2026-1x1",
            podiums: 9,
            championships: 0,
            enfasisColor:"#3668AA"
        },
                        {
            name: "Dani Sordo",
            team: "Hyundai Shell Mobis WRT",
            country: "España",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/vxvmtgsa3eeso00vxyka/sordo-2026-h-m-s-g-1x1",
            podiums: 58,
            championships: 0,
            enfasisColor:"#3668AA"
        },
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
export default HyundaiEsc;