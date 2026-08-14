import { useEffect, useState } from "react";
import "./Loader.css"
const Loading = ({countdown}) =>{
const [lights, setLights] = useState([false, false, false]);
const [readyToContinue,setReadyToContinue] = useState(false);
const [finishAnimation,setFinishAnimation] = useState(false);
const [dissapearLoader,setDissapearLoader] = useState(false);
const prepararTrLight = async () => {
    for (let i = 0; i < 3; i++) {

        await new Promise(resolve => setTimeout(resolve, 500));

        setLights(prev => {
            const nuevas = [...prev];
            nuevas[i] = true;
            return nuevas;
        });
    }
        await new Promise(resolve => setTimeout(resolve, 700));
    setReadyToContinue(true);
        await new Promise(resolve => setTimeout(resolve, 700));
    setFinishAnimation(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("descaparecer Loader");
    
    setDissapearLoader(true);
}
useEffect(() => {
    if (countdown) {
        prepararTrLight();
    }
}, [countdown]);
 return(
    <>
        <div className={`loader-container ${dissapearLoader ? "hideLoader": finishAnimation ? "":"launch" }`}>
            <div className="container_trafficLight">

            <div className={`traffic-light`}>
                <span className={`light ${lights[0]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[1]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[2]? readyToContinue ? finishAnimation ? "finish" : "ready" : "active" : ""}`}></span>
            </div>
            <div className={`traffic-light`}>
                <span className={`light ${lights[0]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[1]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[2]? readyToContinue ? finishAnimation ? "finish" : "ready" : "active" : ""}`}></span>
            </div>
                        <div className={`traffic-light`}>
                <span className={`light ${lights[0]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[1]? readyToContinue ? "ready" : "active" : ""}`}></span>
                <span className={`light ${lights[2]? readyToContinue ? finishAnimation ? "finish" : "ready" : "active" : ""}`}></span>
            </div>
            </div>

            <h2>{
                countdown ?
                readyToContinue ?
                finishAnimation ? "Go!" :
                "Set"
                :
                "Ready"
                :
                ""
                }</h2>
        </div>

    </>

 )
}
export default Loading;