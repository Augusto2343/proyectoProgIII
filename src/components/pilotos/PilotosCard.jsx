import "./PilotosCard.css"
const PilotosCard = ({info}) =>{
    return(
        <>
        <div className="pilot-card" style={{
                "--accent-color": info.enfasisColor,
                "--accent-shadow": `${info.enfasisColor}26`

        }}>

    <div className="pilot-image">
        <img
            src={info.image}
            alt={info.name}
        />

        {/* degradado sobre la foto */}
        <div className="pilot-image-gradient"></div>
    </div>


    <div className="pilot-content">


        <span className="pilot-role" style={{
            color:`${info.enfasisColor}`
        }}>
            PILOTO
        </span>

        <h3>
            {info.name}
        </h3>

        <p>
            {info.team}
        </p>

        <div className="pilot-divider" style={{
                        "--accent-color": info.enfasisColor,
        }}></div>

        <div className="pilot-stats">

            <div>
                <span>PAÍS</span>
                <strong>{info.country}</strong>
            </div>

            <div>
                <span>Campeonatos</span>
                <strong>{info.championships}</strong>
            </div>

            <div>
                <span>PODIOS</span>
                <strong>{info.podiums}</strong>
            </div>

        </div>

    </div>

</div>
        </>
    )
}
export default PilotosCard;