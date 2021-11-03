import styled from "styled-components";

const Footer = () => {
    return(
       
        <StyledFooter>
             <p>© Yan.B</p>  
        </StyledFooter>
        
        
    );
}

const StyledFooter = styled.footer`
  background:red;
  display:flex;
  justify-content:center;
  font-family:Noto Sans Mono;
  position:fixed;
  bottom:0;
  color:white;
  width:100%;
  font-weight: bold;
`

export default Footer;