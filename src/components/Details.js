import React from 'react'
import styled from 'styled-components'
import background from '../images/login-background.jpg'
import Icons from "../images/Black-Screen.jpg"
import PlayBlack from '../images/play-icon-black.png'
import PlayWhite from '../images/play-icon-white.png'
import GroupIcon from '../images/group-icon.png'

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src={background} />
      </Background>
      <ImageTitle>
        <img src={Icons} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src={PlayBlack} />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={PlayWhite} />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src={GroupIcon} />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 available to awesome Videos
      </SubTitle>
      <Description>
        The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world's premier entertainment company.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`

     min-height: calc(100vh - 70px);
     padding: 0 calc(3.5vh + 5px); 
     position: relative;

`
const Background = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const ImageTitle = styled.div`
      height:30vh;
      min-height: 170px;
      width: 35vh;
      min-width: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
`

const Controls = styled.div`
      display: flex;
      align-items: center;
`

const PlayButton = styled.button`
      border-radius: 4px;
      font-size:15px;
      padding: 0px 24px;
      margin-right: 22px;
      display:flex;
      align-items: center;
      height:52px;
      background: rgb (249, 249, 249);
      border: none;
      letter-spacing: 1.8px;
      cursor: pointer;

      &:hover {
        background: rgb(198, 198, 198);
      }
`

const TrailerButton = styled(PlayButton)`
      background: rgba(0,0,0,0.3);
      border: 1px solid rgb(249, 249, 249);
      color: rgb(249, 249, 249);
      text-transform: uppercase;

`

const AddButton = styled.button`
      margin-right: 16px;
      width: 44px;
      height: 44px;
      display:flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid white;
      background-color: rgba(0,0,0,0.6);
      cursor: pointer;

      span {
        font-size: 30px;
        color: white;
      }
`

const GroupWatchButton = styled(AddButton)`

      background: rgb(0,0,0)

`

const SubTitle = styled.div`

      color: rgb(249,249,249);
      font-size: 15px;
      min-height: 20px;
      margin-top: 20px;

`

const Description = styled.div`

      line-height: 1.4;
      font-size: 20px;
      margin-top: 16px;
      color: rgb(249,249,249);

`