import { useSelector } from "react-redux";
import Card from "../components/Card";
import { selectFavoritePokemons } from "../RTK/selector";

function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);

  return(
    <div className="favorite-page">
        <ul className="pokemon-list">
          {
            pokemon.map((e) => {
              return (
                <Card key={e.id} pokemon={e} />
              )
            })
          }
        </ul>
      </div>
  )
}
export default Favorite;