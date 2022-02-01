import React, { Component } from "react";
import styled from "styled-components";

import Img from "../pictures/cloud.png";

const ImgCloud = styled.img`
    position: absolute;
    opacity: 60%;
    z-index: -2;
`

const ImgCloud1 = styled(ImgCloud)`
    left: -5%;
    top: 20%;
    width: 180px;
    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 140px;
        top: 20%;
    }
`
const ImgCloud2 = styled(ImgCloud)`
    left: 50.76%;
    top: 85%; 
    width: 150px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 120px;
        left: 10%;
        top: 80%;
    }
`
const ImgCloud3 = styled(ImgCloud)`
    left: 30.01%;
    top: 75.08%; 
    width: 190px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 120px;
        left: 50%;
        top: 85%;
    }
`
const ImgCloud4 = styled(ImgCloud)`
    left: 14.79%;
    top: 90%;
    width: 190px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 120px;
        left: 22%;
        top: 1%;
    }
`
const ImgCloud5 = styled(ImgCloud)`
    left: 55.82%;
    top: 3%; 
    width: 200px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 140px;
        left: 65%;
        top: 5%;
    }
`
const ImgCloud6 = styled(ImgCloud)`
    left: -5%; 
    top: 50.5%; 
    width: 180px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 140px;
        left: 60%;
        top: 25%;
    }
`
const ImgCloud7 = styled(ImgCloud)`
    left: 3%; 
    top: 81%; 
    width: 140px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 100px;
        left: 0%;
        top: 67%;
    }
`
const ImgCloud8 = styled(ImgCloud)`
    left: 45%; 
    top: 25%; 
    width: 160px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 140px;
        left: 55%;
        top: 45%;
    }
`
const ImgCloud9 = styled(ImgCloud)`
    left: 25%;
    top: 1%; 
    width: 180.63px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 90px;
        left: 25%;
        top: 55%;
    }
`
const ImgCloud10 = styled(ImgCloud)`
    left: 80%; 
    top: 40%; 
    width: 138px;
    @media (max-width: 360px), screen and (orientation: portrait){
        width: 120px;
        left: 15%;
        top: 38%;
    }
`

class Cloud extends Component {
    render() {
        return(
            <div>
                <ImgCloud1 src={Img} alt="cloud1" />
                <ImgCloud2 src={Img} alt="cloud2" />
                <ImgCloud3 src={Img} alt="cloud3" />
                <ImgCloud4 src={Img} alt="cloud4" />
                <ImgCloud5 src={Img} alt="cloud5" />
                <ImgCloud6 src={Img} alt="cloud6" />
                <ImgCloud7 src={Img} alt="cloud7" />
                <ImgCloud8 src={Img} alt="cloud8" />
                <ImgCloud9 src={Img} alt="cloud9" />
                <ImgCloud10 src={Img} alt="cloud10" /> 
            </div>
        )
    }
}
export default Cloud;