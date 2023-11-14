import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <MainContainer>
      <Header />
      <CommonContainer>
        <h2>SignUp</h2>
        <form>
          <InputContainer>
            <label>ID</label>
            <input title="ID" type="text" placeholder="아이디를 입력해주세요" />
            <button title="중복체크">중복체크</button>
          </InputContainer>
          <InputContainer>
            <label>비밀번호</label>
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </InputContainer>
          <InputContainer>
            <label>비밀번호 확인</label>
            <input
              type="text"
              placeholder="비밀번호를 다시 한번 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <label>닉네임</label>
            <input type="text" placeholder="닉네임을 입력해주세요" />
          </InputContainer>
          <br />
          <ButtonContainer>
            <MoveButton to="/login">회원가입</MoveButton>
          </ButtonContainer>
        </form>
      </CommonContainer>
    </MainContainer>
  );
};

export default SignupPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15vh 15vh;
  width: 80vw;
  height: 500px;

  background-color: pink;

  & > h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 3px;
  }

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 30px;
    width: 60vw;
    height: 300px;

    gap: 8px;
  }
`;
const InputContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;

  height:5vh;

  &>label{
    width:10vw;

    font-size:1rem;
  }
  gap:3vw;

  &>input{
    width:40vw;
    padding: 10px 15px;
  }

`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;
const MoveButton = styled(Link)`
  background-color: black;
  color: white;

  padding: 10px 15px;

  &:hover {
    background-color: white;
    color: purple;

    border: 2px solid black;
  }
`;
