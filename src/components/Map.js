import React, { Component } from "react";
import styled from "styled-components";

import ImgMap from "../pictures/map.svg";

const ImgSection = styled.div`
    position: absolute;

    left: 100%;
    top: -75px;
    margin-left: -450px;

    @media (max-width: 768px), screen and (orientation: portrait){
        display: none;
        overflow:hidden;
    }
`
const Img = styled.img`
    width: 675px;
    height: 675px;
    border-radius: 50%;

    object-fit:cover;

    @media (max-width: 360px), screen and (orientation: portrait) {
        transform: translate(80%, 120%);
        width: 60em;
        height: 60em;
    }
`

class Map extends Component {
    render() {
        return(
            <ImgSection>
                <Img src={ImgMap} alt="map" />
            </ImgSection>
        )
    }
}

export default Map;