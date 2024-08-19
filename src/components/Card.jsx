import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
`

const Card = ({pokemon}) => {
  const navigate = useNavigate();

  return(
    <CardContainer onClick={() => {navigate(`/detail/${pokemon.id}`)}}>
      <img src={pokemon.front} alert={pokemon.name} />
      <p>{pokemon.name}</p>
    </CardContainer>
  )
}

export default Card;