import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
//1. ID, 비밀번호, 닉네임 중 비어있는 input이 있는 경우
//2. 중복체크를 하지 않은 경우
//3. 중복체크의 결과가 중복인 경우
            {/* <button type="button" disabled={!btnState} onClick={async()=>{
              signUp();
              handleClickButton();
            }}>회원가입</button> */}

const SignUpBtn = (btnProps) => {
  const {id, password, nickname, signUp,isChecked} = btnProps;
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/login');
  }
  return id!==null&& password!==null && nickname!==null && isChecked!==null|true?(
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
