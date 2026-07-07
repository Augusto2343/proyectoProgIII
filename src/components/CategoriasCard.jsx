const CategoriasCard = ({img,title,imgSize,paragraph}) =>{
    return(
        <>
            <div className="cardCateg items-center flex flex-col">
                <img src={img} style={{width:`${imgSize? imgSize: "100%"}`,height:`${imgSize? imgSize: "100%"}`}} alt="" />
                <h4 className="titleCard">{title}</h4>
                <p className="paragraphCard">{paragraph}</p>
            </div>
        </>
    )
}
export default CategoriasCard