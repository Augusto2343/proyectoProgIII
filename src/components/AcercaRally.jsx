import { useEffect, useRef, useState } from "react";
import wrcLogo from "/logoWRC.png"
const AcercaRally = () =>{


const paragraphs = [
    "¿Que es el World Rally Car?",

    "Desde 1973 el Campeonato Mundial de Rally ha llevado a pilotos y fabricantes a recorrer los caminos más extremos del planeta.",

    "Cada rally presenta un desafío completamente distinto. Tierra, asfalto, nieve, barro y hielo obligan a pilotos e ingenieros a adaptarse constantemente para mantenerse competitivos.",

    "Más que una carrera, el WRC es una demostración de precisión, valentía e innovación tecnológica donde cada segundo puede cambiar la historia."
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

                <div className="sticky">

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

                    <img
                        className="imgScroll"
                        src={wrcLogo}
                        style={{ opacity: imgOpacity }}
                    />
                </div>
                </div>

            </section>

        </>

    );


}  
export default AcercaRally;