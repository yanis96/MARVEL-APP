import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";

const LoginForm = () =>{

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const checkInputs = () =>{
        if(userName.length < 1 && password.length ==0){
            alert("you should fil the inputs");
            return false;
        }else if(userName.length < 1){
            alert("username ?");
            return false;
        }else if(password.length < 1){
            alert("password ?");
            return false;
        }else{
            return true;
        }
    }

   /* const pushToken = (USERNAME,PASSWORD) => {
        const data = {username : USERNAME, password : PASSWORD};
        axios.post('https://easy-login-api.herokuapp.com/users/login',data).then(
            (response) => {
                console.log(response);
            
            }
        )
    }*/

    const pushToken = (user, pass) => {
        const data = {
              username : user,
              password : pass           
                     };
        axios.post('https://easy-login-api.herokuapp.com/users/login',data).then(
            (response)=>{
                console.log(response);
                const token = response.headers['x-access-token'];
                localStorage.setItem('token',token);
                console.log(`le token est ${token}`);
            }
        )
    }

    const submit = (use,pas) =>{
        if(checkInputs()){
            setUserName('');
            setPassword('');
            pushToken(use,pas);
            handleClick();
        }
        
    }

    const history = useHistory();
    const handleClick = () => history.push('/home');
    

    return(
       <FormContainer>
            <StyledFrom>
                <StyledLabel>Username</StyledLabel>
                <StyledInput 
                    type="text"
                    value={userName}
                    onChange={event => {
                        setUserName(event.target.value);
                    }}>
                </StyledInput>
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                    type="password"
                    value={password}
                    onChange={event => {
                        setPassword(event.target.value);
                    }}>
                </StyledInput>
                <StyledDiv>
                    <StyledButton 
                      onClick={() => submit(userName,password)}
                    >Login</StyledButton>
                </StyledDiv>
                
            </StyledFrom>
       </FormContainer>
           

       
    );

}

const FormContainer = styled.div`
         padding : 20px;
         align-items:center;
         display: flex;
         justify-content:center;
         flex-direction:column;
         margin-top:10px;
         
         
`

const StyledFrom = styled.form`
         display:flex;
         justify-content:center;
         flex-direction: column;
         width:90%;
         padding:2%;
         align-items:center;
         
         
`
const StyledInput = styled.input`
        height:30px;
        margin-bottom:12px;
        border-radius: 4px;
        outline:none;
        width:7.5cm;
        font-family: Noto Sans Mono;

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
`

const StyledLabel = styled.label`
      font-family: Noto Sans Mono;
      display:flex; 
`

const StyledDiv = styled.div`
     display:flex;
     justify-content:center;
     padding-top:2%;
`

export default LoginForm;