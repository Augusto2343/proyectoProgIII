import imgBann from "/imgBannHom.avif"
import "./Banner.css"
import { Calendar, Trophy } from "lucide-react"
const Banner = ({contentBanner}) =>{
    return(
        <>
        {
            !contentBanner ?
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
            :
            <div className=" containerBanner w-screen mb-10 grid grid-cols-2" style={{
                    backgroundImage: `
                                radial-gradient(
                                    circle at 90% 0%,
                                    rgba(235, 10, 29, 0.4) 0%,
                                    rgba(235, 10, 30, 0.25) 25%,
                                    rgba(235, 10, 30, 0.08) 45%,
                                    transparent 65%
                                ),
                                linear-gradient(
                                    90deg,
                                    #080808 0%,
                                    #080808 20%,
                                    rgba(8, 8, 8, 0.98) 35%,
                                    rgba(8, 8, 8, 0.80) 45%,
                                    rgba(8, 8, 8, 0.30) 60%,
                                    transparent 75%
                                ),
                                url(${contentBanner.img})
                            `,

                            backgroundSize: `
                                100% 100%,
                                100% 100%,
                                65%
                            `,

                            backgroundRepeat: `
                                no-repeat,
                                no-repeat,
                                no-repeat
                            `,

                            backgroundPosition: `
                                center,
                                center,
                                right center
                            `,

                            height: "40rem"
                        }}>
                <div className="bannerText pt-34">
                        <h2 className="bannerTitle text-5xl bold flex flex-col">
                            {contentBanner.title}
                            <span style={{"color":`${contentBanner.enfasisColor}`}}>
                                WRT
                            </span>
                        </h2>
                        <p>
                            {contentBanner.paragraph}
                        </p>
                        <div className="cards">
                                {
                                    contentBanner.cards.map((card) =>(
                                            <>
                                                <div className="cardBanner">
                                                        <div>
                                                        {
                                                         card.type === "trophy" ?
                                                         <Trophy color={`${contentBanner.enfasisColor}`}/>
                                                        :  card.type === "calendar" ?
                                                        <>
                                                            <Calendar color={`${contentBanner.enfasisColor}`}/>
                                                        </>
                                                        :
                                                        <></>
                                                        }
                                                        </div>
                                                        <div>
                                                            <span>
                                                                {card.important}

                                                            </span>
                                                            <p>
                                                                {card.text}
                                                            </p>
                                                        </div>
                                                </div>
                                            </>
                                    ))
                                }
                        </div>
                </div>
                {/* <div className="imgBanner" style={{backgroundImage:`url(${contentBanner.img})`}} >
                                <img src={contentBanner.img} className="bannerImg" alt="" />
                </div> */}
            </div>
        }

        </>
    )
}
export default Banner;