const Toast = ({type,title,paragraph,btn,btn2,position}) =>{
    return(
        <>
        <div className={`toast ${type} position`}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
        </>
    )
}
export default Toast;