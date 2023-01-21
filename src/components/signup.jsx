import React, { Component } from "react";
import styled from "styled-components";
import image from "../Images/mountaintwo.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { MuiTelInput } from "mui-tel-input";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const SignContainer = styled.div`
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
  gap: 20px;
`;
const StyledTextfield = styled(TextField)`
  width: 70%;
`;
const StyledTextfieldNumber = styled(MuiTelInput)`
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

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e,info) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  }

  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <SignContainer>Sign Up</SignContainer>

            {/* Input Container */}

            <InputContainer>
              <StyledTextfield
                id="outlined-basic"
                type="text"
                label="Enter Name"
                size="small"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              <StyledTextfieldNumber
                id="outlined-basic"
                size="small"
                placeholder="Phone number"
                variant="outlined"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                
              />
              <StyledTextfield
                id="outlined-basic"
                type="email"
                label="Enter email address"
                size="small"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <StyledTextfield
                id="outlined-basic"
                type="password"
                label="Create Password"
                size="small"
                autoComplete="new-password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </InputContainer>

            {/* Button Container  */}

            <ButtonContainer>
              <StyledButton type="primary">Register</StyledButton>
            </ButtonContainer>

            {/* Simple text */}

            <SimpleText>
              Already have an account?&nbsp;
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "blue" }}>
                Log In
              </NavLink>
            </SimpleText>
          </Wrapper>
        </Container>
      </>
    );
  }
}
