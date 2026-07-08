import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BtnVolverArriba = () =>{
    const [hideBtn,setHideBtn] = useState(true);
    useEffect(() =>{
        const toggleHideBtn = (e) =>{
            const windowScroll = window.scrollY;
            if(windowScroll === 0) {
                setHideBtn(true);
            }
            else{
                setHideBtn(false);
            }
        }
        window.addEventListener("scroll", toggleHideBtn);
    })
    return(
        <>
        <a href="#" className={`btnVolverArriba ${hideBtn ? "hideBtn" : ""}`}><ArrowUp size={35} ></ArrowUp></a>
        </>
    )
}
export default BtnVolverArriba;