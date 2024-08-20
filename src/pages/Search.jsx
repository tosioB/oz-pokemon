import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams(); // App.jsx에서 검색한 값을 받아오는 함수
  const params = searchParams.get('pokemon');
  // console.log(params) // 검색한 결과가 출력됨
  const reg = getRegExp(params);
  const pokemon = useSelector(selectPokemonByRegExp(reg)); // selector.js에서 만들어 둔 셀렉터를 이용

  /** 검색한 값과 일치하는 포켓몬을 가져와야함
   * 한국어로 정규식을 만들때 유용하게 사용할 수 있는 라이브러리(korean-regexp)
   * 정규식 라이브러리 설치 - npm i korean-regexp
   */

  return(
    <>
      <div className="search-page">
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
    </>
  )
}

export default Search;