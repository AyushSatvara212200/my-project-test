import React, { Component } from 'react'
import { Navigate } from 'react-router';
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button';
import { NavLink } from 'react-router-dom';

const StyledButton = styled(AwesomeButton)`
  width: 200px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  -button-primary-color: #002347;
`;

export default class mainpage extends Component {
    constructor(props){
        super(props);
        let loggedIn = true
        const token = localStorage.getItem("token")
        
        if(token === null){
            loggedIn= false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Navigate to="/login" />
        }
        return (
            <>
                <h1>Welcome to the Mainpage</h1>
                <NavLink to="/">
                    <StyledButton type="primary">Log Out</StyledButton>
                </NavLink>
            </>
        )
    }
}
