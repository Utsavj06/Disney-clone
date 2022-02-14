import React from 'react'
import Styled from 'styled-components'
import image from '../images/login-background.jpg'

const Movies = () => {
  return (
    <Container>
        <h3>Recaomended for You</h3>
        <Content>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
            <Wrap>
                <img src={image} />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = Styled.div`
`

const Content = Styled.div`

       display : grid ;
       grid-gap: 20px;
       grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = Styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #808080 ;
    box-shadow: 1px 10px #000;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    &:hover {
        transform : scale(1.10);
        border-color: #ffebcd;
    }

`