import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon)

  return(
    <div className="detail-page">
      <span className="img-box">
        <img src={pokemon.front} />
      </span>
      <p className="name">{pokemon.name}</p>
      <p className="desc">{pokemon.desc}</p>
    </div>
  )
}

export default Detail;