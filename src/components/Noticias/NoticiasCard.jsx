const NoticiasCard = ({title,img,description}) =>{
    return(
        <>
        <div className ="flex relative flex-row items-center noticiaCard gap-5">  
            <div className="iconNew"></div>
            <img src={img} className="imgCard" alt="" />
            <div className="flex flex-col">
                <h3 className="text-2xl text-gray-200">
                    {title}
                </h3>
                <p className="text-lg text-gray-300">{description}</p>
            </div>
        </div>
        </>
    )
}
export default NoticiasCard;