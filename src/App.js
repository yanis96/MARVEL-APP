import React from 'react';

import LoginForm from './components/loginForm';
import Logo from './components/logo';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import Test from './components/test';
import styled from 'styled-components';
import Footer from './components/footer';
import Details from './components/test/details';


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

              <Route path="/details/:id">
                <Details></Details>
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
    max-width:450px;
    height:450px;
    box-shadow: -15px -15px 15px rgba(255,255,255,0.2),
                15px 15px 15px rgba(0,0,0,0.1);
`


export default App;
