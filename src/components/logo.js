import styled from 'styled-components';
import logo from './img/marvel.png';

const Logo = () => {
    return(
        <StyledConteiner>
            <StyledImg src={logo}/>
        </StyledConteiner>
    );
}

export default Logo;

const StyledConteiner = styled.div`
     width: auto;
     box-sizing:border;
     display:flex;
     justify-content:center;
`

const StyledImg = styled.img`
    width:300px;
`