import { Car, Gamepad2, Rotate3D, Trophy } from "lucide-react";
import { useState } from "react";

const CardToolBar = ({texto,link,icono}) =>{
    const [textActive, setTextActive] = useState(false);
    const [iconActive, setIconActive] = useState(true);

    return(
        <>
            <div onMouseEnter={() =>{setTextActive(true);setIconActive(false)}} onMouseLeave={() =>{setTextActive(false);setIconActive(true)}} className="tarjetaTool relative flex flex-col items-center">
                {
                    icono === "Car"?
                    <Car className={`iconToolCard ${iconActive ? "active":""}`}></Car>
                    :
                    icono === "Trophy"?
                    <Trophy className={`iconToolCard ${iconActive ? "active":""}`}></Trophy>:
                    icono === "Rotate3D"?
                    <Rotate3D className={`iconToolCard ${iconActive ? "active":""}`}></Rotate3D>:
                    <Gamepad2 className={`iconToolCard ${iconActive ? "active":""}`}></Gamepad2>
                    
                    

                }
                <h3 className={`textCard ${textActive ? "active":""}`} >{texto}</h3>
            </div>
        </>
    )
}
export default CardToolBar;