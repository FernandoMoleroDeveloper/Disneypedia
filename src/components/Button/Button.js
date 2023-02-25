import "./Button.css"

const Button = ({prePage, nexPage, setPag, numberPage}) => {

    return(
        <div className="paginacion">
            <button onClick ={()=> setPag(prePage)} className="paginacion__button">ANTERIOR</button>
            <p className="paginacion__num">{numberPage}</p>
            <button onClick ={()=> setPag(nexPage)} className="paginacion__button">SIGUIENTE</button>
        </div>

    )

}

export default Button