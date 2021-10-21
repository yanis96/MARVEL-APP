import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import styled from "styled-components";
import Nav from "../nav";
import Footer from "../footer";

const Details = (props) =>{

    const param = useParams();

    console.log('Details props --->',param);
    const [detail, setDetail] = useState({})
    
     useEffect(()=>{

        const publicKey = 'a0b450c2c826f89a387f1907f48f23b5';
        const timeStamp = new Date().getMilliseconds();
        const privateKey = '54c04b45cd42ea7a2f27173a927b40f572d6a699';
        const hash = md5(`${timeStamp}${privateKey}${publicKey}`);
        const generateUrl = `https://gateway.marvel.com:443/v1/public/characters/${param.id}`;

        axios({
            method:'GET',
            url: generateUrl,
            params:{
                ts:timeStamp,
                apikey:publicKey,
                hash:hash,
            }
        }).then(
            (response)=>{
               console.log(response.data.data.results[0]);
               setDetail(response.data.data.results[0]);
            }
        )
    },[]);
    return(
       <PageContainer>
            <WrapContent>
                <Nav></Nav>
                <StyledDiv>
                      <StyledDiv1>
                      
                      </StyledDiv1>
                </StyledDiv>
            </WrapContent>
            <Footer></Footer>
       </PageContainer>
       
    );
}

export default Details;

/*Styled Components*/


const StyledP = styled.p`
  font-family: Noto Sans Mono;
  color:white;
`
const StyledH2 = styled.h2`
  font-family: Noto Sans Mono;
  color:white;
`

const PageContainer = styled.div`
   display:flex;
   flex-direction:column;
   min-height:100vh;  
`

const WrapContent = styled.div`
   flex:1;
   background:#222222;
   
`

const StyledDiv = styled.div`
    background:yellow;
    margin:0px;

`

const StyledDiv1 = styled.div`
    padding:15px;
    
`

const StyledImg = styled.img`
    width: 300px;
    height: 350px;
    border-radius:10px;
`
