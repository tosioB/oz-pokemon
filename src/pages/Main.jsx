import { useSelector } from "react-redux";
import Card from "../components/Card";

function Main() {
  const pokemonData = useSelector(state => state.pokemon.data);

  return(
    <>
      <div className="main-page">
        <ul className="pokemon-list">
          {
            pokemonData.map((e) => {
              return (
                <Card key={e.id} pokemon={e} />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Main;

