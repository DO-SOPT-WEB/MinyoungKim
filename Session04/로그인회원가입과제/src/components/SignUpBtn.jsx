import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const SignUpBtn = (btnProps) => {
  const {id, password, nickname, signUp,isChecked,checkPassword} = btnProps;
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/login');
  }
  return id!==null&& password!==null && nickname!==null && checkPassword!==null && password===checkPassword && isChecked!==true?(
    <SignUpBtnWrapper
      type="button"
      onClick={()=>{
        signUp();
        handleClickButton();
      }}>
      회원가입
    </SignUpBtnWrapper> 
  ):(
    <SignUpBtnInactivated>회원가입</SignUpBtnInactivated>
  );
};

export default SignUpBtn;

const SignUpBtnWrapper = styled.button`
  background-color: black;
  color: white;

  padding: 10px 15px;
  border-radius: 0;
  width:53vw;
  gap:3vw;
  
  &:hover {
    background-color: white;
    color: purple;
    border: 2px solid black;
  }
`
const SignUpBtnInactivated = styled.div`
  border-radius: 0;

  padding: 10px 15px;
  width:53vw;
  gap:3vw;

  background-color: brown;
  opacity: 70%;
`
