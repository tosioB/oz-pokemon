import { Route, Routes, Link } from "react-router-dom"
import Main from "./pages/Main"
import Detail from "./pages/Detail"
import Search from "./pages/Search"
import Favorite from "./pages/Favorite"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMultiplePokemonById } from "./RTK/thunk"
import './assets/pokemon.scss'

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, []);

  return (
    <>
      <div className="pokemon">
        <h1 className="main-title">포켓몬도감</h1>
        <nav className="menu">
          <Link to="/">Main</Link>
          <Link to="/Detail/1">Detail</Link>
          <Link to="/Search">Search</Link>
          <Link to="/Favorite">Favorite</Link>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Detail/:pokemonId" element={<Detail />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </div>
    </>
  )
}

export default App
