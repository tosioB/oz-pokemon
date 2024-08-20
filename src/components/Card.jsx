import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";
import React, { memo } from 'react';


const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
`

const Card = memo(({pokemon}) => {
  // console.log('card', pokemon.id) 최적화 memo를 위한 더블체크
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  return(
    <CardContainer onClick={() => {navigate(`/detail/${pokemon.id}`)}}>
      {isImageLoading ? <div syle={{width: "120px"}}>로딩중...</div> : null}
      <img
        src={pokemon.front}
        alert={pokemon.name}
        style={{display: isImageLoading ? "none" : "block"}}
        onLoad={() => {setIsImageLoading(false)}}
      />
      <p>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id}/>
      </p>
    </CardContainer>
  )
}) 

export default Card;