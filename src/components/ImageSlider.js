import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styledComponents from 'styled-components';

const ImageSlider = () => {

    let settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }
   
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="/images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-badag.jpg" alt="" />
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top:20px; 

    ul li button {
        &:before {
            font-size:10px;
            color:white;
        }
    }

    li.slick-action button::before {
        color: white;
    }

    .slick-list{
        overflow:visible;
    }

    button {
        z-index:1;
    }
`

const Wrap = styled.div`
cursor:pointer;
    img{
        border-radius:4px;
        width:100%;
        height:100%;
    }
`