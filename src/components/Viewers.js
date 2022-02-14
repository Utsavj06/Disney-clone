import React from 'react'
import Styled from "styled-components"
import disney from "../images/viewers-disney.png"
import pixar from "../images/viewers-pixar.png"
import marvel from "../images/viewers-marvel.png"
import starwars from "../images/viewers-starwars.png" 
import national from "../images/viewers-national.png"

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src={disney} />
        </Wrap>
        <Wrap>
            <img src={pixar} />
        </Wrap>
        <Wrap>
            <img src={marvel} />
        </Wrap>
        <Wrap>
            <img src={starwars} />
        </Wrap>
        <Wrap>
            <img src={national} />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = Styled.div`
margin-top: 30px; 
display:grid;
grid-template-columns: repeat(5, minmax(0,1fr));
grid-gap:25px;
`

const Wrap = Styled.div`

    border-radius:10px;
    border: 1px solid #C0C0C0 ;
    box-shadow: 1px 10px #000;

     img{
         width:100%;
         height:100%
     }

     &:hover {
         transform:scale(1.15);
         border-color: rgb(255,255,255);
     }
`