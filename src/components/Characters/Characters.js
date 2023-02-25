import "./Characters.css";
import React from "react";
import Detalle from "../Detalle/Detalle"
//import Button from "../Button/Button"

const Characters = () => {

    const  API_URL = "https://api.disneyapi.dev/characters?page=";
    const CHAR_URL = "https://api.disneyapi.dev/characters/"
    //const [search, setSearch] = React.useState('')
    const [characterList, setCharacterList] = React.useState([]);
    const [characterId, setCharacterId] = React.useState();
    const [characterDetail, setCharacterDetail] = React.useState();
    const [page, setPage] = React.useState(1);
    const [visible, setVisible] = React.useState(false);
   
  
    React.useEffect(() => {
    
        fetch(API_URL + page)
          .then((response) => response.json())
          .then((data) => setCharacterList(data.data))
         
    },[page]);

    React.useEffect(() => {
    
      
      fetch(CHAR_URL + characterId)
        .then((response) => response.json())
        .then((data) => setCharacterDetail(data))
       
  },[characterId]);
  
    return (
      <div className="page">
        <div onClick={ ()=> setVisible(!visible) }>
        { visible && <Detalle characterDetail={characterDetail}></Detalle>}
        </div>
        <div className="container">
          {characterList.map(element => {
              return (
                  <div onClick={() => {setCharacterDetail(null); setCharacterId(element._id); setVisible(true);}} key={element._id} className="card">
                      <img className="card__img" alt="imagen personaje" src={element.imageUrl}></img>
                      <p className="card__name">{element.name}</p>
                  </div>
          )})}
        </div>
        <div className="buttons">
            <button onClick = {() => setPage (page - 1)} className="buttons__button-prev">ANTERIOR</button>
            <p className="buttons__num">{page}</p>
            <button onClick = {() => setPage (page + 1)} className="buttons__button-next">SIGUIENTE</button>
        </div>
      </div>
    )
  }
  
  export default Characters;