import axios from 'axios';
import { useState,useEffect } from 'react';
import Nav from '../nav';
import styled from 'styled-components';
import Footer from '../footer';
import { useHistory } from 'react-router';
import md5 from 'md5';

const Test = () =>{     
   
    const valueOfset = 20;
    const [currentPage, setCurrentPage] = useState(0);
    const [heros, setHeros] = useState([]);
    const [pages, setPages] = useState(0);
    const history = useHistory();
    

    const handleClick = (key) =>{
        history.push(`/details/${key}`);
    }
    
    useEffect(()=>{
        const publicKey = 'a0b450c2c826f89a387f1907f48f23b5';
        const timeStamp = new Date().getMilliseconds();
        const privateKey = '54c04b45cd42ea7a2f27173a927b40f572d6a699';
        const hash = md5(`${timeStamp}${privateKey}${publicKey}`);
        const generateUrl = 'https://gateway.marvel.com:443/v1/public/characters';
        axios({
            method:'GET',
            url: generateUrl,
            params:{
                ts:timeStamp,
                apikey:publicKey,
                hash:hash,
                offset: valueOfset * currentPage
            }
        }).then(
            (response) =>{
                console.log(response)
                setHeros(response.data.data.results);
                setPages(response.data.data.total/valueOfset);
                console.log("api reçu !!!")
                console.log(response);
                console.log(`current page : ${currentPage}`);
                console.log(`pages : ${pages}`)
            }
        ).catch((err) => {
            console.log(err)
        });
            
    },[currentPage]);

     

    return(
        <PageContainer>
            <WrapContent>
                <Nav></Nav>
                    <StyledDiv1>
                        <StyledButton onClick={()=>{
                            if(currentPage > 0){
                                setCurrentPage(currentPage -1)
                            }
                           }}>Prev
                        </StyledButton>

                        <StyledP>Page {currentPage} / {Math.ceil(pages)}</StyledP>
                        
                        <StyledButton onClick={()=>{
                            if(currentPage < pages){
                                setCurrentPage(currentPage + 1)}
                           }}> Next
                        </StyledButton>
                    </StyledDiv1>
                    <Grille>
                        { heros.map(hero => 
                            <div 
                                key={hero.id}
                                onClick={()=>{handleClick(hero.id)}}
                                >
                                        <StyledDiv><StyledH3>{hero.name}</StyledH3></StyledDiv>
                                        <StledImg src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></StledImg>
                            </div>
                        )}
                    </Grille>
            </WrapContent>
            <Footer></Footer>
        </PageContainer> 
    );
}
 export default Test;
 
  /*Styled Components*/

const Grille = styled.div`
   max-width: 1300px;
     width: 80%;
     height: auto;
     margin: 30px auto;
     display: grid;
     grid-template-columns: repeat(auto-fill, 300px);
     justify-content: center;
     grid-gap: 20px;
`

const StledImg = styled.img`
    width: 300px;
    height: 350px;
    border-radius:10px;
`
const StyledP = styled.p`
  font-family: Noto Sans Mono;
  color:white;
`
const StyledH3 = styled.h5`
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
    display:flex;
    justify-content:center;
    
`

const StyledDiv1 = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top:7px;
    
`


const StyledButton = styled.button`
      height:35px;
      margin-bottom:12px;
      border-radius:4px;
      outline:none;
      width:90px;
      align:center;
      border-radius:18px;
      text-font:Noto Sans Mono;
      font-family: Noto Sans Mono;
      color:white;
      background:red;
      border-width:1px;
      font-size:80%;
      margin-top:10px;
`