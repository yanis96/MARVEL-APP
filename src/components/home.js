import Nav from "./nav";
import About from "./about";
import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Footer from "./footer";
import styled from "styled-components";

const Home = () => {
    return(
        <PageContainer>
          <WrapContent>
            <Nav/>
          </WrapContent>
            <Footer></Footer>
        </PageContainer>
    );
}

export default Home;

const PageContainer = styled.div`
   display:flex;
   flex-direction:column;
   min-height:100vh;  
`

const WrapContent = styled.div`
   flex:1;
`