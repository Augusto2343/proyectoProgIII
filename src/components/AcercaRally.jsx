import { useEffect, useRef, useState } from "react";
import wrcLogo from "/logoWRC.png"
const AcercaRally = () =>{


const paragraphs = [

    "¿Que es el World Rally Car?",

    "Desde 1973 el Campeonato Mundial de Rally ha llevado a pilotos, copilotos y fabricantes a recorrer algunos de los caminos más extremos del planeta. A diferencia de otras categorías del automovilismo, el WRC no se desarrolla en circuitos tradicionales, sino en tramos cerrados al tránsito donde cada curva, cada salto y cada superficie representan un nuevo desafío. A lo largo de su historia, el campeonato se ha convertido en uno de los máximos exponentes de velocidad, resistencia y precisión dentro del deporte motor.",

    "Cada rally presenta un desafío completamente distinto. Tierra, asfalto, nieve, barro y hielo obligan a pilotos e ingenieros a adaptar constantemente la configuración de los vehículos, la estrategia y el ritmo de carrera. Las condiciones pueden cambiar en cuestión de minutos, haciendo que una elección de neumáticos, una nota del copiloto o una pequeña diferencia de velocidad sean suficientes para ganar o perder valiosos segundos. En este entorno, la capacidad de adaptarse es tan importante como la velocidad pura.",

    "Más que una carrera, el WRC es una demostración de precisión, valentía e innovación tecnológica, donde cada segundo puede cambiar la historia. Detrás de cada vehículo existe un enorme trabajo de ingeniería, preparación y coordinación entre pilotos, copilotos y equipos. Los fabricantes utilizan el campeonato como un laboratorio para desarrollar nuevas tecnologías, mientras los competidores llevan sus máquinas y sus propias capacidades al límite. Todo esto convierte a cada rally en una batalla contra el reloj, el terreno y los propios límites humanos."
];

    const sectionRef = useRef(null);

    const [currentParagraph, setCurrentParagraph] = useState(0);

    const [visibleWords, setVisibleWords] = useState(0);

    const [imgOpacity, setImgOpacity] = useState(0);

    const [transition, setTransition] = useState(false);

    const words = paragraphs[currentParagraph].split(" ");

useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current || transition) return;

        const rect = sectionRef.current.getBoundingClientRect();

        const progress = Math.min(
            Math.max(-rect.top / (rect.height - window.innerHeight), 0),
            1
        );

        const total = paragraphs.length;
        const section = 1 / total;

        // A qué tercio corresponde el scroll actual
        const paragraphIndex = Math.min(
            Math.floor(progress / section),
            total - 1
        );

        // Progreso DENTRO de ese tercio (0 a 1)
        const localProgress = Math.min(
            Math.max((progress - paragraphIndex * section) / section, 0),
            1
        );

        setImgOpacity(progress);

        // Si cambiamos de tercio, disparamos la transición
        if (paragraphIndex !== currentParagraph) {
            setTransition(true);

            setTimeout(() => {
                setCurrentParagraph(paragraphIndex);

                const wordsInNewParagraph =
                    paragraphs[paragraphIndex].split(" ").length;

                // Recalculamos las palabras visibles para el nuevo párrafo
                setVisibleWords(
                    Math.floor(localProgress * wordsInNewParagraph)
                );

                setTransition(false);
            }, 700);
        } else {
            // Mismo párrafo: solo actualizamos las palabras visibles
            setVisibleWords(Math.floor(localProgress * words.length));
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [currentParagraph, transition, words.length, paragraphs]);
    return (

        <>


            <section
                className="history"
                style={{height:`${200*paragraphs.length}vh`}}
                ref={sectionRef}
            >

                <div className="sticky" style={{backgroundImage:`radial-gradient(
                        circle at ${imgOpacity*100}90% ${imgOpacity*100}%,
                        rgba(235, 10, 30, 0.45) 0%,
                        rgba(235, 10, 30, 0.20) 25%,
                        transparent ${imgOpacity*100 > 30 ? imgOpacity*100  : 30}%
                    ),
                    linear-gradient(
                        90deg,
                        #08071b 0%,
                        #00000a 20%,
                        rgba(8, 8, 8, 0.98) 35%,
                        rgba(8, 8, 8, 0.80) 45%,
                        rgba(8, 8, 8, 0.30) 60%,
                        transparent ${imgOpacity*100 > 30 ? imgOpacity*100  : 30}%
                    )`,
                    backgroundSize:"cover"}}>

                    <div className="containerTextImgScroll">
                    <div
                        className={`story ${transition ? "exit" : "enter"}`}
                    >

                        {words.map((word, index) => (

                            <span
                                key={index}
                                className={
                                    index <= visibleWords
                                        ? "visible"
                                        : ""
                                }
                            >

                                {word}{" "}

                            </span>

                        ))}

                    </div>


                </div>
                </div>

            </section>

        </>

    );


}  
export default AcercaRally;