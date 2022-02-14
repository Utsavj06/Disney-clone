import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.svg"
import homeIcon from "../images/home-icon.svg"
import search from "../images/search-icon.svg"
import watchList from "../images/watchlist-icon.svg"
import movieIcon from "../images/movie-icon.svg"
import seriesIcon from "../images/series-icon.svg"
import dp from "../images/myphoto.jpg"

const Header = () => {
  return (
    <Nav>
        <Logo src={logo} />
        <NavMenu>
            <a >
                <img src={homeIcon} />
                <span>Home</span>
            </a>
            <a >
                <img src={search} />
                <span>Search</span>
            </a>
            <a >
                <img src={watchList} />
                <span>Watchlist</span>
            </a>
            <a >
                <img src={movieIcon} />
                <span>Movies</span>
            </a>
            <a >
                <img src={seriesIcon} />
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src={dp} />
    </Nav>
  )
}

export default Header

const Nav = styled.div`
     height:70px;
     background-color : black;
     color : white;
     display:flex;
     align-items:center;
     padding : 0 36px;
     overflow-x:hidden;
`

const Logo = styled.img`
     width:80px;
`

const NavMenu = styled.div`
     display:flex; 
     flex:1;
     margin-left:25px;
     cursor:pointer;
     align-items:center;

     a{
         display:flex;
         align-items:center;
         padding:0 12px;
         
         img {
             height:20px;
         }
         span{
             font-size:13px;
             letter-spacing:1.5px;
             position:relative;

             &:after {
                 content:"";
                 height : 2px;
                 background:white;
                 position:absolute;
                 left:0;
                 right:0;
                 bottom:-10px;
                 opacity:0;
             }
    
         }
         
         &:hover{
            span:after{
               opacity:1;
            }
           
        }
     }
     `

const UserImg = styled.img`

        height : 40px;
        border-radius:100%;
        cursor:pointer;
`     