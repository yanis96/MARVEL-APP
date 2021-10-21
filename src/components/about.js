import styled from "styled-components";
import Footer from "./footer";
import Nav from "./nav";

const About = () =>{
    return(
        <PageContainer>
          <WrapContent>
            <Nav/>
            <h1>About</h1>
          </WrapContent>
            <Footer></Footer>
        </PageContainer>
    );
}

export default About;

const PageContainer = styled.div`
   display:flex;
   flex-direction:column;
   min-height:100vh;  
`

const WrapContent = styled.div`
   flex:1;
`