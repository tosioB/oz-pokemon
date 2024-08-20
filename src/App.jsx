import { Route, Routes, Link, useNavigate } from "react-router-dom"
// import Main from "./pages/Main" // 하단에 lazy로 최적화작업
// import Detail from "./pages/Detail" // 하단에 lazy로 최적화작업
// import Search from "./pages/Search" // 하단에 lazy로 최적화작업
// import Favorite from "./pages/Favorite" // 하단에 lazy로 최적화작업
import { lazy, Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMultiplePokemonById } from "./RTK/thunk"
import './assets/pokemon.scss'

// 컴포넌트 단위의 코드 스플리팅 - 리액트에서 제공하는 lazy와 suspense 기능을 이용하면 된다.
const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  const navigate = useNavigate(); // search 페이지 이동을 위한 useNavigate
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
          <Link to="/Favorite">Favorite</Link>
          <span className="inp-box">
            <input 
              type="text"
              onChange={(e) => { // 인풋에 값을 입력하면 search페이지로 접근하기
                navigate(`/search?pokemon=${e.target.value}`);
                /**
                 * 검색창에 파이리를 검색하면
                 * search 페이지로 이동하고
                 * 주소창이 http://localhost:5174/search?pokemon=파이리
                 * 로 바뀜
                 * 쿼리스트링으로 접근하기
                 */
              }}
            />
          </span>
        </nav>
        {/* lazy로 최적화 작업 후 Suspense 태그로 감싸기 */}
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Detail/:pokemonId" element={<Detail />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
