import styled from "styled-components";

const Footer = () => {
    return(
       
        <StyledFooter>
             <p>© Yanis Bouzelha</p>  
        </StyledFooter>
        
        
    );
}

const StyledFooter = styled.footer`
  background:red;
  display:flex;
  justify-content:center;
  font-family:Noto Sans Mono;
  color:white;
`

export default Footer;