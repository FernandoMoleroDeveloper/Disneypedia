import "./Detalle.css";


const Detalle = ({characterDetail}) => {
    return(
        <div className="opacity">
            <div className="card-detail">
                {(characterDetail?.name.length > 0) && <p className="card-detail__name">{characterDetail?.name}</p>}
                {(characterDetail?.imageUrl.length > 0) && <img className="card-detail__img" alt="detalle imagen" src={characterDetail?.imageUrl}></img>}
                {(characterDetail?.films.length > 0) && <p className="card-detail__film">Peliculas:{characterDetail?.films}</p>}
                {(characterDetail?.shortFilms.length > 0) && <p className="card-detail__short">Cortos:{characterDetail?.shortFilms}</p>}
                {(characterDetail?.tvShows.length > 0) && <p className="card-detail__show">Series:{characterDetail?.tvShows}</p>}
                {(characterDetail?.videoGames.length > 0) && <p className="card-detail__game">Videojuegos:{characterDetail?.videoGames}</p>}
                {(characterDetail?.parkAttractions.length > 0) && <p className="card-detail__park">Atracciones:{characterDetail?.parkAttractions}</p>}
                {(characterDetail?.allies.length > 0) && <p className="card-detail__allies">Aliados:{characterDetail?.allies}</p>}
                {(characterDetail?.enemies.length > 0) && <p className="card-detail__enemies">Enemigos:{characterDetail?.enemies}</p>}
            </div>
        </div>
          
    )

    
}

export default Detalle;