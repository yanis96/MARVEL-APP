import React from 'react';

import LoginForm from './components/loginForm';
import Logo from './components/logo';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import Test from './components/test';
import styled from 'styled-components';
import Footer from './components/footer';


function App() {
  return (
    <div>
        <Router>
            <Switch>

              <Route path='/' exact>
                  <StyledRootContainer>
                    <StyledContainer>
                      <Logo/>
                      <LoginForm/>
                    </StyledContainer>
                  </StyledRootContainer>
              </Route>

              <Route exact path="/home">
                  <Home></Home>
              </Route>

              <Route path="/about">
                  <About></About>
              </Route>

              <Route path="/test">
                <Test></Test>
              </Route>

              <Redirect to="/"></Redirect>
            </Switch>
        </Router>
      
    </div>
  );
}

const StyledRootContainer = styled.div`
   display:flex;
   justify-content:center;
   
`
const StyledContainer = styled.div`
    padding-top:2%;
    border-radius : 15px;
    width:70%;
    margin-top:15%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`


export default App;
