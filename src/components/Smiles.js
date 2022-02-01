import React, { Component } from "react";
import styled from "styled-components";

import Img1 from "../pictures/greenSmile.svg";
import Img2 from "../pictures/pinkSmile1.svg";
import Img3 from "../pictures/pinkSmile2.svg";
import Img4 from "../pictures/yellowEllipse.svg";
import Img5 from "../pictures/yellowSmile1.svg";
import Img6 from "../pictures/yellowSmile2.svg";
import Img7 from "../pictures/yellowSmile3.svg";

const ImgGreen = styled.img`
    position: absolute;
    width: 78.46px;
    left: 80.14%;
    margin-top: -167px;
    
    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 40px;
        left: 100%;
        margin-top: -123px;
        margin-left: -90px;
        z-index: 1;
    }

`
const ImgPink1 = styled.img`
    position: absolute;
    z-index: 1;
    width: 250px;
    left: 53.73%;
    top: 57.07%;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 170px;
        left: 100%;
        margin-left: -170px;
        top: 65%;
    }
`
const ImgPink2 = styled.img`
    position: absolute;
    width: 225px;
    left: 1.73%;
    margin-top: -180px;
    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 140px;
        left: -17px;
        margin-top: -112px;
        z-index: 1;
    }
`
const ImgYellowEllipse = styled.img`
    position: absolute;
    left: 45%;
    top: 3%;

    @media (max-width: 360px), screen and (orientation: portrait) {
        left: 55%;
        top: 25px;
    }
`
const ImgYellow1 = styled.img`
    position: absolute;
    z-index: 1;
    width: 120px;

    left: 53.73%;
    top: 57.07%;

    margin-top: -40px;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 75px;
        left: 100%;
        margin-top: -15px;
        margin-left: -170px;
        top: 65%;
    }
`
const ImgYellow2 = styled.img`
    position: absolute;
    left: 0.1%;
    top: 1.5%;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 100px;
        top: 0px;
        left: 0px;
    }

`
const ImgYellow3 = styled.img`
    position: absolute;
    left: 100%;

    margin-top: -125px;
    margin-left: -85px;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: 60px;
        z-index: 1;
        left: 100%;
        margin-top: -100px;
        margin-left: -60px;
    }
`

class Smiles extends Component {
    render() {
        return(
            <div>
                <ImgGreen src={Img1} alt="smile" />
                <ImgPink1 src={Img2} alt="smile" />
                <ImgPink2 src={Img3} alt="smile" />
                <ImgYellowEllipse src={Img4} alt="smile" />
                <ImgYellow1 src={Img5} alt="smile" />
                <ImgYellow2 src={Img6} alt="smile" />
                <ImgYellow3 src={Img7} alt="smile" /> 
            </div>
        )
    }
}

export default Smiles;
