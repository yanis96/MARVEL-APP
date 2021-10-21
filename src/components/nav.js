import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/marvel-logo.png";


const Nav = () => {
    return(
        <div>
               <StyledNav>

                        <StyledContainer1>
                            <StyledImg1 src={logo}/>
                        </StyledContainer1>
                        <StyledContainer2>
                            <StyledList >
                                <Link to='/about'>
                                    <li>About</li>
                                </Link>
                                <Link to='/test'>
                                    <li>Heroes</li>
                                </Link>
                                <Link to='/'>
                                    <li>Logout</li>
                                </Link>
                                <li>Contact</li>
                            </StyledList>
                        </StyledContainer2>
                </StyledNav>
            
        </div>
    );
}

export default Nav;

/*Styled Components*/

const StyledNav = styled.nav`
  background:red;
  display:flex;
  max-height:70px;
  
`

const StyledContainer1 = styled.div`
    width:20%;
    display:flex;
    justify-content:flex;
`

const StyledImg1 = styled.img`
   width:150px;
   margin-bottom:10;
`

const StyledContainer2 = styled.div`
     
     width:100%;
     display:flex;
     justify-content:flex-end;
     
`

const StyledList = styled.ul`
    list-style:none;
    width:380px;
    display:flex;
    justify-content:space-around;
    font-family: Noto Sans Mono;
    color:white;
    gap:5px;
    padding:3px;
    box-sizing:border-box;
    
`

