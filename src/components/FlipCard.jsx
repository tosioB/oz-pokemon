import { useState } from "react"
import styled from "styled-components"

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: 0.5s;
  position: relative;
`

const FrontImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

function FlipCard({front, back}) {
  const [flipped, setFlipped] = useState(false);

  return(
    <>
      <FlipImageContainer flipped={flipped}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
    </>
  )
}

export default FlipCard;