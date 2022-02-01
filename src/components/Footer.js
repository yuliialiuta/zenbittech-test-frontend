import React, { Component } from "react";
import styled from "styled-components";

import someImg from "../pictures/Group-5041.svg"

const FooterSection = styled.div`
    //height: 150px;
    background: #FAFAFA;
    border: 1px solid #D8D8D8;

    margin-top: auto;

    padding: 70px 0px 70px 300px;

    @media (max-width: 360px), screen and (orientation: portrait){
        padding: 3em 0em 3em 7em;
    }
`

const Img = styled.img`
    width: 136.76px;
    height: 20.09px;
    //margin: 60px 0px 0px 300px;

    @media (max-width: 360px), screen and (orientation: portrait){
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterSection>
                <Img src={someImg} alt="contact us in" />
            </FooterSection>
        );
    }
}

export default Footer;