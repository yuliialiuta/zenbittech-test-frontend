import React, { Component } from "react";
import styled from "styled-components";

const FormSection = styled.form`
    padding: 110px 0px 50px 100px; 

    @media (max-width: 360px), screen and (orientation: portrait) {
        padding: 5em 0em 5em 0em;
    }   
`;

const H1 = styled.h1`
    margin: 0px 0px 20px 0px;

    font-size: 35px;
    color: #3E3E3E;

    @media (max-width: 360px), screen and (orientation: portrait) {
        font-size: 30px;
        margin: 0em 0em 1em 1em;    
    }
`;

const Input = styled.input`
    margin: 0px 0px 7px 0px;
    padding-left: 40px;
    height: 60px;
    width: 450px;

    font-family: "Apercu Arabic Pro";
    font-size: 15px;
    line-height: 180%;

    border: 1px solid #DCDCDC;
    border-radius: 6px;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: calc(100% - 2em);
        font-size: 1.3em;
        padding: 0.5em 1em 0.5em 1em;
        margin: 0.5em 1em 0;
    }
`;

const Textarea = styled.textarea`
    font-family: "Apercu Arabic Pro";
    padding: 30px 40px;
    width: 450px;
    height: 150px;
    left: 150px;
    top: 469px;
    font-size: 15px;
    line-height: 1.25em;
    resize: none;

    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;

    @media (max-width: 360px), screen and (orientation: portrait) {
        width: calc(100% - 2em);
        font-size: 1.3em;
        padding: 0.5em 1em 0.5em 1em;
        margin: 0.5em 1em 0;
    }
`;

const Button = styled.button`
    width: 218px;
    height: 73px;
    margin-top: 20px;

    font-family: "Apercu Arabic Pro";
    color: #FFF;
    font-size: 18px;
    background: #FAD34F;
    border-radius: 500px;
    border: white;

    @media (max-width: 360px), screen and (orientation: portrait) {
        height: 3em;
        width: 9em;
        font-size: 1.3em;
        margin: 1em 0em 0em 1em;
    }
`

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", email: "", comment: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const jsonMessage = JSON.stringify(this.state);

        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: jsonMessage
        };

        fetch("https://zenbittech-test-server.herokuapp.com/feedbacks", requestOptions)
            .then(response => {
                if(response.status == 201) {
                    alert("Your comment was sent. Thank you!");
                    this.setState({name: "", email: "", comment: ""});
                }});
    }

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }
      
    render() {
        return(
            <FormSection onSubmit={this.handleSubmit}>
                <H1>Reach out to us!</H1>
                <Input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                /><br/>
                <Input
                    type="text"
                    name="email"
                    placeholder="Your e-mail*"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                /><br />
                <Textarea
                    type="text"
                    name="comment"
                    placeholder="Your message*"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                /><br />
                <Button>Send message</Button>
            </FormSection>
        );
    }
}

export default Form;
