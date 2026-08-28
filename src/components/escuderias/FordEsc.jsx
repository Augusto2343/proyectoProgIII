import Banner from "../banner/Banner";
import CarExpoCard from "../carExpoCard/CarExpoCard";
import PilotosCard from "../pilotos/PilotosCard";
import imgBanner from "/bannerTGRWRT.jpg"
import fordCar from "/fordCar.png"

const FordEsc = () =>{
    const bannerContent = {
        title:"M-Sport Ford",
        enfasisColor:"#0D38AB",
        bannerPos:"100% 40%",
        bannerSize:`
        cover `,
        img:"https://soymotor.com/sites/default/files/2024-06/puma-no-hibrido-polonia-soymotor.jpg",
        paragraph:"M-Sport Ford World Rally Team representa oficialmente a Ford en el Campeonato Mundial de Rally y cuenta con una extensa trayectoria dentro de la categoría. Actualmente compite con el Ford Puma Rally1, destacándose por su experiencia, capacidad de desarrollo y competitividad, además de haber conseguido importantes victorias y campeonatos a lo largo de su historia en el WRC.",
        cards:[
            {
                type:"trophy",
                important:"3",
                text:"Titulos de constructor."
            },
            
            {
                type:"trophy",
                important:"2",
                text:"Titulos de pilotos."
            },
            
            {
                type:"calendar",
                important:"1997",
                text:"Año de debut."
            }
        ]
    }
    const carCard = {
        img: fordCar,
        enfasisColor:"#0D38AB",
        secondColor:"#ffffff",
        titulo:"Ford Puma Rally1" ,
        descripcion:"El Ford Puma Rally1 es el vehículo desarrollado por M-Sport en colaboración con Ford para competir en la categoría Rally1 del Campeonato Mundial de Rally. Basado en el concepto del Ford Puma, combina un motor turboalimentado con un sistema híbrido y tracción integral, además de incorporar una carrocería y aerodinámica diseñadas específicamente para el rally. Destaca por su resistencia, estabilidad y capacidad para afrontar las condiciones más exigentes del campeonato.",
        datos:[
            {
            type:"Velocidad",
            parrafo:"Potencia 514 HP "
            },
            {
            type:"transmision",
            parrafo:"Consta de una caja secuencial de 5 velocidades Xtrac."
            },
            
            {
            type:"traccion",
            parrafo:"Tracción 4x4 AWD"
            },
        ]
        
    }
    const pilots =[ 
        {
            name: "Jon Armstrong",
            team: "M-Sport Ford WRT",
            country: "Irlanda",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/xcr0mzziktdmurgu0jck/armstrong-2026-1x1",
            podiums: 0,
            championships: 0,
            enfasisColor:"#0D38AB"
        },
                        {
            name: "Josh McErlean",
            team: "M-Sport Ford WRT",
            country: "Irlanda",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/op8tgfeye5genban43zm/mcerlean-2026",
            podiums: 0,
            championships: 0,
            enfasisColor:"#0D38AB"
        },
                        {
            name: "Grégoire Munster",
            team: "M-Sport Ford WRT",
            country: "Luxemburgo",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/1/19/mu6p8owrpkzxgl25cj3t/munster-2026-1x1",
            podiums: 0,
            championships: 0,
            enfasisColor:"#0D38AB"
        },
                        {
            name: "Jourdan Serderidis",
            team: "M-Sport Ford WRT",
            country: "Grecia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/6/25/txd40faklxbgqplvtfxu/wrc-gre-26-j-serderidis-1x1",
            podiums: 0,
            championships: 0,
            enfasisColor:"#0D38AB"
        },
                        {
            name: `Mārtiņš Sesks`,
            team: "M-Sport Ford WRT",
            country: "Letonia",
            image: "https://img.redbull.com/images/c_fill,g_auto,w_192,h_192/q_auto,f_auto/redbullcom/2026/6/25/cr0cmre3g7amduu1apky/wrc-gre-26-m-sesks-001",
            podiums: 0,
            championships: 0,
            enfasisColor:"#0D38AB"
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
export default FordEsc;