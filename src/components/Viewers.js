import React from 'react'
import Styled from "styled-components"

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" />
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