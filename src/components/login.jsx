import React, { Component } from 'react'
import styled from "styled-components";
import image from "../Images/mountainone.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios'


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
        //variables
        let loggedIn = true
        const token = localStorage.getItem("token")

        //Conditions
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            phone: "",
            password: "",
            loggedIn
        }

        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    onChangeHandle(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandle(e) {
        e.preventDefault();
        const { phone, password } = this.state;
        if (phone && password) {
            axios.post("http://localhost:9000/login", this.state).then((res) => {
                alert(res.data.message);
                // console.log(res.data.found);
                if (res.data.found) {
                    localStorage.setItem("token","abcdefghijklmnopqrstuvwxyz");
                    this.setState({loggedIn:true})
                } 
            })
        }else{
            alert("Invalid")
        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Navigate replace to="/mainpage" />
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
                                label="Phone"
                                variant="outlined"
                                size="small"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.onChangeHandle}
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
                                onChange={this.onChangeHandle}
                            />
                        </InputContainer>

                        {/* Button Container */}

                        <ButtonContainer>
                            <StyledButton variant="contained" onPress={this.onSubmitHandle}  >Submit</StyledButton>
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
