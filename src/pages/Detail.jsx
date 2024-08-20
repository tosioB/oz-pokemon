import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon)

  return(
    <div className="detail-page">
      <div className="pokemon-box">
        <span className="img-box">
          <FlipCard front={pokemon.front} back={pokemon.back} />
        </span>
        <p className="name">{pokemon.name}</p>
        <p className="desc">{pokemon.desc}</p>
        <FavoriteButton pokemonId={Number(pokemonId)} />
        
      </div>
    </div>
  )
}

export default Detail;