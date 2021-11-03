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
        ).catch(e=>{
            console.log(e);
        })
    },[]);
    return(
       <PageContainer>
            <WrapContent>
                <Nav></Nav>
                <StyledDiv>
                      <StyledDiv1>
                         <StyledH3>{detail.name}</StyledH3>
                         <StyledImg src={`${detail?.thumbnail?.path}.${detail?.thumbnail?.extension}`}></StyledImg>
                         <StyledHr></StyledHr>
                         <StyledDiv2>
                             <StyledH3>Description :</StyledH3>
                             <StyledDiv3>
                                 <StyledP>{
                                     detail.description === ''? 
                                         <p>Pas de description</p>
                                     :
                                         detail.description
                                     }
                                     </StyledP>
                             </StyledDiv3>
                         </StyledDiv2>
                      </StyledDiv1>
                </StyledDiv>
            </WrapContent>
            <Footer></Footer>
       </PageContainer>
       
    );
}

export default Details;

/*Styled Components*/

const StyledHr = styled.hr`
   width:100%;
   background:black;
`

const StyledP = styled.p`
  font-family: Noto Sans Mono;
  color:white;
  font-size: smaller;
  color:black;
`
const StyledH3 = styled.h3`
  font-family: Noto Sans Mono;
  color:white;
  font-weight: bold;
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
    margin:0px;
    height:89vh;
    display:flex;
    justify-content:center;
    align-items:center;

`

const StyledDiv1 = styled.div`
    padding:15px;
    background:grey;
    height:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-radius:15px;
    padding-top:0px;
    width:35%;
`

const StyledDiv2 = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    width:100%;
    padding:5px;
    
`

const StyledDiv3 = styled.div`
  flex:1;
  height:5px;
  display:flex;
  justify-content:center;
  max-width:45vw;
  align-items:center;
`


const StyledImg = styled.img`
    width: 300px;
    height: 350px;
    border-radius:10px;
`
