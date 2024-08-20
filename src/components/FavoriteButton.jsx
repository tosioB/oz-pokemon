import { useDispatch, useSelector } from "react-redux"
import { favoriteSlice } from "../RTK/slice";

function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
  const dispatch = useDispatch();

  return(
    <button
      className={ isFavorite ? "favorite-btn active" : "favorite-btn"}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(isFavorite ? favoriteSlice.actions.removeFormFavorite({pokemonId}) : favoriteSlice.actions.addToFavorite({pokemonId}))
      }}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}

export default FavoriteButton;