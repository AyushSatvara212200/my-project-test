import React, { Component } from 'react'
import styled from "styled-components";
import image from "../Images/mountainone.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';
import { Navigate } from 'react-router-dom';


//STYLED COMPONENTS

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
 height: 60%;
 background-color: #ffffffa9;
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const LogContainer = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledTextfield = styled(TextField)`
  width: 70%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Urbanist", sans-serif;
`;
const StyledButton = styled(AwesomeButton)`
  width: 30%;
  font-family: "Urbanist", sans-serif !important;
  font-weight: bold !important;
  font-size: 15px;
`;
const SimpleText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
`;

export default class login extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state={
            username:"",
            password:"",
            loggedIn
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    

    async onSubmit(e) {
        e.preventDefault();
        const {username , password} = await this.state;
        localStorage.setItem("token","asdhajsdiajsfadnfbsakdjfadjbf")
        if(username === "ayush" && password === "1234"){
            this.setState({
                loggedIn:true
            })
        }
    }
    onChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        if(this.state.loggedIn){
            return <Navigate replace to="/mainpage"/>
        }

        return (
            <>
                <Container>
                    <Wrapper>
                        <LogContainer >Log In</LogContainer>

                        {/* Input Container */}

                        <InputContainer>
                            <StyledTextfield
                                id="outlined-basic"
                                type="text"
                                label="Username"
                                variant="outlined"
                                size="small"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <StyledTextfield
                                id="outlined-basic"
                                type="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                autoComplete="current-password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        <h3>{this.state.password}</h3>
                        </InputContainer>

                        {/* Button Container */}

                        <ButtonContainer>
                            <StyledButton variant="contained" onPress={this.onSubmit} >Submit</StyledButton>
                        </ButtonContainer>

                        {/* Simple Text */}

                        <SimpleText>
                            Don't have an account?&nbsp;
                            <NavLink
                                to="/signup"
                                style={{ textDecoration: "none", color: "blue" }}>
                                Sign Up
                            </NavLink>
                        </SimpleText>
                    </Wrapper>
                </Container>
            </>
        )
    }
}
